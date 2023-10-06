// rxslice 
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { ACCESS_TOKEN, USER_LOGIN, getStoreJson, saveStore, saveStoreJson } from '../../util/config';

const initialState = {
    // userLogin: null // not login yet 
    // userLogin: localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : null,
    userLogin: getStoreJson(USER_LOGIN)
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginAction: (state, action) => {
        state.userLogin = action.payload; 
    }
  }
});

export const { loginAction } = userReducer.actions

export default userReducer.reducer

// async action
// userLogin = {email, password}
export const loginApi = (userLogin) => {
    return async dispatch => {
        const result = await axios({
            url: "https://shop.cyberlearn.vn/api/Users/signin",
            method: "POST",
            data: userLogin
        }); 

        console.log("obLogin: ", result.data.content);

        // Update reducer
        const action = loginAction(result.data.content);
        dispatch(action);

        // save localStorage
        saveStoreJson(USER_LOGIN, result.data.content);

        saveStore(ACCESS_TOKEN, result.data.content.accessToken)
    }
}