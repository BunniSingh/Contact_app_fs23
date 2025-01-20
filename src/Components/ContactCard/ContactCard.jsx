import React from 'react'
import usrIcon from '../../assets/user-icon.webp'
import styles from './ContactCard.module.css'

import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdDelete,MdOutlineEdit } from "react-icons/md";

import { useDispatch } from 'react-redux';
import { addEditContactId, deleteContact, markContactAsFavourite, markContactAsUnFavourite } from '../../Slices/contactSlice';
import { useState } from 'react';
const ContactCard = ({name, surname, mobile, id}) => {

    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();
    const onEditClick = () => {
        dispatch(addEditContactId(id))
    }
    const onDeleteClick = () => {
        dispatch(deleteContact(id))
    }

    const onFavClick = () => {
        setIsFav(true);
        dispatch(markContactAsFavourite(id));
        // console.log('onFavClick',!isFav)
    }
    
    const onUnFavClick = () => {
        setIsFav(false);
        dispatch(markContactAsUnFavourite(id));
        // console.log('onUnFavClick',!isFav)
    }
    

    return (
        <tr>
            <td>
                <img src={usrIcon} alt="user-icon" className={styles['user-icon']} />
            </td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{mobile}</td>
            <td className={styles.btn}>
                <MdOutlineEdit  
                    onClick={onEditClick}
                    className= {styles.icons}
                />
                <MdDelete 
                    onClick={onDeleteClick}
                    className= {styles.icons}
                />
                {
                    isFav ? <FaHeart className= {styles.icons} onClick={onUnFavClick}/> : <FaRegHeart className= {styles.icons} onClick={onFavClick}/>
                }
            </td>
        </tr>
    )
}

export default ContactCard