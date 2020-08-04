import React, { useEffect, useState } from 'react'
import './style.css';
import Card from '../UI/card';
import blogPost from '../../data/data.json';

const BlogPost=(props)=>{
    const[post,setPost]=useState({
            id:"",
            blogCategory:"",
            blogTitle :  "",
            slug: "",
            postedOn:"" ,
            author:  "",
            blogImage: "",
            blogText:""
    });
    const[postId,setPostId]=useState("");
    useEffect(()=>{
        const postId=props.match.params.postId;
        const post=blogPost.data.find(post=>post.id==postId);
        setPost(post);
        setPostId(postId);
    },[post,props.match.params.postId]);
    
    
    if(post.blogImage=="") return null;
    
    return (
        <div className="blogPostContainer">
            <Card style={{borderRadius:'5px'}}>
                <div className="blogHeader">
                    <span className="postFeatured">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postBy">Posted on {post.postedOn} by {post.author}</span>

                </div>
                <div className="postImageContainer">
                    <img src={require(`../../blogPostImages/${post.blogImage}`)} alt="post Image"/>
                    
                </div>
                <div>
                     <div className="postContent">
                     <h3 style={{marginBottom:'10px'}}>{post.blogTitle}</h3>
                         <p>{post.blogText}</p>
                     </div>
                </div>
            </Card>
            
        </div>
    
    )
}

export default BlogPost;
