import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = { isOpen: false };

const editorModalSlice = createSlice({
    name: "editor-modal", // reateSlice()를 통해 slice를 생성 시 내부적으로 중복을 피하기 위해 사용되는 고유한 값
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.isOpen = action.payload
        },
    },
});

export default editorModalSlice;
export const { setModal } = editorModalSlice.actions;