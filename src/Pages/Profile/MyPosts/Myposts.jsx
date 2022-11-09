// import React from 'react';
import styles from './Myposts.module.css';
// import  './Header.module.css';

const Myposts = (props) => {
  return (
  
    <div className={styles.posts}>
        <img src="https://w7.pngwing.com/pngs/40/906/png-transparent-batman-batgirl-joker-logo-superhero-batman-comics-heroes-superhero.png" alt="" width={100}/>
          <div>post 1</div>
          <span>{props.name}</span>-
          <span>like</span>
          <textarea name="" id="" cols="5" rows="2"></textarea>
         
        </div>

      
  
  );
};

export default Myposts;


