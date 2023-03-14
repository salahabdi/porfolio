import React from 'react';
import './styles/Footer.scss';

const Footer = () => {
    return (
        <footer className="footer card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-muted mb-0">Made with <i className="fa fa-heart"></i> by you</p>
                    <div>
                        <a href="https://github.com/yourusername" className="text-muted mr-2" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
                        <a href="https://www.linkedin.com/in/yourusername" className="text-muted" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
