import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ContactTable from '../../Components/ContactTable/ContactTable'
import styles from './Layout.module.css'
const Layout = () => {
  return (
    <div className={styles['main-container']}>
        <Header/>
        <section className={styles.container}>
            <Sidebar/>
            <ContactTable/>
        </section>
    </div>
  )
}

export default Layout