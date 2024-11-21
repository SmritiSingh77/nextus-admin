import React, { useState } from 'react';

function AddTasks({ toggleModal }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tasktype: 'dailytask',
        points: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.title.trim()) {
            errors.title = 'Title is required';
        } else if (formData.title.length > 55) {
            errors.title = 'Title length should be less than 55 characters';
        }

        if (!formData.description.trim()) {
            errors.description = 'Description is required';
        } else if (formData.description.length > 150) {
            errors.description = 'Description length should be less than 150 characters';
        }

        if (!formData.points.trim()) {
            errors.points = 'Points are required';
        } else if (isNaN(formData.points) || formData.points <= 0) {
            errors.points = 'Points should be a positive number';
        }

        return errors;
    };

    const handleSubmit = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log(formData);
            toggleModal();
        }
    };

    return (
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity task-modal">
                    <div className="absolute inset-0" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div
                    className="inline-block align-center bg-black border border-nextusGray rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <h2 className="text-white font-semibold text-3xl text-center pt-5">Add Task Details</h2>
                    <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className='mt-4'>
                            <label className="font-medium text-brand">Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-3 mb-2"
                            />
                            {errors.title && <span className="text-red-500 text-sm float-end">{errors.title}</span>}
                        </div>

                        <div className='mt-4'>
                            <label className="font-medium text-brand">Description:</label>
                            <textarea
                                className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-3 mb-2"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                            {errors.description && <span className="text-red-500 text-sm float-end">{errors.description}</span>}
                        </div>

                        <div className='mt-4'>
                            <label className="font-medium text-brand">Task Type:</label>
                            <select
                                name="tasktype"
                                value={formData.tasktype}
                                onChange={handleChange}
                                className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-3 mb-2"
                            >
                                <option className="bg-black hover:bg-nextusGray" value="dailytask">
                                    Daily Tasks
                                </option>
                                <option className="bg-black hover:bg-nextusGray" value="socialtask">
                                    Social Tasks
                                </option>
                            </select>
                        </div>

                        <div className='mt-4'>
                            <label className="font-medium text-brand">Points:</label>
                            <input
                                type="number"
                                name="points"
                                value={formData.points}
                                onChange={handleChange}
                                className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-3 mb-2"
                            />
                            {errors.points && <span className="text-red-500 text-sm float-end">{errors.points}</span>}
                        </div>
                    </div>
                    <div className="bg-black px-4 py-5 text-right flex gap-8 justify-center w-full mt-3">
                        <button
                            type="button"
                            className="blur-btn text-brand"
                            onClick={toggleModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="blur-btn text-brand"
                            onClick={handleSubmit}
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTasks;
