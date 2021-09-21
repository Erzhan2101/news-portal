import React from 'react';

const Button = ({onClick, title, color="green"}) => {
    return (
        <button type="button" className={`btn btn-${color} d-block ms-auto mt-4`} onClick={onClick}>
            {title}
        </button>

    );
};

export default Button;