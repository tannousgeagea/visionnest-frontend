import React from 'react';
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <Helmet>
                <title>VisionNest</title>
                <meta property="og:title" content="VisionNest: have a chat with your data" /> 
            </Helmet>

            

        </div>
    )
}

export default Home