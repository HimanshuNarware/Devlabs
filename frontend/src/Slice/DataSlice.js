import { createSlice } from "@reduxjs/toolkit";

// Helper function to get initial bookmarks from local storage
const getInitialBookmarks = () => JSON.parse(localStorage.getItem('bookmarks')) || [];

const DataSlice = createSlice({
  name: 'data',
  initialState: {
    sourceData: getInitialBookmarks(),
    totalBookmarks: getInitialBookmarks().length,
  },
  reducers: {
    setSource: (state, action) => {
      state.sourceData.push({
        image: action.payload.image,
        name: action.payload.name,
        desc: action.payload.desc,
        link: action.payload.link,
      });
      state.totalBookmarks = state.sourceData.length;
      localStorage.setItem('bookmarks', JSON.stringify(state.sourceData));
    },
    deleteSource: (state, action) => {
      // Find the index of the bookmark to delete by matching the name
      const indexToDelete = state.sourceData.findIndex(
        (bookmark) => bookmark.name === action.payload.name
      );

      if (indexToDelete !== -1) {
        // Remove the bookmark from the array by index
        state.sourceData.splice(indexToDelete, 1);
        state.totalBookmarks = state.sourceData.length;
        localStorage.setItem('bookmarks', JSON.stringify(state.sourceData));
      }
    },
  },
});

export default DataSlice.reducer;
export const { setSource, deleteSource } = DataSlice.actions;
