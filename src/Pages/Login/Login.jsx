import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { loginApi } from '../../Redux/reducers/userReducer'
import { useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Email cannot be blank!').email('Email is invalid'),
      password: yup.string().required('Password cannot be blank!')
    }),
    onSubmit: (values) => {
      // console.log(values);
      const actionAsync = loginApi(values); 
      dispatch(actionAsync);
    }
  })

  return (
    <form className='container login' onSubmit={form.handleSubmit}>
      <h1 className='login__title'>Login</h1>
      <div className='login__group'>
        <div className='form-group'>
          <input className='form-control' name='email' placeholder='Email or Username' onChange={form.handleChange} onBlur={form.handleBlur} />
          {form.errors.email && <p className='text-danger'>{form.errors.email}</p>}
        </div>
        <div className='form-group mt-3'>
          <input className='form-control' name='password' placeholder='Password' onChange={form.handleChange} onBlur={form.handleBlur} />
          {form.errors.password && <p className='text-danger'>{form.errors.password}</p>}
        </div>
        <div className='form-group'>
          <button className='btn login__btn mt-3' type='submit'>Login</button>
        </div>
        <div className='form-group mt-3'>
          <a>Forgot account ?</a>
          <a>Register now ?</a>
        </div>
      </div>

      <div className='login__other mt-4'>
        <div className='form-group'>
          <button className='btn other__btn mt-3'>
            <i class="fab fa-facebook"></i>
            <p>Sign in with Facebook</p>
          </button>
        </div>
        <div className='form-group'>
          <button className='btn other__btn mt-2'>
            <i class="fab fa-google"></i>
            <p>Sign in with Google</p>
          </button>
        </div>
        <div className='form-group'>
          <button className='btn other__btn mt-2'>
            <i class="fab fa-apple"></i>
            <p>Sign in with Apple</p>
          </button>
        </div>
      </div>
    </form>

  )
}

export default Login