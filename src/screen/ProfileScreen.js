import React from 'react'
import { Link } from 'react-router-dom'

const ProfileScreen = () => {
    return (
        <div className="pb-24">
            <div className="flex border-b-4 border-primary-500 shadow-md px-4  py-4 flex-row justify-between items-center">
                <div>
                    <h1 className="text-xl font-sans font-semibold">Sachin Patil</h1>
                    <h1 className="text-sm">UCLS123</h1>
                </div>
                <div>
                    <img src="Sumit_sahu.jpg" className="rounded-full w-24 h-24 object-cover" alt="" />
                </div>
            </div>
            <div className="border-b-2 border-primary-500 pb-3">
            <p className="text-lg text-primary-500 font-semibold px-4  pt-4">Personal Details</p>
                
                <div className="flex justify-between px-4  py-3">
                    <p className="text-lg">Email</p>
                    <p className="text-base font-semibold">test@test.com</p>
                </div>
                <div className="flex justify-between px-4 py-3">
                    <p className="text-lg">Phone</p>
                    <p className="text-base font-semibold">+91 12345-56789</p>
                </div>
                <div className="flex justify-between px-4 py-3">
                    <p className="text-lg">PAN</p>
                    <p className="text-base font-semibold">DCF65FCF</p>
                </div>
                <div className="flex justify-between px-4 py-3">
                    <p className="text-lg">DEMATE</p>
                    <p className="text-base font-semibold">12345678989</p>
                </div>
            </div>
            <div className="border-b-2 border-primary-500 pb-3">
                    <p className="text-lg text-primary-500 font-semibold px-4 py-4 ">Bank Accounts</p>
                
                <div className="flex justify-between px-4  ">
                    <p className="text-lg">State Bank Of India</p>
                    <p className="text-base font-semibold">13245</p>
                </div>
            </div>
            <div className="border-b-2 border-primary-500 pb-3">
                    <p className="text-lg text-primary-500 font-semibold px-4 py-4 ">Segments</p>
                
                <div className="flex justify-between px-4  ">
                    <p className="text-lg">BSE, BCD, MF, BFO, CDS, NSE, NFO</p>
                    {/* <p className="text-base font-semibold">13245</p> */}
                </div>
            </div>

            {/* withdraw and funds add buttons start */}
            <div className="grid grid-cols-2 gap-4 pt-5 px-4 pb-5">
                <div>
                    <Link
                        
                        class="flex items-center  justify-center px-2 h-10  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-500 hover:bg-primary-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >

                         Add Funds 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 ml-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        
                      </Link>
                </div>
                <div>
                    <Link
                        
                        class="flex items-center  justify-center px-2 h-10  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >

                        Withdraw 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        
                      </Link>
                </div>
            </div>
            {/* withdraw and funds add buttons ends */}
        </div>
    )
}

export default ProfileScreen
