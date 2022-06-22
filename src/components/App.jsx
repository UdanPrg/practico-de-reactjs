import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';
import '../styles/Login.scss';

const App = () => {
    return(
        <Layout>
            <Login />
        </Layout>
    );
};
export default App;