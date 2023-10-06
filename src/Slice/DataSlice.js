import { createSlice } from "@reduxjs/toolkit";

const DataSlice=createSlice({
    name:'data',
    initialState:{
        sourceData: JSON.parse(localStorage.getItem('bookmarks')) || []
    },
    reducers:{
        setSource:(state,action)=>{
            state.sourceData.push({
                image:action.payload.image,
                name:action.payload.name,
                desc:action.payload.desc,
                link:action.payload.link
            });
        },
        deleteSource:(state,action)=>{

        }
    }
})
export default DataSlice.reducer;
export const {setSource,deleteSource}=DataSlice.actions; 