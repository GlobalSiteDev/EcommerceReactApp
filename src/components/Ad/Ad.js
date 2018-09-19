import React from 'react';

const Ad = () => {
    const adUrl = `/ads/?r=${Math.floor(Math.random()*1000)}`
    return (
        <div className="classes.AdContainer">
            <img  src={adUrl} style={classes.Image} />
        </div>
    )
}

export default Ad;
