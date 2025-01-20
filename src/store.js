import {configureStore} from '@reduxjs/toolkit'

import contactReducer from './Slices/contactSlice'

const store =  configureStore({
    reducer: {
        contact: contactReducer
    }
})

export default store;