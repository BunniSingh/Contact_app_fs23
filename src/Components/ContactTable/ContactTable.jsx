import React from 'react'
import styles from './ContactTable.module.css'

import ContactCard from '../ContactCard/ContactCard';
import { useSelector } from 'react-redux';

const ContactTable = () => {
    const contactList = useSelector(state => state.contact.contactList);
    const searchQuery = useSelector(state => state.contact.searchContactQuery)
    const filterContact = (contact) => {
        return contact.name.toLowerCase().includes(searchQuery.toLowerCase()) || contact.surname.toLowerCase().includes(searchQuery.toLowerCase()) || contact.mobile.includes(searchQuery)
    }

    const showContactList = searchQuery ? contactList.filter(filterContact) : contactList;

    return (
        <div className={styles['table-container']}>
            <table className={styles['table']}>
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showContactList
                            .map(contact => <ContactCard key={contact.id} {...contact} />)
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ContactTable