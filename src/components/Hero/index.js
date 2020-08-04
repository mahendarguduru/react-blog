import React from 'react';
import './style.css';
import Card from '../UI/card';
import Logo from '../Logo'
import Navbar from '../Navbar';

const Hero=()=>{
    return(
        <div>
            <Card style={{borderRadius:'5px'}}>
                <div style={{padding:'50px 0'}}>
                    <Logo/>
                </div>
                <Navbar/>
            </Card>
        </div>
    )
}

export default Hero;