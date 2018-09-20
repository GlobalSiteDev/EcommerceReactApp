import React, { Component } from 'react';

import classes from './SortMenu.css';

class SortMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOptions: [
                { value: 'size', text: 'Size' },
                { value: 'price', text: 'Price' },
                { value: 'id', text: 'ID (default)' }
            ],
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(e) {
        const selectedItem = e.target.value;
        // call the sortAction passed as a prop
        // from ProductsGrid container
        this.props.sortAction(selectedItem);
    }


    render() {
        const { state } = this;
        return (
            <div className={classes.Container}>
                <span className={classes.Title}>
                    Sort By: 
                </span>
                {
                    state.sortOptions.map((item, index) => {
                        return (
                            <div className={classes.Option} key={index}>
                                <label>
                                    <input type="radio" value={item.value} onChange={this.handleSelectChange} name="sort" />
                                    {item.text}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default SortMenu;
