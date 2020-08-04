import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/card';
import blogPost from '../../data/data.json';
import { NavLink } from 'react-router-dom';

const SideBar=(props)=>{
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
       
        const posts=blogPost.data;
        setPosts(posts);
    },[posts]);

    return (
       <div className="sideBarContainer">
           <Card style={{borderRadius:'5px', marginBottom:'20px'}}>
               <div className="sideBarHeader">
                  <span>about us</span>
               </div>
               <div className="profileImageContainer">
                   <img src={require('../../blogPostImages/mahendar.JPG')} alt="mahendar"/>
               </div>
               <div>
                   <p className="postBio">Hello my name is Mahendar, I am a Senior year Engineering Student Specialized in INFORMATION TECHNOLOGY from Kakatiya University. I am working as an Intern at Finacle Soft Inc as a Java Developer.</p>
               </div>
           </Card>
           <Card style={{borderRadius:'5px', marginBottom:'20px'}}>
               <div className="sideBarHeader">
                  <span>social media</span>
                  <div className="socialMedia" >
                    <a href="https://www.facebook.com/mahendar.guduru/"><img src={require('../../Assets/icons/fb.jpg')} alt="fb"/></a>
                    <a href="https://www.instagram.com/mahendar_guduru/"><img src={require('../../Assets/icons/insta.jpg')} alt="insta"/></a>
                    <a href="https://www.linkedin.com/in/mahendar-guduru-061168143/"><img src={require('../../Assets/icons/linkedin.jpg')} alt="linkedin"/></a>
                    <a><img src={require('../../Assets/icons/twitter.jpg')} alt="twitter"/></a>
                </div>
               </div>
           </Card>
           <Card style={{borderRadius:'5px', marginBottom:'20px'}}>
               <div className="sideBarHeader">
                  <span>Recent Posts</span>
               </div>
               <div className="recentPosts" style={{marginLeft:'10px'}}>
                   {
                       posts.map(post=>{
                           return(
                               <NavLink key={post.id} to={`/post/${post.id}`}>
                                   <div className="recentPost">
                                   <h2>{post.blogTitle}</h2>
                                   <span style={{fontStyle:'italic'}}>{post.postedOn}</span>
                                   </div>
                               </NavLink>
                            
                           );
                       })
                   }
               
               
               </div>
           </Card>
       </div>
    )
}

export default SideBar;
