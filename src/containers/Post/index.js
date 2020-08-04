import React, { Fragment } from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';

const Post=(props)=>{
    
   
    
    return(
            <div>
                
                <div className='container'>
                     <BlogPost {...props}/>
                     <SideBar {...props}/>
                </div>
            </div>
           
           
    )
}

export default Post;



