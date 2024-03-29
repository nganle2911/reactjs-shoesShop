// rxslice 
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { ACCESS_TOKEN, USER_LOGIN, getStore, getStoreJson, http, saveStore, saveStoreJson } from '../../util/config';
import { history } from '../../index.js';

const initialState = {
    // userLogin: null // not login yet 
    // userLogin: localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : null,
    userLogin: getStoreJson(USER_LOGIN),
    userProfile: null
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginAction: (state, action) => {
        state.userLogin = action.payload; 
    },
    getProfileAction: (state, action) => {
        state.userProfile = action.payload; 
    }
  }
});

export const { loginAction, getProfileAction } = userReducer.actions

export default userReducer.reducer

// async action
// userLogin = {email, password}
export const loginApi = (userLogin) => {
    return async dispatch => {
        /* const result = await axios({
            url: "https://shop.cyberlearn.vn/api/Users/signin",
            method: "POST",
            data: userLogin
        });  */
        const result = await http.post('/api/Users/signin', userLogin);

        console.log("obLogin: ", result.data.content);

        // Update reducer
        const action = loginAction(result.data.content);
        dispatch(action);

        // save localStorage
        saveStoreJson(USER_LOGIN, result.data.content);
        saveStore(ACCESS_TOKEN, result.data.content.accessToken);

        /* // Call api getProfileAction after login successfully 
        const actionGetProfile = getProfileAction();
        dispatch(actionGetProfile); */

        // navigate Profile Page after login
        history.push('/profile');
    }
}

export const getProfileApi = () => {
    return async dispatch => {
        /* const result = await axios({
            url: "https://shop.cyberlearn.vn/api/Users/getProfile",
            method: "POST",
            headers: {
                Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`
            }
        }); */
        const result = await http.post('/api/Users/getProfile');

        const action = getProfileAction(result.data.content);
        dispatch(action); 
    }
}