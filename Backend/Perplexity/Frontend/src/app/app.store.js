import {configureStore } from "@reduxjs/toolkit"
import authReducer from "../app/features/auth/auth.slice.js"
import chatReducer from "../app/features/chat/chat.slice.js"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        chat: chatReducer
    }
})