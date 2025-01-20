import { useRef } from 'react';
import styles from './Sidebar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, addEditContactId, editContact } from '../../Slices/contactSlice';

import { FaRegHeart } from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";

import pngImg from '../../assets/contact.png'

import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const Sidebar = () => {
    
    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const mobileRef = useRef(null);

    const contactList = useSelector(state => state.contact.contactList);
    const editId = useSelector(state => state.contact.editContactId);
    const totalFavContact = useSelector(state => 
        state.contact.contactList.reduce((acc, ele) => {
          if (ele.isFav) {
            return acc + 1;
          }
          return acc;
        }, 0)
    );
      
    const dispatch = useDispatch();

    useEffect(()=>{
        if(editId){
            let {name, surname, mobile} = contactList.find(contact => contact.id === editId);
            nameRef.current.value = name;
            surnameRef.current.value = surname;
            mobileRef.current.value = mobile;
            nameRef.current.focus();
        }
    },[editId])
    
    const onSubmitFn = (e) =>{
        e.preventDefault();
        let name = nameRef.current.value.trim();
        let surname = surnameRef.current.value.trim();
        let mobile = mobileRef.current.value.trim();

        if(!name){
            alert('Name must be required!!');
            nameRef.current.focus();
            return;
        }
        if(!surname){
            alert('Surname must be required!!');
            surnameRef.current.focus();
            return;
        }
        if(!mobile){
            alert('Mobile Number are required!!');
            mobileRef.current.focus();
            return;
        }

        if(mobile.length != 10){
            alert('Please Enter valid Mobile Number!');
            mobileRef.current.focus();
            return;
        }
        
        const contactDetails = {
            name,
            surname,
            mobile,
            id: editId ? editId : uuidv4(),
            isFav: false
        }
        if(editId){
            dispatch(editContact(contactDetails));
            dispatch(addEditContactId(""));
        }else{
            dispatch(addContact(contactDetails));
        }
        nameRef.current.value = '';
        surnameRef.current.value = '';
        mobileRef.current.value = '';
    }

  return (
    <aside className={styles.container}>
        <div className={styles['all-contact']}>
            <FaRegHeart className={styles.icon}/>
            <div>
                <h3>All Contact</h3>
                <span>{contactList.length} Contact</span>
            </div>
        </div>

        <div className={styles['fav-contact']}>
            <RiContactsBookFill className={styles.icon}/>
            <div>
                <h3>Favourites</h3>
                <span>{totalFavContact} Contacts</span>
            </div>
        </div>

        <img src={pngImg} alt="png-img" className={styles.pngImg}/>

        <form onSubmit={onSubmitFn} className={styles.form}>
            <div>
                <input ref={nameRef} type="text" className={styles.name}  placeholder='Name..'/>
                <input ref={surnameRef} type="text" className={styles.surname}  placeholder='Surname..'/>
            </div>
            <div>
            <input ref={mobileRef} type="number" className={styles.mobileNo}  placeholder='Mobile no..'/>
            </div>
            <button type='submit' className={styles['submit-btn']}>{editId ? 'Edit' : 'Add'}</button>
        </form>
    </aside>
  )
}

export default Sidebar