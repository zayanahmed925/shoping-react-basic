import React from 'react';
import './menubar.css'
const Menubar = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h2 className='p-2 fw-bold'>logo</h2>
                    </div>
                    <div className="col-md-10 menu-container d-flex justify-content-end">
                        <li className='list me-3 p-3 fw-bold'>Menu</li>
                        <li className='list me-3 p-3 fw-bold'>Cart <sup>{props.count}</sup></li>
                        <li className='list me-3 p-3 fw-bold'>Contact</li>
                        <li className='list me-3 p-3 fw-bold'>About Us</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;