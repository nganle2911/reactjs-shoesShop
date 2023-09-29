import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    arrProduct: [
        {id: 1, name: 'product 1', image: 'https://i.pravatar.cc?u=1', price: 1000},
        {id: 2, name: 'product 2', image: 'https://i.pravatar.cc?u=7', price: 1500},
        {id: 3, name: 'product 3', image: 'https://i.pravatar.cc?u=20', price: 2000},
    ]
}

const productReducer = createSlice({
  name: 'productReducer', // Tên reducer 
  initialState, // giá trị state mặc định 
  reducers: {
    getProducts: (state, action) => {
      state.arrProduct = action.payload; 
    }
  }
});

export const { getProducts } = productReducer.actions

export default productReducer.reducer


/**
   * Redux có 2 loại action:
   *  - Action1: {type, payload}
   *  - Action2: async function (dispatch2) {xử lý => dispatch2(redux)}
*/
// * async action
export const getProductApi = async (dispatch2) => {
  const result = await axios({
    url: "https://shop.cyberlearn.vn/api/product",
    method: 'GET'
  });

  // Sau khi có được dữ liệu từ api, ta tạo ra action loại 1 {type, payload đưa lên redux}
  // const action2 = {
  //   type: 'productReducer/getProducts',
  //   payload: result.data.content
  // };
  const action2 = getProducts(result.data.content);
  dispatch2(action2);
}

// closure function 
/* export const getProductApi = () => {

  return async (dispatch2) => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/product",
      method: 'GET'
    });

    // Sau khi có được dữ liệu từ api, ta tạo ra action loại 1 {type, payload đưa lên redux}
    const action2 = {
      type: 'productReducer/getProducts',
      payload: result.data.content
    };
    dispatch2(action2);
  }
  
} */
