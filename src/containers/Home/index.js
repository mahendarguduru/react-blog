import React from 'react';
import './style.css';
import Card from '../../components/UI/card';
import Sidebar from '../../components/SideBar';

const Home=props=>{
    const gallaryHeight=400;
    const gallaryStyle={
        height:gallaryHeight+'px',
        overflow:'hidden' 
    }
    const sideHeight=gallaryHeight/3;
    return(
        <div>
            <Card>
                <div className="gallaryPost" style={{gallaryStyle}} >
                   <section style={{width:'70%'}}>
                       <div className="mostPopular">
                           <img src={require('../../blogPostImages/memories-from.jpg')}alt=""/>
                       </div>
                   </section>
                   <section className="sideWrapper" style={{width:'30%'}}>
                       <div className="lessPopular" style={{height:`${sideHeight}px`}}>
                       <img src={require('../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')}alt=""/>
                       </div>
                       <div className="lessPopular" style={{height:`${sideHeight}px`}}>
                       <img src={require('../../blogPostImages/cestovat-chladny-dno-jednoduchost-2868847.jpg')}alt=""/>
                       </div>
                       <div className="lessPopular" style={{height:`${sideHeight}px`}}>
                       <img src={require('../../blogPostImages/fitness-blog-post.jpg')}alt=""/>
                       </div>
                   </section>
                </div>
            </Card>
            
            <section className="homeContainer">
            <div style={{width:'70%'}}>
            <Card style={{marginBottom:'10px',borderRadius:'5px'}}>
                <div className="postImageWrapper">
                    <img src={require('../../blogPostImages/fitness-blog-post.jpg')}/>
                </div>
                <div className="postHeader" style={{textAlign:'center'}}>
                    <span style={{fontSize:'20px', color:'#6c6c6c'}}>Featured</span>
                    <h4>Fitness Mantra To Live Fit Life</h4>
                    <span style={{fontStyle:'italic'}}>Posted on July 21, 2016 by Faiz Khan</span>
                    <p style={{color:'#6c6c6c'}}>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the...</p>
                    <button>Read More</button>
                </div>
            </Card>
            <Card  style={{marginBottom:'10px',borderRadius:'5px',marginBottom:'10px'}}>
                <div className="postImageWrapper">
                    <img src={require('../../blogPostImages/beautiful-&-simple.jpg')}/>
                </div>
                <div className="postHeader" style={{textAlign:'center'}}>
                    <span style={{fontSize:'20px', color:'#6c6c6c'}}>Simple</span>
                    <h4>Beautiful & Special Moment</h4>
                    <span style={{fontStyle:'italic'}}>Posted on May 3rd, 2016 by Rizwan Khan</span>
                    <p style={{color:'#6c6c6c'}}>Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at. Two indeed suffer saw beyond far former mrs remain. Occasional continuing possession...</p>
                    <button>Read More</button>
                </div>
            </Card> 
            </div>
            <Sidebar/>
            </section>
            

        </div>
    )
}

export default Home;