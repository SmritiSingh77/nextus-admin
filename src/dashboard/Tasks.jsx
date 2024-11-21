import React, { useState } from 'react'
import { TaskTable } from './TaskTable';

function Tasks() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <>
            <div className="bg-brand w-full flex justify-between px-3 py-8 items-center">
                <h2 className='text-white font-medium text-4xl'>Task Management</h2>
                <button
                    onClick={toggleModal}
                    className='text-white border border-white p-4 rounded-xl flex gap-2 items-center text-xl'
                >
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.48229 16.4663V0.44567H9.22366V16.4663H7.48229ZM0.129825 9.30733V7.64335H16.5761V9.30733H0.129825Z" fill="white" />
                    </svg>
                    Add Task</button>
            </div>
            <div className='fixed w-[80%] pl-3 top-48'>
                <TaskTable/>
            </div>
            {
                isModalOpen && (
                    < div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
                        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity task-modal">
                                <div className="absolute inset-0" />
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                            <div className="inline-block align-center bg-black border border-nextusGray rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <label className="font-medium text-brand">Title:</label>
                                    <input type="text" className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-2 mb-3" />

                                    <label className="font-medium text-brand">Description:</label>
                                    <textarea className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-2 mb-3" name="" id=""></textarea>4

                                    <label className='font-medium text-brand'>Task Type:</label>
                                    <select className='w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-2 mb-3'>
                                        <option value="dailytask">Daily Tasks</option>
                                        <option value="socialtask">Social Tasks</option>
                                    </select>

                                    <label className="font-medium text-brand">Points:</label>
                                    <input type="number" className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-2 mb-3" />
                                </div>
                                <div className="bg-black px-4 py-3 text-right flex gap-8 justify-center">
                                    <button type="button" className="blur-btn text-brand" onClick={toggleModal}>Cancel</button>
                                    <button type="button" className="blur-btn text-brand">Create</button>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default Tasks