import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    channel:null,
    room:null,
    isLoggedIn: false,
};

export const stateSlice = createSlice({
    name:"state",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        setToken: (state, action) => {
            state.token = action.payload.token;
        },
        setChannel: (state, action) => {
            state.channel = action.payload.channel;
        },
        setIsLoggedIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
        setRoom: (state, action) => {
            state.room = action.payload.room;
        }
    }
});
export const {setUser, setToken, setChannel, setIsLoggedIn, setRoom}  = stateSlice.actions;
export default stateSlice.reducer;