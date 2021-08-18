import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <div className="px-3 flex flex-row justify-between py-2 shadow">
                <div>
                    <Link to="/">
                    <img src="logo.png" className="h-12" alt=""/>
                    </Link>
                </div>
                <span className="flex relative ">
                    <Link
                        href="/contact"
                        class="flex items-center  justify-center w-32 h-12  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-400 hover:bg-primary-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >

                        Live Market
                        <span className="animate-ping absolute right-3 text-center top-3 inline-flex h-3 w-3 rounded-full bg-red-600 opacity-100"></span>
                        <span className=" inline-flex rounded-full  text-center mb-4 ml-2 h-3 w-3 bg-red-700"></span>
                      </Link>
                        </span>

            </div>
        </div>
    )
}

export default Header
