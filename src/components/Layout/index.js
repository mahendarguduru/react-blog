import React from 'react';
import './style.css';
import Card from '../UI/card';

const Layout=(props)=>{
    return(
        <div style={{textAlign:'center', marginBottom:'20px'}}>
            <Card style={{borderRadius:'5px'}}>
                <div className="address">
                <div style={{width:'30%'}}>
                    <section className="companyName">
                        <h6>mahendar guduru</h6>
                        <p style={{margin:'0'}}>A Student from Kakatiya University</p>
                    </section>
                </div>
                <div style={{width:'40%'}}>
                   <h7>Address:</h7>
                   <p style={{margin:'0', color:'#6c6c6c'}}>3-168/B, Rajavaram, Chilpur, Jangaon, 506144.</p>
                   <p style={{margin:'0', color:'#6c6c6c'}}>TELANGANA, INDIA.</p>

                </div>
                <div className="social" >
                    <a href="https://www.facebook.com/mahendar.guduru/"><img src={require('../../Assets/icons/fb.jpg')} alt="fb"/></a>
                    <a href="https://www.instagram.com/mahendar_guduru/"><img src={require('../../Assets/icons/insta.jpg')} alt="insta"/></a>
                    <a href="https://www.linkedin.com/in/mahendar-guduru-061168143/"><img src={require('../../Assets/icons/linkedin.jpg')} alt="linkedin"/></a>
                    <a><img src={require('../../Assets/icons/twitter.jpg')} alt="twitter"/></a>
                </div>
                </div>
                
            </Card>
        </div>
    )
}

export default Layout;