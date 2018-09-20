import React from 'react';

import classes from './ProductCard.css';
import { formatDate } from '../../utils/formatDate';
import { formatPrice } from '../../utils/formatPrice';

const ProductCard = (props) => (
    <div className={classes.CardContainer}>
        <div className={classes.ImageContainer}>
            <div className={classes.Image} style={{ fontSize: props.size }}>{props.face}</div>
        </div>
        <div className={classes.InfoContainer}>
            <p>Added {formatDate(props.date)}</p>
            <p>Price: ${formatPrice(props.price)}</p>
            <button className={classes.Button}>Buy!</button>
        </div>
    </div>
)

export default ProductCard;
