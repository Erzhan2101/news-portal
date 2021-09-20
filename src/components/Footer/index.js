import React from 'react';
import "./style.css"
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <Link to={"/"} className="footer-logo">News portal V8</Link>
            <p className="site-author">© 2021 Erzhan Taalaibekov</p>
        </footer>
    );
};

export default Footer;