import React from 'react';
import Logo from '../image/logo.png';

const Navbar = () => {
    return (
        <div className='navbar-main-container'>
            <nav className='navbar ' style={{backgroundColor: '#F3B191', color: '#5b2828'}}>
                <div className="container">
                    <div className="navbar-logo" ><img src={Logo} alt="logo"  style={{width: '4rem'}} /></div>
                    <div className="navbar-heading">
                        <h1>UNIVERSITY NAME, PLACE</h1>
                    </div>
                    <div className="navbar-details px-4">
                        <ul style={{listStyle: 'none'}}>
                            <li>Address</li>
                            <li>Phone</li>
                        </ul>
                    </div>
                </div>
            </nav>      
        </div>
    );
}

export default Navbar;
