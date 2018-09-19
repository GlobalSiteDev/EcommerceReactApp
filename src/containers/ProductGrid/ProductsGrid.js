import React, { Component } from 'react';
import getProducts from '../../utils/getProducts';

import classes from './ProductGrid.css';
import ProductCard from '../../components/ProductCard/ProductCard';

class ProductsGrid extends Component {
    state = { 
        products: []
     }

    componentWillMount() {
        getProducts(1, 20).then(response => this.setState({ products: response.data }));
    }

    renderProducts() {
        return this.state.products.map(product => <ProductCard key={product.id} face={product.face} size={product.size} /> );
    }

    render() {
        return (
            <section className={classes.GridContainer}>
                {this.renderProducts()}
            </section>
            
        )
    }
}

export default ProductsGrid;