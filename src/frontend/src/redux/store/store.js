import { configureStore } from "@reduxjs/toolkit";
import CreateContentSlice from "../slice/contentSlice";
import UpdateContentSlice from "../slice/editContentSlice";
import DeleteContentSlice from "../slice/deleteContentSlice";
import MyContentSlice from "../slice/myContentSlice";
import OneContentSlice from "../slice/getOneContentSlice";
import MyContentStatsSlice from "../slice/MyContentStatSlice"


const store = configureStore({
    reducer: {
        createContent:CreateContentSlice,
        updateContent: UpdateContentSlice,
        deleteContent: DeleteContentSlice,
        mycontent: MyContentSlice,
        OneContent: OneContentSlice,
        myContentStats: MyContentStatsSlice
    }
});

export default store;