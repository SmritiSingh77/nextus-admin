import React, { useRef, useState } from "react";

export const EditTaskModal = ({
  taskData,
  setTaskData,
  setIsEditTaskModal,
  handleEditBtn
}) => {

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Handle file input separately
    if (type === 'file') {
      const file = e.target.files[0];
      if (file) {
        const validExtensions = ['jpg', 'jpeg', 'png', 'webp'];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        const fileSizeInKB = file.size / 1024;

        if (!validExtensions.includes(fileExtension)) {
          setErrors((prev) => ({
            ...prev,
            imgFile: 'File type must be jpg, jpeg, png, or webp',
          }));
          return;
        }

        if (fileSizeInKB > 100) {
          setErrors((prev) => ({
            ...prev,
            imgFile: 'File size must be under 100KB',
          }));
          return;
        }

        setTaskData((prev) => ({ ...prev, imgFile: file }));
        setErrors((prev) => ({ ...prev, imgFile: '' })); // Clear errors if valid
      }
    } else {
      // Update other fields
      setTaskData((prev) => ({ ...prev, [name]: value }));
    }

    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!taskData.title.trim()) {
      errors.title = 'Title is required';
    } else if (taskData.title.length > 55) {
      errors.title = 'Title length should be less than 55 characters';
    }

    if (!taskData.description.trim()) {
      errors.description = 'Description is required';
    } else if (taskData.description.length > 150) {
      errors.description = 'Description length should be less than 150 characters';
    }

    if (!taskData.points.trim()) {
      errors.points = 'Points are required';
    } else if (isNaN(taskData.points) || taskData.points <= 0) {
      errors.points = 'Points should be a positive number';
    }

    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    if (!taskData.link || !urlRegex.test(taskData.link)) {
      errors.link = 'Please enter a valid URL';
    }

    if (!taskData.imgFile) {
      errors.imgFile = 'Image is required';
    }

    return errors;
  };


  const handleSave = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
    } else {
        setErrors({});
        console.log('Form Data:', taskData);
        handleEditBtn();
    }
  }


  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity task-modal">
          <div className="absolute inset-0" />
        </div>
        <div
          className="inline-block align-center bg-black border border-nextusGray rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <h2 className="text-white font-semibold text-3xl text-center pt-5">Add Task Details</h2>
          <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-[500px] overflow-auto">
            <div className="mt-4">
              <label className="font-medium text-brand">Title:</label>
              <input
                type="text"
                name="title"
                value={taskData.title}
                onChange={handleChange}
                className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-3 mb-2"
              />
              {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
            </div>

            <div className="mt-4">
              <label className="font-medium text-brand">Description:</label>
              <textarea
                className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-3 mb-2"
                name="description"
                value={taskData.description}
                onChange={handleChange}
              />
              {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
            </div>

            <div className="mt-4">
              <label className="font-medium text-brand">Task Type:</label>
              <select
                name="tasktype"
                value={taskData.tasktype}
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

            <div className="mt-4">
              <label className="font-medium text-brand">Upload Image</label>
              <img src={taskData.imgFile} alt="" className="w-[50px] h-[50px]" />
              <input
                type="file"
                ref={fileInputRef}
                name="imgFile"
                className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-3 mb-2"
                onChange={handleChange}
              />
              {errors.imgFile && <span className="text-red-500 text-sm">{errors.imgFile}</span>}
            </div>

            <div className="mt-4">
              <label className="font-medium text-brand">URL</label>
              <input
                type="text"
                name="link"
                value={taskData.link}
                onChange={handleChange}
                className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-3 mb-2"
              />
              {errors.link && <span className="text-red-500 text-sm">{errors.link}</span>}
            </div>

            <div className="mt-4">
              <label className="font-medium text-brand">Points:</label>
              <input
                type="number"
                name="points"
                value={taskData.points}
                onChange={handleChange}
                className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-3 mb-2"
              />
              {errors.points && <span className="text-red-500 text-sm">{errors.points}</span>}
            </div>
          </div>
          <div className="bg-black px-4 py-5 text-right flex gap-8 justify-center w-full mt-3">
            <button
              type="button"
              className="blur-btn text-brand"
              onClick={handleEditBtn}
            >
              Cancel
            </button>
            <button
              type="button"
              className="blur-btn text-brand"
              onClick={handleSave}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
