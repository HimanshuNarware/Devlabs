import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    sourceData: JSON.parse(localStorage.getItem("bookmarks")) || [],
    totalBookmarks: JSON.parse(localStorage.getItem("bookmarks"))?.length || 0,
  },
  reducers: {
    setSource: (state, action) => {
      state.sourceData.push({
        image: action.payload.image,
        name: action.payload.name,
        desc: action.payload.desc,
        link: action.payload.link,
      });
      state.totalBookmarks += 1;
    },
    deleteSource: (state, action) => {
      const indexToDelete = state.sourceData.findIndex(
        (bookmark) => bookmark.name === action.payload.name
      );

      if (indexToDelete !== -1) {
        state.sourceData.splice(indexToDelete, 1);
        state.totalBookmarks -= 1;
      }
    },
  },
});

export default DataSlice.reducer;
export const { setSource, deleteSource } = DataSlice.actions;