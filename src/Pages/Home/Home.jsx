import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShoesCard from '../../Components/ShoesCard/ShoesCard';
import { getProductApi, getProducts } from '../../Redux/reducers/productReducer';

const Home = () => {
  const { arrProduct } = useSelector(state => state.productReducer);
  const carouselProducts = arrProduct.slice(10, 13);
  const dispatch = useDispatch(); 

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
      <div id="carouselExampleIndicators" className="carousel carousel-fade">
        <div className="carousel-indicators">
          <button className="btnDot active" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} aria-current="true" aria-label="Slide 1" />
          <button className="btnDot" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button className="btnDot" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          {carouselProducts.map((item, index) => {
            return <div className={`carousel-item ${index === 0 ? ' active' : ''} row`} key={index}>
              <div className='row home__carousel'>
                <div className='col-7 home__left'>
                  <img src={item.image} alt='...' style={{ objectFit: 'cover' }} />
                </div>
                <div className='col-5 home__right'>
                  <div className='right__content'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button className='home__btnBuy'>Buy now</button>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>

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