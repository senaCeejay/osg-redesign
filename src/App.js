import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
import Layout from './layout/Layout';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {

    return (
        <>
            <Layout>
                <ScrollToTop />
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/category' element={<Category />} />
                </Routes >
            </Layout>

        </>
    );
}

export default App;
