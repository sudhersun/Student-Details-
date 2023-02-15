import React, { useEffect } from 'react';
import './EducationDetails.css';
import Button from 'react-bootstrap/Button';
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router';

const EducationDetails = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    const handleBack = (e) => {
        e.preventDefault();
        localStorage.removeItem('pnext');
        navigate('/Persional Details');
    }
    const handleSubmit = () => {

    }
    const handleClick = (e) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('pnext');
        navigate('/');
    }
    useEffect(() => {
        if (!localStorage.getItem('pnext') || !localStorage.getItem('auth')) {
            navigate('/Persional Details');
            navigate('/');
        }
        // eslint-disable-next-line
    }, [])
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
                        <Button className="persional-btn" onClick={handleClick}>Logout</Button>
                    </div>
                </div>
                <div className="main-table" id='main-table'>
                    <div className="details-heading">
                        <h3>Education Details</h3>
                    </div>
                    <form action="#" id='form-details'>
                        <table>
                            <tbody>

                                <tr>
                                    <td className='table-heading'>SSLC / X</td>
                                    <td>SSLC REGISTRATION NO <input type="text" placeholder='SSLC Registration / Roll No' /></td>
                                    <td>YEAR OF PASSING <input type="text" placeholder='YOP [SSLC]' size='10' /></td>
                                    <td>NAME OF THE INSTITUTION <input type="text" placeholder='Name of th Institution' /></td>
                                    <td>DISTRICT <input type="text" placeholder='District' size='12' /></td>
                                    <td>STATE <input type="text" placeholder='State' size='10' /></td>
                                </tr>
                                <tr>
                                    <td className='table-heading'>HSC / XII / DIPLOMA</td>
                                    <td>HSC / DIP REGISTRATION NO <input type="text" placeholder='SSLC Registration / Roll No' /></td>
                                    <td>YEAR OF PASSING <input type="text" placeholder='YOP [SSLC]' size='10' /></td>
                                    <td>NAME OF THE INSTITUTION <input type="text" placeholder='Name of th Institution' /></td>
                                    <td>DISTRICT <input type="text" placeholder='District' size='12' /></td>
                                    <td>STATE <input type="text" placeholder='State' size='10' /></td>
                                </tr>
                                <tr>
                                    <td className='table-heading'>DEGREE</td>
                                    <td>DEGREE REGISTRATION NO <input type="text" placeholder='SSLC Registration / Roll No' /></td>
                                    <td>YEAR OF PASSING <input type="text" placeholder='YOP [SSLC]' size='10' /></td>
                                    <td>NAME OF THE INSTITUTION <input type="text" placeholder='Name of th Institution' /></td>
                                    <td>DISTRICT <input type="text" placeholder='District' size='12' /></td>
                                    <td>STATE <input type="text" placeholder='State' size='10' /></td>
                                </tr>
                                <tr>
                                    <td className='table-heading'>
                                        QUALIFY DEGREE
                                        <select name="degree" id="degree">
                                            <option >--Select--</option>
                                            <option value="be">BE</option>
                                            <option value="b.tech">B.Tech</option>
                                            <option value="b.sc">B.Sc</option>
                                            <option value="b.com">B.Com</option>
                                        </select>
                                    </td>
                                    <td>
                                        SPECIALIZATION
                                        <select name="degree" id="degree">
                                            <option >--Select--</option>
                                            <option value="cse">CSE</option>
                                            <option value="mech">MECH</option>
                                            <option value="ece">ECE</option>
                                            <option value="it">IT</option>
                                        </select>
                                    </td>
                                    <td>UNIVERSITY NAME <input type="text" placeholder='University Name' /></td>
                                    <td>
                                        FINAL / PRE - FINAL
                                        <select name="degree" id="degree">
                                            <option >--Select--</option>
                                            <option value="completed">Completed</option>
                                            <option value="purshing">On Purshing</option>
                                        </select>
                                    </td>
                                    <td>
                                        YEAR ON PURSHING
                                        <select name="year" id="year">
                                            <option >--Select--</option>
                                            <option value="3rd">3rd Year</option>
                                            <option value="4th">4th Year</option>
                                        </select>
                                    </td>
                                    <td>% OF MARKS <input type="text" placeholder='Precentage' size='10' /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div className="form-btn">
                        <Button className='next-btn' onClick={handleBack}>Back</Button>
                        <Button className='next-btn' onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>
            </div>
            <div className="footer-content">
                <p>Copyrigths @ 2023 - content</p>
            </div>
        </div>
    );
}

export default EducationDetails;
