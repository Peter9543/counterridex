import { configureStore } from "@reduxjs/toolkit";
import counterslice from './counterslice'

const Counterstore=configureStore({
    reducer:{
        counterReducer:counterslice

    }
})
 export default Counterstore