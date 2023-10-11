import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: 'data',
  initialState: {
    sourceData: JSON.parse(localStorage.getItem('bookmarks')) || []
  },
  reducers: {
    setSource: (state, action) => {
      state.sourceData.push({
        image: action.payload.image,
        name: action.payload.name,
        desc: action.payload.desc,
        link: action.payload.link
      });
    },
    deleteSource: (state, action) => {
      // Find the index of the bookmark to delete by matching the name
      const indexToDelete = state.sourceData.findIndex(bookmark => bookmark.name === action.payload.name);

      if (indexToDelete !== -1) {
        // Remove the bookmark from the array by index
        state.sourceData.splice(indexToDelete, 1);
      }
    }
  }
});

export default DataSlice.reducer;
export const { setSource, deleteSource } = DataSlice.actions;
