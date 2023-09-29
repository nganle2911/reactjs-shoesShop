import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import Detail from './Pages/Detail/Detail';
import Carts from './Pages/Carts/Carts';
import Search from './Pages/Search/Search';
import { Provider } from 'react-redux';
import { store } from './Redux/configStore';

// Main CSS
import "./assets/sass/main.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route index element={<Home />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='detail'>
              <Route path=':id' element={<Detail />}></Route>
            </Route>
            <Route path='carts' element={<Carts />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='*' element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);