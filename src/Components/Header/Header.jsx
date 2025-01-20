import React from 'react'
import styles from './Header.module.css'
import { useDispatch } from 'react-redux'
import usrIcon from '../../assets/user-icon.webp'
import { setSearchContactQuery } from '../../Slices/contactSlice';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <img src={usrIcon} alt="user-icon" className={styles['user-icon']} />
                <span>Banti Singh</span>
            </div>
            <form>
                <input 
                    onChange={(e) => dispatch(setSearchContactQuery(e.target.value))} 
                    type="text" 
                    className={styles.search}
                    placeholder='Search...'
                />
                {/* <button className={styles['submit-btn']}>Search</button> */}
            </form>
        </div>
    )
}

export default Header