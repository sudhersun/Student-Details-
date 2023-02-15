import './PersionalDetails.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router';

const PersionalDetails = () => {
    const [logout, setLogout] = useState(false);
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    useEffect(() => {
        if (!localStorage.getItem('auth')) {
            navigate('/')
        }
        // eslint-disable-next-line
    }, [logout]);
    const handleClick = (e) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('pnext');
        setLogout(true);
    }
    const handleNext = () => {
        localStorage.setItem('pnext', true);
        navigate('/Education Details');
    }
    useEffect(() => {
        if (localStorage.getItem('pnext')) {
            navigate('/Education Details');
        }
        // eslint-disable-next-line
    },[])
    return (
        <div>
            <Navbar />
            <div className="container" id='main-detail-container'>
                <div className="top-content">
                    <div className="app-detail">
                        <h4>{username}</h4>
                        <p>Applicatio NO: 121245</p>
                    </div>
                    <div className="button-container">
                        <Button variant="primary" className="persional-btn" onClick={handleClick}>Logout</Button>
                    </div>
                </div>
                <div className="main-table">
                    <div className="details-heading">
                        <h3>Persional Details</h3>
                    </div>
                    <form action="#" id='form-details'>
                        <div className="left-side-details">
                            <div className="form-value">
                                <label htmlFor="gender">GENDER</label>
                                <select name="form-details" id="form-details">
                                    <option value="/">--Select--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-value">
                                <label htmlFor="community">COMMUNITY</label>
                                <select name="form-details" id="form-details">
                                    <option value="/">--Select--</option>
                                    <option value="MBC">MBC</option>
                                    <option value="OC">OC</option>
                                    <option value="SC/ST">SC/ST</option>
                                </select>
                            </div>
                            <div className="form-value">
                                <label htmlFor="community">NATIONALIETY</label>
                                <select name="form-details" id="form-details">
                                    <option value="/">--Select--</option>
                                    <option value="INDIAN">INDIAN</option>
                                    <option value="AMERCIAN">AMERICAN</option>
                                    <option value="UK">UK</option>
                                </select>
                            </div>
                            <div className="form-value">
                                <label htmlFor="community">RELIGION</label>
                                <select name="form-details" id="form-details">
                                    <option value="/">--Select--</option>
                                    <option value="HINDU">HINDU</option>
                                    <option value="MUSLIM">MUSLIM</option>
                                    <option value="CHRISTIAN">CHRISTIAN</option>
                                </select>
                            </div>
                        </div>
                        <div className="center-side-details">
                            <div className="form-value">
                                <label htmlFor="address">ADDRESS</label><br />
                                <input type="text" id='address' placeholder='Address' />
                            </div>
                            <div className="form-value">
                                <label htmlFor="pincode">PINCODE</label><br />
                                <input type="text" id='pincode' placeholder='Pincode' />
                            </div>
                            <div className="form-value">
                                <label htmlFor="city">CITY</label><br />
                                <input type="text" id='city' placeholder='city' />
                            </div>
                            <div className="form-value">
                                <label htmlFor="state">STATE</label>
                                <select name="form-details" id="form-details">
                                    <option value="/">--Select--</option>
                                    <option value="tamilnadu">Tamil Nadu</option>
                                    <option value="kerala">Kerala</option>
                                    <option value="mumbai">Mumbai</option>
                                </select>
                            </div>
                        </div>
                        <div className="right-side-details">
                            <div className="form-value">
                                <label>SRILANKAN TAMIL REFUGEE</label>
                                <select name="form-details" id="form-details">
                                    <option value="/">--Select--</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="form-value">
                                <label htmlFor="gender">ANNUAL INCOME OF PARENT</label>
                                <select name="form-details" id="form-details">
                                    <option value="/">--Select--</option>
                                    <option value="1L-5L">1,00,000 - 5,00,000</option>
                                    <option value="6L">6,00,000 & Above</option>
                                </select>
                            </div>
                            <div className="form-value">
                                <label htmlFor="gender">DIFFERENTLY ABLED PERSION</label>
                                <select name="form-details" id="form-details">
                                    <option value="/">--Select--</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="form-value">
                                <label htmlFor="gender">ELIGIBLE FOR POSTMATRIC SCHOLARSHIP</label>
                                <select name="form-details" id="form-details">
                                    <option value="/">--Select--</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <div className="form-btn">
                        <Button className='next-btn' id= 'next-btn' onClick={handleNext}>Next</Button>
                    </div>
                </div>
            </div>
            <div className="footer-content">
                <p>Copyrigths @ 2023 - content</p>
            </div>
        </div>
    );
}

export default PersionalDetails;
