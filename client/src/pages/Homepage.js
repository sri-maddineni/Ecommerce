import React from 'react'
import  Header  from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import  { Toaster } from 'react-hot-toast';

import { useContext } from 'react';
import AuthContext from '../context/AuthContext';


export const Homepage = () => {

    
    const [auth]=useContext(AuthContext);
   

    return (
        <>
            <Header />
            <Toaster/>
            
            
            <pre>
                {JSON.stringify(auth,null,4)}
               </pre><Footer />

        </>

    )
}
