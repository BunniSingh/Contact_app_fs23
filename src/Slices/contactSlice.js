import { createSlice } from "@reduxjs/toolkit";


const initState = {
    contactList: [
        
    ],
    editContactId: '',
    searchContactQuery: ''
}
const contactSlice = createSlice({
    name: 'CONTACT',
    initialState : initState,
    reducers: {
        addContact : (state, action) => {
            state.contactList.push(action.payload)
        },
        editContact (state, action) {
            const index = state.contactList.findIndex(contact => contact.id === action.payload.id);
            state.contactList.splice(index, 1, action.payload);
        },
        deleteContact(state, action) {
            const index = state.contactList.findIndex(contact => contact.id === action.payload);
            state.contactList.splice(index, 1);
        },
        markContactAsFavourite(state, action) {
            state.contactList.forEach(contact => {
                if(contact.id === action.payload){
                    contact.isFav = true;
                }
            });

        },
        markContactAsUnFavourite(state, action) {
            state.contactList.forEach(contact => {
                if(contact.id === action.payload){
                    contact.isFav = false;
                }
            });

            
        },
        addEditContactId(state, action) {
            state.editContactId = action.payload;
        },
        setSearchContactQuery(state, action) {
            state.searchContactQuery = action.payload;
        }
    }
});

export const {addContact, editContact, deleteContact, markContactAsFavourite,markContactAsUnFavourite, addEditContactId, setSearchContactQuery} = contactSlice.actions;
export default contactSlice.reducer;