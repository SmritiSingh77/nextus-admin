import React from "react";

export const EditTaskModal = ({
  taskData,
  setTaskData,
  setIsEditTaskModal,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = ()=>{
    console.log(taskData)
  }


  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity task-modal">
          <div className="absolute inset-0" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center bg-black border border-nextusGray rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <label className="font-medium text-brand">Title:</label>
            <input
              type="text"
              className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-2 mb-3"
              name="task"
              value={taskData.task}
              onChange={(e) => handleChange(e)}
            />
            <label className="font-medium text-brand">Description:</label>
            <textarea
              className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-2 mb-3"
              name="desc"
              id=""
              value={taskData.desc}
              onChange={(e) => handleChange(e)}
            ></textarea>
            4<label className="font-medium text-brand">Task Type:</label>
            <select
              className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-2 mb-3"
              name="task"
              onChange={(e) => handleChange(e)}
            >
              <option value="dailytask">Daily Tasks</option>
              <option value="socialtask">Social Tasks</option>
            </select>
            <label className="font-medium text-brand">Points:</label>
            <input
              type="number"
              className="w-full outline-none rounded-lg text-white border bg-transparent p-2 mt-2 mb-3"
              name="point"
              value={taskData.point}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="bg-black px-4 py-3 text-right flex gap-8 justify-center">
            <button
              type="button"
              className="blur-btn text-brand"
              onClick={() => setIsEditTaskModal(false)}
            >
              Cancel
            </button>
            <button type="button" className="blur-btn text-brand" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
