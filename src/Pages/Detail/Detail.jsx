import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getDetailProductApi } from '../../Redux/reducers/productReducer';
import ShoesCard from '../../Components/ShoesCard/ShoesCard';

const Detail = () => {
  const { productDetail } = useSelector(state => state.productReducer);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const actionAsync = getDetailProductApi(params.id);
    dispatch(actionAsync);
  }, [params.id]);

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-4'>
          <img src={productDetail.image} alt='...' width={"100%"} />
        </div>
        <div className='col-8'>
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
        </div>
      </div>
      <div className='mt-2'>
        <h3>Related Products</h3>
        <div className='row'>
          {productDetail.relatedProducts?.map((item, index) => {
            return <div className='col-4' key={index}>
              <ShoesCard prod={item} />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Detail