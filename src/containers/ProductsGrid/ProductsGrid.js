import React, { Component } from 'react';
import getProducts from '../../utils/getProducts';

import classes from './ProductGrid.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import Ad from '../../components/Ad/Ad';
import Loader from '../../components/Loader/Loader';
import SortMenu from '../../components/SortMenu/SortMenu';

class ProductsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cache: [],
            isLoading: false,
            loadingTitle: 'loading.....',
            page: 1,
            limit: 20,
            sortType: null,
            moreProducts: true,
        };
        this.handleScrollToBottom = this.handleScrollToBottom.bind(this);
        this.handleSortAction = this.handleSortAction.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollToBottom);
        this.getFirstProducts();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollToBottom);
    }

    // loading first products (in ComponentWillMount)
    getFirstProducts() {
        getProducts(this.state.page, this.state.limit).then((response) => {
            this.setState((prevState) => ({
                products: response.data,
                page: prevState.page + 1
            }));
            this.prefetchProducts();
        });
    }

    // prefetching next products
    prefetchProducts() {
        this.setState({ isLoading: true });
        getProducts(this.state.page, this.state.limit, this.state.sortType).then((response) => {
            if (response.data.length == 0) {
                this.setState(() => ({
                    cache: [],
                    loadingTitle: '~ end of catalogue ~',
                    moreProducts: false
                }));
            } else {
                this.setState((prevState) => ({
                    cache: response.data,
                    page: prevState.page + 1,
                    isLoading: false
                }));
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    handleSortAction = (sortType) => {
        const currentProducts = this.state.products;
        currentProducts.sort((prev, next) => {
            const a = prev[sortType], b = next[sortType];
            if (sortType === 'id') {
                // since IDs are string compare them as strings
                return a.localeCompare(b)
            }
            return parseInt(a - b);
        });
        this.setState({
            products: currentProducts,
            sortType: sortType,
        });
    }

    renderPrefetchedProducts() {
        this.setState((prevState) => ({
            products: prevState.products.concat(prevState.cache),
            cache: []
        }));
        // getting next products
        this.prefetchProducts();
    }


    handleScrollToBottom(event) {
        event.preventDefault();
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        const reachedBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        // when user reaches bottom of the page render and products only if there're 
        // more in the cache
        if (reachedBottom && this.state.cache.length > 0) {
            this.renderPrefetchedProducts();
        }
    }

    render() {
        const { state } = this;
        return (
            <div>
            <aside><SortMenu sortAction={this.handleSortAction} /></aside>
            <main className={classes.GridContainer}>
                {
                    state.products.map((item, index) => {
                        let counter = 0;
                        // Since arr starts from 0 I need to increment index by 1
                        // to show the add after each 20 products.
                        // Using counter to set keys for <Ad />
                        if ((index + 1) % 20 === 0 && index !== 0 && this.state.moreProducts) {
                            counter++;
                            return [
                                <ProductCard
                                    key={index}
                                    face={item.face}
                                    size={item.size}
                                    price={item.price}
                                    date={item.date}
                                />,
                                <Ad key={counter} />,
                            ]
                        } else {
                            return (
                                <ProductCard
                                    key={index}
                                    face={item.face}
                                    size={item.size}
                                    price={item.price}
                                    date={item.date}
                                />
                            )
                        }
                    })
                }
                <div>
                    {
                        state.isLoading ? <Loader title={state.loadingTitle}/> : (<div></div>)
                    }
                </div>
            </main>
            </div>
        )
    }
}

export default ProductsGrid;
