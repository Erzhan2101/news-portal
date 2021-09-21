import React from 'react';

const Button = ({onClick}) => {
    return (
        <button type="button" className="btn btn-secondary d-block ms-auto mt-4" onClick={onClick}>
            Добавить новый контакт
        </button>
    );
};

export default Button;