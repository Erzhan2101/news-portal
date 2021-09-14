import React from 'react';
import './style.css'

const Spinner = () => {
    return (
        <div className="loading">
            <div className="atom-spinner">
                <div className="spinner-inner">
                    <div className="spinner-line"/>
                    <div className="spinner-line"/>
                    <div className="spinner-line"/>
                    <div className="spinner-circle">
                        &#9679;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;