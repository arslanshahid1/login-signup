import React from 'react';
import './Signup.scss';

function Signup() {
  return (
    <div className='signup'>
      {/* -------------------------- Left section -------------------------- */}
      <div className='left'>
        <div className='container'>
          <h4 className='title'>Sign Up</h4>
          <p className='enter-email'>
            Enter your email and password to register
          </p>
          <form>
            <label for='fname' className='label'>
              Name
            </label>
            <input type='text' placeholder='Name' />
            <label for='lname' className='label'>
              Email
            </label>
            <input type='email' placeholder='Email' />
            <label for='lname' className='label'>
              Password
            </label>
            <input type='text' placeholder='Password' />
            <label for='agree' className='agree'>
              <input type='checkbox' id='agree' />
              <span class='checkmark'></span>I agree the
              <strong> Terms and Conditions</strong>
            </label>
            <input type='submit' value='Signup' className='send-btn' />
          </form>
          <p className='already'>
            Already have an account? <span className='signin'>Sign in</span>
          </p>
        </div>
      </div>

      {/* -------------------------- Right section -------------------------- */}
      <div className='right'>
        <img src='/pattern-lines.svg' className='pattern' alt='' srcset='' />
        <div className='content'>
          <img
            src='/rocket-white.webp'
            className='rocket'
            width='450px'
            alt=''
            srcset=''
          />
          <h4>Your journey starts here</h4>
          <p>
            Just as it takes a company to sustain a product, it takes a
            community to sustain a protocol.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
