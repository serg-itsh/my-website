import styles from './Post.module.css';

const Post = props => {



  return (
    <div className={styles.post}>
         <img src="https://cdnb.artstation.com/p/assets/images/images/024/799/689/large/-cat.jpg?1583578462" alt="" width={50}/>
      <div>{props.message}</div>
      <div>{props.likesCount}</div>
    </div>
  );
};

export default Post;
