import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ShoesCard from '../../Components/ShoesCard/ShoesCard';
import axios from 'axios';
import { getProductApi, getProducts } from '../../Redux/reducers/productReducer';

/* const contentStyle = {
  margin: 0,
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}; */ 

const Home = () => {
  const { arrProduct } = useSelector(state => state.productReducer);
  const dispatch = useDispatch(); 

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

 /*  const getAllProductApi = async () => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/product",
      method: 'GET'
    });
    // dispatch action len reducer
    const action = {
      type: 'productReducer/getProducts',
      payload: result.data.content
    };
    // const action = getProducts(result.data.content);
    dispatch(action);
  } */

  
  // Redux Thunk 
  const getAllProductApi = async () => {
    const action = getProductApi;
    dispatch(action);
  }

  // Call API 
  useEffect(() => {
    getAllProductApi();
  }, []);

  return (
    <>
      <Carousel afterChange={onChange} effect='scrollx'>
        <div>
          <h3 className="home__carousel">
            <img src='https://picsum.photos/id/2/1000/260' alt='...' width={'100%'} style={{ objectFit: 'cover' }} />
          </h3>
        </div>
        <div>
          <h3 className="home__carousel">
            <img src='https://picsum.photos/id/2/1000/260' alt='...' width={'100%'} style={{ objectFit: 'cover' }} />
          </h3>
        </div>
        <div>
          <h3 className="home__carousel">
            <img src='https://picsum.photos/id/2/1000/260' alt='...' width={'100%'} style={{ objectFit: 'cover' }} />
          </h3>
        </div>
      </Carousel>
      <h3 className="home__title">Product Feature</h3>
      <div className="row container home__feature">
        {arrProduct.map((item, index) => {
          return <div className='col-3' key={index}>
            <ShoesCard prod={item} />
          </div>
        })}
      </div>
    </>
  );
}

export default Home