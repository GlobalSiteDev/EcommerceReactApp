import React from 'react';

import classes from './Header.css';

const header = () => (
    <div className={classes.Header}>
        <div>LOGO</div>
        <nav className={classes.Navbar}>
            <a href="/">HOME</a>
            <a href="/">CART</a>
        </nav>
    </div>
)

export default header;
