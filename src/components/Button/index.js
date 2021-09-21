import React from 'react';

const Button = ({onClick, title}) => {
    return (
        <button type="button" className="btn btn-secondary d-block ms-auto mt-4" onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;