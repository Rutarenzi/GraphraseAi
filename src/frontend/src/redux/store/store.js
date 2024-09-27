import { configureStore } from "@reduxjs/toolkit";
import CreateContentSlice from "../slice/contentSlice";
import UpdateContentSlice from "../slice/editContentSlice";
import DeleteContentSlice from "../slice/deleteContentSlice";
import MyContentSlice from "../slice/myContentSlice";
import OneContentSlice from "../slice/getOneContentSlice";


const store = configureStore({
    reducer: {
        createContent:CreateContentSlice,
        updateContent: UpdateContentSlice,
        deleteContent: DeleteContentSlice,
        mycontent: MyContentSlice,
        OneContent: OneContentSlice,
    }
});

export default store;