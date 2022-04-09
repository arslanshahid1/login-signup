import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div>
      <div className='login'>
        {/* -------------------------- Left section -------------------------- */}

        <div className='left'>
          <div className='container'>
            <h4 className='title'>Sign In</h4>
            <p className='enter-email'>
              Enter your email and password to sign in
            </p>
            <form>
              <input type='email' placeholder='Email' />

              <input type='password' placeholder='Password' />

              <div className='toggle'>
                <label class='switch'>
                  <input type='checkbox' id='remember' />
                  <span class='slider round'></span>
                </label>
                <label className='text' for='remember'>
                  Remember Me
                </label>
              </div>

              <input type='submit' value='Sign in' className='send-btn' />
            </form>
            <p className='already'>
              Don't have an account? <span className='signin'>Sign up</span>
            </p>
          </div>
        </div>

        {/* -------------------------- Right section -------------------------- */}

        <div className='right'>
          <img src='/pattern-lines.svg' className='pattern' alt='' srcset='' />
          <div className='content'>
            <img
              src='/chat.webp'
              className='rocket'
              width='450px'
              alt=''
              srcset=''
            />
            <h4>"Attention is the new currency"</h4>
            <p>
              The more effortless the writing looks, the more effort the writer
              actually put into the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
