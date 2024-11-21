import React, { useState } from 'react'
import logo from '../assets/logo.webp'
import bird from '../assets/bird.webp'
import { useDispatch } from 'react-redux'
import { adminLogin } from '../redux/Thunk/adminLogin'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [data, setData] = useState({telegram_id:"",password:""})
    const handleChange = (e)=>{
        const {name, value} = e.target
        setData({...data, [name]:value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await dispatch(adminLogin(data)).unwrap(); 
            console.log("Login successful:", result);
            navigate("/dashboard"); 
        } catch (error) {
            console.error("Login failed:", error); // Handle error
        }
    };


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
                        onSubmit={handleSubmit}
                    >
                        <h1 className="text-nextusGray text-5xl">Please login to continue</h1>
                        <p className='text-white text-md py-6'>Logging in helps to ensure your learning progress stays safe and sound.</p>

                        {/* Username Input */}
                        <div className="mb-4">
                            <input
                                type="text"
                                name="telegram_id"
                                id="username"
                                className="bg-transparent border-nextusGray border border-[rgba(255,255,255,0.20)] px-4 py-2 text-nextusGray rounded-lg w-3/4"
                                placeholder='Telegram Id'
                                onChange={(e)=>handleChange(e)}
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
                                onChange={(e)=>handleChange(e)}
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