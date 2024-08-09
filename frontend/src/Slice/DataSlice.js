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
      state.sourceData.push(action.payload);
      state.totalBookmarks = state.sourceData.length;
    },
    deleteSource: (state, action) => {
      const indexToDelete = state.sourceData.findIndex(
        (bookmark) => bookmark.name === action.payload.name
      );

      if (indexToDelete !== -1) {
        state.sourceData.splice(indexToDelete, 1);
        state.totalBookmarks = state.sourceData.length;
      }
    },
  },
});

export default DataSlice.reducer;
export const { setSource, deleteSource } = DataSlice.actions;
