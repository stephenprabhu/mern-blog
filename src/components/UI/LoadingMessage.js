import React from 'react';
import SpinnerGif from '../../assets/images/Spin-1s-200px.gif';


const LoadingMessage = () => {
    return (
            <div>
            <h5>Getting Articles From Database <img width="50" src={SpinnerGif} /></h5>
            </div>
    )
}

export default LoadingMessage
