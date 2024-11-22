import React, { useState } from "react";
import { EditTaskModal } from "./EditTaskModal";
import imgTemp from '../assets/profile-pic.webp'
import imgTemp2 from '../assets/bird.webp'
import imgTemp3 from '../assets/logo.webp'

export const TaskTable = () => {
  const data = [
    {
      title: 'hello world one',
      description: 'hello description one',
      tasktype: 'dailytask1',
      imgFile: imgTemp,
      link: 'www.google.com',
      points: '100000',
    },
    {
      title: 'hello world two',
      description: 'hello description two',
      tasktype: 'dailytask2',
      imgFile: imgTemp2,
      link: 'www.google.com',
      points: '200000',
    },
    {
      title: 'hello world three',
      description: 'hello description three',
      tasktype: 'dailytask3',
      imgFile: imgTemp3,
      link: 'www.google.com',
      points: '300000',
    }
  ];

  const [isModalOpen, setisModalOpen] = useState(false)
  const [taskData, setTaskData] = useState({

    title: '',
    description: '',
    tasktype: 'dailytask',
    imgFile: null,
    link: '',
    points: '',
  })

  const handleEditBtn = (e) => {
    setisModalOpen(!isModalOpen)
    setTaskData({ title: e.title, description: e.description, tasktype: e.tasktype, imgFile: e.imgFile, link: e.link, points: e.points })

  }

  return (
    <div className="border h-[70vh] bg-white rounded-lg p-2">
      <div className="overflow-y-auto h-full">
        <table className="w-full text-center table-fixed border-collapse">
          <thead className="border-b sticky top-0 bg-white">
            <tr className="">
              <th className="text-center px-4 py-4">Title</th>
              <th className="px-4 py-4">Description</th>
              <th className="px-4 py-4">Task Type</th>
              <th className="px-4 py-4">Point</th>
              <th className="px-4 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-center overflow-y-auto max-h-[70vh] ">
            {data?.map((ele, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 text-gray-600 text-sm"
              >
                <td className="px-4 py-4 border-t ">{ele.title}</td>
                <td className="px-4 py-4 border-t ">{ele.description}</td>
                <td className="px-4 py-4 border-t ">{ele.tasktype}</td>
                <td className="px-4 py-4 border-t ">{ele.points}</td>
                <td className="px-4 py-4 border-t ">
                  <button className="border py-1 px-2 bg-brand text-white rounded" onClick={() => handleEditBtn(ele)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <EditTaskModal handleEditBtn={handleEditBtn} setisModalOpen={setisModalOpen} taskData={taskData} setTaskData={setTaskData} />}
    </div>
  );
};
