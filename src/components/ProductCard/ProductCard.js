import React from 'react';

import classes from './ProductCard.css';

const ProductCard = (props) => (
    <div className={classes.CardContainer}>
        <div className={classes.ImageContainer}>
            <div className={classes.Image} style={{ fontSize: props.size }}>{props.face}</div>
        </div>
        <div className={classes.InfoContainer}>
            <p>Added ... days ago</p>
            <p>Price: ...</p>
            <button className={classes.Button}>Buy!</button>
        </div>
    </div>
)

export default ProductCard;
