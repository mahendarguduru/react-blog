import React from 'react'
import './style.css';
import Card from '../../components/UI/card';

const AboutUs=(props)=> {
    return (
        <div className="aboutUs" >
            <Card style={{width:"35%",borderRadius:'5px'}}>
            <section >
                <div className="photo" >
                    <img style={{borderRadius:'5px'}} src={require('../../blogPostImages/mahendar.JPG')} alt=""/>
                </div>
            </section>
            </Card>
            <Card style={{borderRadius:'5px'}} >
            <section className="discription">
                <p>Hello my name is Mahendar, I am a Senior year Engineering Student Specialized in INFORMATION TECHNOLOGY from Kakatiya University. I am working as an Intern at Finacle Soft Inc as a Java Developer.</p>
            </section>
            </Card>
            
        </div>

    )
}

export default AboutUs;
