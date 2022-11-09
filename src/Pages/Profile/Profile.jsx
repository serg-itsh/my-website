import styles from './Profile.module.css';
// import './Profile.css';
import Myposts from './MyPosts/Myposts';

const Profile = (props) => {
  return (
    <div className={styles.content}>
           <div >
        <h1>
          <img
            src="https://image.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg"
            alt=""
          />
          Main contant
        </h1>
        <div>ava + discription</div>
        <div>My post</div>
        <div>New post</div>

        <Myposts name="Serg"/>
        <Myposts/>
     
      </div>
    </div>
  );
};

export default Profile;
