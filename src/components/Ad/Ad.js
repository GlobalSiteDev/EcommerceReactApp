import React from 'react';

import classes from './Ad.css';

const Ad = () => {
    const adUrl = `http://localhost:3000/ads/?r=${Math.floor(Math.random()*1000)}`
    return (
        <div className={classes.AdContainer}>
            <img  src={adUrl} className={classes.Image} />
            <p className={classes.Text}>Lorem ipsum</p>
        </div>
    )
}

export default Ad;
