import React from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    return (
        <div>
        <div>
            {/* <!-- component --> */}

  <div className="min-h-screen sm:flex sm:flex-row  mx-0 justify-center">
      <div className="flex-col flex  self-center pt-10 sm:max-w-5xl xl:max-w-2xl  z-10">
       <img  src="loginpng.jpg"/>
      </div>
      <div className="flex justify-center self-center  z-10">
        <div className="p-7 bg-white mx-auto shadow-lg rounded-2xl w-100 ">
        <img src="logo.png" className="w-auto mx-auto h-10"/>
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-center text-gray-800">Sign In </h3>
              {/* <p className="text-gray-500">Please sign in to your account.</p> */}
            </div>
            <div className="space-y-5">
                        <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-700 tracking-wide">UserID</label>
              <input className=" w-full text-base px-4 py-2 border  border-primary-500 rounded-lg focus:outline-none focus:border-primary-800" type="" placeholder=" e.g. ED456S" />
              </div>
                          <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input className="w-full content-center text-base px-4 py-2 border  border-primary-500 rounded-lg focus:outline-none focus:border-primary-800" type="" placeholder="*********" />
            </div>
              <div className="flex items-center justify-between">
              
              <div className="text-sm">
                <a href="#" className="text-green-500 hover:text-green-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              
              <Link to="/portfolio">
              <button type="submit" className="w-full flex justify-center bg-primary-500  hover:bg-primary-600 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                Sign in
              </button>
              </Link>
            </div>
            </div>
            
        </div>
      </div>
  </div>
</div>
        </div>
    )
}

export default LoginScreen
