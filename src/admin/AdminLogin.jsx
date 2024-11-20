import React from 'react'
import logo from '../assets/logo.webp'
import bird from '../assets/bird.webp'

function AdminLogin() {
    return (
        <>
            <div className="bg-black md:flex md:h-screen backdrop-blur-lg py-[20px] px-[100px] items-center">
                <div className="md:w-1/2">
                    <img src={logo} alt="" />
                    <img src={bird} alt="" className='w-3/4' />
                    <p className='text-nextusGray'>© 2024 Nextus. All rights reserved. Backed by BlockOn Ventures.</p>
                </div>
                <div className="md:w-1/2">                    
                    <form
                        // onSubmit={handleSubmit}
                    >
                        <h1 className="text-nextusGray text-5xl">Please login to continue</h1>
                        <p className='text-white text-md py-6'>Logging in helps to ensure your learning progress stays safe and sound.</p>

                        {/* Username Input */}
                        <div className="mb-4">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="bg-transparent border-nextusGray border border-[rgba(255,255,255,0.20)] px-4 py-2 text-nextusGray rounded-lg w-3/4"
                                placeholder='Username'
                            />
                        </div>
                        {/* Password Input */}
                        <div className="mb-6">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="bg-transparent border-nextusGray border border-[rgba(255,255,255,0.20)] px-4 py-2 text-nextusGray rounded-lg w-3/4"
                                placeholder='Password'
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="text-brand blur-btn w-3/4"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin