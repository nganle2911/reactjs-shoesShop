import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { http } from '../../util/config';

const initialState = {
  arrProduct: [],
  productDetail: null
  /* productDetail: {
    "id": 1,
    "name": "Adidas Prophere",
    "alias": "adidas-prophere",
    "price": 350,
    "feature": false,
    "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    "size": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42"
    ],
    "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    "quantity": 995,
    "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    "categories": [
      {
        "id": "ADIDAS",
        "category": "ADIDAS"
      },
      {
        "id": "MEN",
        "category": "MEN"
      },
      {
        "id": "WOMEN",
        "category": "WOMEN"
      }
    ],
    "relatedProducts": [
      {
        "id": 2,
        "name": "Adidas Prophere Black White",
        "alias": "adidas-prophere-black-white",
        "feature": false,
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
      },
      {
        "id": 3,
        "name": "Adidas Prophere Customize",
        "alias": "adidas-prophere-customize",
        "feature": false,
        "price": 375,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png"
      },
      {
        "id": 5,
        "name": "Adidas Swift Run",
        "alias": "adidas-swift-run",
        "feature": false,
        "price": 550,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-swift-run.png"
      }
    ]
  } */
}

const productReducer = createSlice({
  name: 'productReducer', // Tên reducer 
  initialState, // giá trị state mặc định 
  reducers: {
    getProducts: (state, action) => {
      state.arrProduct = action.payload; 
    },
    getDetailProductAction: (state, action) => {
      state.productDetail = action.payload;
    }
  }
});

export const { getProducts, getDetailProductAction } = productReducer.actions

export default productReducer.reducer


/**
   * Redux có 2 loại action:
   *  - Action1: {type, payload}
   *  - Action2: async function (dispatch2) {xử lý => dispatch2(redux)}
*/
// * async action
export const getProductApi = async (dispatch2) => {
  /* const result = await axios({
    url: "https://shop.cyberlearn.vn/api/product",
    method: 'GET'
  }); */

  const result = await http.get('/api/product');

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

// because having param => using closure function
export const getDetailProductApi = (id) => {
  return async (dispatch) => {
    /* const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: 'GET'
    }); */ 
    const result = await http.get(`/api/Product/getbyid?id=${id}`); 

    const action = getDetailProductAction(result.data.content);
    dispatch(action);
  }
}
