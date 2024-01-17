import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () =>  {
        setIsSignInForm(!isSignInForm)
    }


    return (
        <div >
            <Header/>
            <div className='absolute' >
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
                alt="logo" />
            </div>
            <form className='relative p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className="font-bold text-xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

                {!isSignInForm && (<input type="text" placeholder='Full Name' className="p-4 my-2 w-full bg-gray-800"/>)}
                <input type="text" placeholder='Email Address' className="p-4 my-2 w-full bg-gray-800"/>              
                <input type="password" placeholder='Password' className="p-4 my-2 w-full bg-gray-800"/>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? 'New To Netflix ? Sign Up Now' : 'Already registered! Sign In now'}</p>
            </form> 
        </div>
    )
}

export default Login