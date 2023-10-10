import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileApi } from '../../Redux/reducers/userReducer';

const Profile = () => {

  const { userProfile } = useSelector(state => state.userReducer);
  const dispatch = useDispatch(); 

  useEffect(() => {
    const actionAsync = getProfileApi();
    dispatch(actionAsync);
  }, []);


  return (
    <div className='profile'>
      <h3 className='profile__title'>Profile</h3>
      <div className='container profile__info row'>
        <div className='col-4'>
          <img src={userProfile?.avatar} alt='avatar' className='profile__avatar' />
        </div>
        <div className='col-8'>
          <div className='info__right row'>
            <div className='col-6'>
              <div className='form-group'>
                <p>Email</p>
                <input type='text' value={userProfile?.email} />
              </div>
              <div className='form-group'>
                <p>Phone</p>
                <input type='text' value={userProfile?.phone} />
              </div>
            </div>
            <div className='col-6'>
              <div className='form-group'>
                <p>Name</p>
                <input type='text' value={userProfile?.name} />
              </div>
              <div className='form-group'>
                <p>Password</p>
                <input type='text' />
              </div>
              <div className='form-group'>
                <span className='genderTitle'>Gender</span>
                <input type='radio' id='male' name='gender' value={"true"} />
                <label for="male">Male</label>
                <input type='radio' id='female' name='gender' value={"false"} />
                <label for="female">Female</label>
              </div>
              <div className='profile__btnUpdate'>
                <button>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile