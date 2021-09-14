import React from 'react';
import './style.css'


const BtnUp = () => {

    const btnUp = () => {
        window.scroll(0, 0)
    }

    // const btnBottom = () => {
    //     window.scrollTo(0,document.body.scrollHeight);
    // }

    return (
        <div>
            <button className="btn-up" onClick={btnUp}><i className='bx bxs-up-arrow'/></button>
            {/*<button className="btn-way-down" onClick={btnBottom}><i className='bx bxs-up-arrow'/></button>*/}
        </div>
    );
};

export default BtnUp;