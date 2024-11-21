import React, { useState } from 'react'
import AddTasks from './AddTasks';

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

            {
                isModalOpen && (
                   <AddTasks toggleModal={toggleModal} setIsModalOpen={setIsModalOpen} /> 
                )
            }
        </>
    )
}

export default Tasks