// import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import dialogs from '../../Data/dialogs.json';
import messages from '../../Data/messages.json';



const Dialogs = props => {

// let dialogs = [
//   {id:1, name: 'Vova'},
//   {id:2, name: 'Anya'},
//   {id:3, name: 'Serg'},
//   {id:4, name: 'Bob'},
//   {id:5, name: 'Tom'},
// ];

// let messages = [
//   {id:1, messages: 'Hi!'},
//   {id:2, messages: 'How a your?'},
//   {id:3, messages: 'Yo'},
//   {id:4, messages: 'Yo'},
//   {id:5, messages: 'Yo'},
// ];

let dialogsElements = dialogs.map(d=>
<DialogItem name={d.name} id={d.id} />)

let messagesElements = messages.map(m =>
  <Message message={m.messages} id={m.id} /> )


  return (
    <div className={styles.dialogs}>
      {/* <h2>Dialogs</h2> */}
      <div className={styles.dialogsItems}>
        <div>
          {dialogsElements}
          

         
        </div>
      </div>
      <div className={styles.dialogsItems}>
        {messagesElements}
       
      </div>
    </div>
  );
};

export default Dialogs;
