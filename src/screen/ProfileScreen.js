import React from 'react'

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
            <div className=" pb-3">
                    <p className="text-lg text-primary-500 font-semibold px-4 py-4 ">Segments</p>
                
                <div className="flex justify-between px-4  ">
                    <p className="text-lg">BSE, BCD, MF, BFO, CDS, NSE, NFO</p>
                    {/* <p className="text-base font-semibold">13245</p> */}
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
