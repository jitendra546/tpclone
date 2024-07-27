import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Applayout from './component/Applayout';
let App = ()=>{
    return(
        <>
            <Header/>
            <Applayout/>
        </>
    )
};

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);