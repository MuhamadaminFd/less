import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import usersReducer from "./slice/usersSlice";



const rootReducer = {
    counter: counterReducer,
    users: usersReducer,
}

const store = configureStore({ reducer: rootReducer });

export default store