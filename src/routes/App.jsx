import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import CreateNewPassword from '../containers/CreateNewPassword';
import RecoveryPassword from '../containers/RecoveryPasswordMessage';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import '../styles/CreateNewPassword.scss';

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-new-password" element={<CreateNewPassword />} />
                    <Route path="/recovery-password" element={<RecoveryPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};
export default App;