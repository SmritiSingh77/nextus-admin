import React, { useState } from 'react';
import logo from '../assets/logo.webp';
import profile from '../assets/profile-pic.webp';
import Home from './Home';
import Tasks from './Tasks';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [showDropdown, setDropdown] = useState(false);
    const navigate = useNavigate();
    const handleDropdown = () => {
        setDropdown((showDropdown) => !showDropdown);
    }

    const [activeTab, setActiveTab] = useState('Tasks');
    const renderComponent = () => {
        switch (activeTab) {
            // case 'Home':
            //     return < Home />;
            case 'Tasks':
                return <Tasks />;
            default:
                return <Tasks />;
        }
    }

    const handleLogOut = ()=>{
        localStorage.removeItem("accessToken")
        navigate("/login", { replace: true });
    }

    return (
        <div className="min-h-screen flex bg-black">
            {/* Sidebar */}
            <aside className="w-64 bg-black hidden md:block shadow-md">
                <div className="p-4">
                    <img src={logo} alt="Dashboard Logo" className="w-[160px]" />
                </div>
                <nav>
                    <ul>
                        {/* <li className={`px-4 py-2 text-xl transition-all cursor-pointer ${activeTab === "Home" ? 'bg-brand text-white mx-2 rounded-xl' : 'text-nextusGray'}`}
                            onClick={() => setActiveTab('Home')}
                        >
                            <a className="block">Home</a>
                        </li> */}
                        <li className={`px-4 py-2 text-xl transition-all cursor-pointer ${activeTab === "Tasks" ? 'bg-brand text-white mx-2 rounded-xl' : 'text-nextusGray'}`}
                            onClick={() => setActiveTab('Tasks')}

                        >
                            <a className="block">Tasks</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Mobile Sidebar */}
            <aside className="bg-black shadow-md w-full md:hidden fixed bottom-0 left-0">
                <div className="flex justify-around">
                    <button onClick={() => setActiveTab('Tasks')} className="p-4 text-blue-500 hover:text-white transition-all">Tasks</button>
                    <button className="p-4 text-nextusGray hover:text-white transition-all">Logout</button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-black shadow p-4 flex items-center justify-end ">
                    {/* <h1 className="text-2xl text-brand">Welcome, User</h1> */}
                    <div className="relative inline-block text-left">
                        <button
                            type="button"
                            className={`rounded-full focus:outline-none ${showDropdown === true ? 'focus:ring-2 focus:ring-brand focus:ring-offset-2' : 'focus:outline-none'}`}
                            id="menu-button"
                            aria-expanded="false"
                            aria-haspopup="true"
                            onClick={handleDropdown}
                        >
                            <img
                                src={profile}
                                alt="User Profile"
                                className="w-10 h-10 rounded-full"
                            />
                        </button>
                        {
                            showDropdown && (
                                <div
                                    className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black/5 focus:outline-none border border-nextusGray"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                >
                                    <div className="" role="none">
                                        <button
                                            className="block px-4 py-2 rounded-md text-sm text-nextusGray hover:bg-brand hover:text-white w-full text-left"
                                            role="menuitem"
                                        >
                                            Setting
                                        </button>
                                        <button
                                            className="block px-4 py-2 rounded-md text-sm text-nextusGray hover:bg-brand hover:text-white w-full text-left"
                                            role="menuitem"
                                            onClick={handleLogOut}
                                        >
                                            Log out
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </header>
                {/* Main Content */}
                <div className="flex-1">
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
};

export default Dashboard
