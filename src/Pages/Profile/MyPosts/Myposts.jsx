import React from 'react';
// import React, { Component } from 'react';
import styles from './Myposts.module.css';
import Post from './Post/Post';
import posts from '../../../Data/posts.json';

const Myposts = (props) => {
 
 
  let postsElements = posts.map(p=>
  <Post message={p.post} likesCount={p.likesCount}/>)

 

   let newPostElement = React.createRef();

   let addPost =()=>{


    let text = newPostElement.current.value;
    // alert(text)
    props.addPost(text);
   }
  
  return (
  
    <div className={styles.posts}>
      <h3>My posts</h3>
      
        
          <div className={styles.posts_wrapper}>
          
          {/* <span>like</span> */}
          <textarea ref={ newPostElement}  cols="20" rows="5"></textarea>
          <button onClick={addPost}>Add post</button>
          </div>
          <div>
            {postsElements}
            {/* <Post message={postData[0].post} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].post} likesCount={postData[1].likesCount}/> */}
          </div>
          
          
         
        </div>

      
  
  );
};

export default Myposts;


