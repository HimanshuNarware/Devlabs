import { configureStore } from "@reduxjs/toolkit";
import SourceReducer from '../Slice/DataSlice'

export default configureStore({
    reducer:{
        SourceReducer
    }
})