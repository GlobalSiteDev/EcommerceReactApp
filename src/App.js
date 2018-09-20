import React, { Component } from 'react';

import Header from './components/Header/Header';
import ProductsGrid from './containers/ProductsGrid/ProductsGrid';

class App extends Component {

    render () {
        return (
            <div>
                <Header />
                <ProductsGrid />
            </div>
        );
    }
}

export default App;
