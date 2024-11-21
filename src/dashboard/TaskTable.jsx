import React, { useState } from "react";
import { EditTaskModal } from "./EditTaskModal";

export const TaskTable = () => {
  const data = [
    {
      task: "Anshul",
      desc: "no description",
      taskType: "task1",
      point: 100,
    },
    {
      task: "Smriti",
      desc: "no description",
      taskType: "task2",
      point: 1000,
    },
    {
      task: "Himanshu",
      desc: "no description",
      taskType: "task3",
      point: 2000,
    },
    {
      task: "Anshul",
      desc: "no description",
      taskType: "task1",
      point: 100,
    },
    {
      task: "Smriti",
      desc: "no description",
      taskType: "task2",
      point: 1000,
    },
    {
      task: "Himanshu",
      desc: "no description",
      taskType: "task3",
      point: 2000,
    },
    {
      task: "Anshul",
      desc: "no description",
      taskType: "task1",
      point: 100,
    },
    {
      task: "Smriti",
      desc: "no description",
      taskType: "task2",
      point: 1000,
    },
    {
      task: "Himanshu",
      desc: "no description",
      taskType: "task3",
      point: 2000,
    },
  ];

  const [isEditTaskModal, setIsEditTaskModal] = useState(false)
  const [taskData, setTaskData] = useState({
    task:"",
    desc:"",
    taskType:"",
    point:""
  })

  const handleEditBtn = (e)=>{
    setIsEditTaskModal(true)
    setTaskData({task:e.task,desc:e.desc,taskType:e.taskType,point:e.point})
  }

  return (
    <div className="border h-[100vh] bg-white rounded-lg">
      <div className="overflow-hidden">
        <table className="w-full table-fixed border-collapse">
          <thead className="border-b sticky top-0 z-10">
            <tr className="">
              <th className="text-center px-4 py-4">Title</th>
              <th className="px-4 py-4">Description</th>
              <th className="px-4 py-4">Task Type</th>
              <th className="px-4 py-4">Point</th>
              <th className="px-4 py-4">Action</th>
            </tr>
          </thead>
        </table>
        <div className="overflow-y-auto max-h-[70vh] ">
          <table className="w-full text-center table-fixed border-collapse">
            <tbody className="text-center overflow-y-auto max-h-[70vh] ">
              {data?.map((ele, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 text-gray-600 text-sm"
                >
                  <td className="px-4 py-4 border-t ">{ele.task}</td>
                  <td className="px-4 py-4 border-t ">{ele.desc}</td>
                  <td className="px-4 py-4 border-t ">{ele.task}</td>
                  <td className="px-4 py-4 border-t ">{ele.point}</td>
                  <td className="px-4 py-4 border-t ">
                    <button className="border py-1 px-2 bg-blue-600 text-white rounded" onClick={()=>handleEditBtn(ele)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isEditTaskModal && <EditTaskModal setIsEditTaskModal={setIsEditTaskModal} taskData={taskData} setTaskData={setTaskData}/>}
    </div>
  );
};
