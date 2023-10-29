import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm); 
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
      </div>
      <form className='w-4/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800 rounded-lg' />}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800 rounded-lg' />
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800 rounded-lg' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'> 
        {isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered ? Sign In Now"} </p>
      </form>
    </div>
  )
}

export default Login
