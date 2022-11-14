import styles from './ProfileInfo.module.css';

const ProfileInfo = (props)=>{
    return(
        <div className={styles.profileInfo}>
            <div>
           
            <span>{props.name}</span>
            <div>ava + discription</div>
            </div>
        </div>
    )
}

export default  ProfileInfo;