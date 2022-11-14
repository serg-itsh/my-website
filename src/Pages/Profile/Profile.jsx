import styles from './Profile.module.css';
// import './Profile.css';
import Myposts from './MyPosts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
  return (
    <div className={styles.content}>
      <div>
      <img
        src="https://image.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg"
        alt="avatar"
      />
      </div>
      
      
      <ProfileInfo name="Serg"/>
      <Myposts  posts={props.state.posts} addPost={props.addPost}/>
      {/* <Myposts/> */}
    </div>
  );
};

export default Profile;
