import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";


const PortfolioScreen = () => {
    return (
        <div className="pb-24">
             {/* main cover */}
      <div
        className="relative py-10  overflow-hidden w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url(about.jpg)" }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-green-900 opacity-50"></div>
        <main className="px-5 lg:px-8  z-10 sm:max-w-3xl sm:mx-auto">
          <div className="text-center">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <h2 className="text-3xl mt-10 capitalize tracking-tight leading-10 font-medium sm:text-3xl text-white md:text-4xl">
              Your Stock Payment and P & L details
              </h2>
            </ScrollAnimation>
          </div>
        </main>
      </div>
      {/* main cover */}

      {/* details start */}
      <div>
          <div className="bg-primary-500 flex rounded-b-3xl flex-row justify-between items-center">
            <h1 className="text-lg text-white font-semibold font-sans  capitalize px-5 py-3">Sachin Patil</h1>
            <h1 className="text-sm text-white font-normal font-sans  uppercase px-5 py-3">JKD456</h1>
          </div>
          <div className=" mt-4 items-center">
            <h1 className="text-xl text-center text-primary-500 font-semibold font-sans  uppercase px-5 py-3">stock trading details</h1>
            {/* <h1 className="text-sm text-white font-normal font-sans  uppercase px-5 py-3">JKD456</h1> */}
          </div>

          <div className="max-w-7xl px-5 md:hidden lg:hidden overflow-auto mb-6">
          <table class="mt-2 overflow-x-auto">
                <thead class=" text-white bg-primary-500">
                    <tr>
                        <th
                            class=" text-nowrap  truncate text-left py-3 px-4 uppercase font-brand tracking-wide font-light text-xs border-gray-700 border">
                        SR.no
                        </th>
                        <th
                            class=" text-nowrap  truncate text-left py-3 px-4 uppercase font-brand tracking-wide font-light text-xs border-gray-700 border">
                        Date
                        </th>
                        <th
                            class=" text-nowrap  truncate text-left py-3 px-4 uppercase font-brand tracking-wide font-light text-xs border-gray-700 border">
                        stock name
                        </th>
                        <th
                            class=" text-nowrap  truncate text-left py-3 px-4 uppercase font-brand tracking-wide font-light text-xs border-gray-700 border">
                        buy price
                        </th>
                        <th
                            class=" text-nowrap  truncate text-left py-3 px-4 uppercase font-brand tracking-wide font-light text-xs border-gray-700 border">
                        buy quatity
                        </th>
                        <th
                            class=" text-nowrap  truncate text-left py-3 px-4 uppercase font-brand tracking-wide font-light text-xs border-gray-700 border">
                        sell quatity
                        </th>
                        <th
                            class=" text-nowrap  truncate text-left py-3 px-4 uppercase font-brand tracking-wide font-light text-xs border-gray-700 border">
                        sell price
                        </th>
                        
                    </tr>
                </thead>
                <tbody class="">
                    <tr>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        1
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        19-08-2021
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        HDFC Bank
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        1125
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        150
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        21
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        1235
                        </td>
                        
                    </tr>
                    <tr>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        2
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        19-08-2021
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        HDFC Bank
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        1125
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        150
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        21
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        1235
                        </td>
                        
                    </tr>
                    <tr>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        3
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        19-08-2021
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        HDFC Bank
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        1125
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        150
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        21
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-xs font-brand tracking-wide">
                        1235
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
          <div className=" mt-4 items-center">
            <h1 className="text-xl text-center text-primary-500 font-semibold font-sans  uppercase px-5 py-3">Account status</h1>
            {/* <h1 className="text-sm text-white font-normal font-sans  uppercase px-5 py-3">JKD456</h1> */}
          </div>

          <div className="max-w-7xl px-5 md:hidden lg:hidden overflow-auto mb-6">
          <table class="mt-2 overflow-x-auto">
                <thead class=" text-white ">
                    <tr>
                        <th
                            class=" text-nowrap  truncate text-black font-semibold text-left py-3 px-4 uppercase font-brand tracking-wide  text-sm border-gray-700 border">
                        customer Payment
                        </th>
                        <th
                            class=" text-nowrap  truncate text-left py-3 px-4 uppercase font-brand tracking-wide font-semibold bg-primary-500 text-sm border-gray-700 border">
                        Net profit
                        </th>
                        <th
                            class=" text-nowrap  truncate text-left py-3 px-4 uppercase font-brand tracking-wide font-light text-sm bg-red-600 border-gray-700 border">
                        net loss
                        </th>
                        
                    </tr>
                </thead>
                <tbody class="">
                    <tr>
                        <td
                            class=" text-left py-3 font-bold  px-4 border border-gray-700 text-sm font-brand tracking-wide">
                        20,000
                        </td>
                        <td
                            class=" text-left font-bold text-primary-500 py-3 px-4 border border-gray-700 text-sm font-brand tracking-wide">
                                5624
                        </td>
                        <td
                            class=" text-left py-3 px-4 border border-gray-700 text-sm font-bold text-red-600 font-brand tracking-wide">
                                00.00
                        </td>
                        
                        
                    </tr>
                   
                </tbody>
            </table>
        </div>
      </div>
      {/* details ends */}
        </div>
    )
}

export default PortfolioScreen
