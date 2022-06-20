import React from 'react';

import {Footer, Blog, Possibility, Features, Header, WhatGPT3} from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gpt3__whatgpt3'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <Features />
        <WhatGPT3 />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
    
  )
}

export default App;