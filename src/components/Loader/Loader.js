import React from 'react';

import classes from './Loader.css';
import loadingGIF from '../../assets/loader.gif';

const loader = (props) => (
    <div className={classes.Container}>
        <img src={loadingGIF} alt='loading' className={classes.Image}/>
        <h1 className={classes.Title}>{props.title}</h1>
    </div>
)

export default loader;
