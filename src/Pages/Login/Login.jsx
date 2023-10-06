import React from 'react'

const Login = () => {
  const form = 
  return (
    <div className='container login'>
      <h1 className='login__title'>Login</h1>
      <div className='login__group'>
        <div className='form-group'>
          <input className='form-control' name='email' placeholder='Email or Username' />
        </div>
        <div className='form-group mt-3'>
          <input className='form-control' name='password' placeholder='Password' />
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
    </div>
  )
}

export default Login