import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Student-Registration/LoginPage/StudentLogin'
import EducationDetails from '../Student-Registration/EducationDetails/EducationDetails';
import Persional from '../Student-Registration/PersionalDetails/PersionalDetails';

const StudentsDetailsRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<Login />} />
                    <Route exact path='/Persional Details' element={<Persional />} />
                    <Route exact path='/Education Details' element={<EducationDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default StudentsDetailsRouter;
