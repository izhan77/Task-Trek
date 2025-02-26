import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });

    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <div>
      <header className="appHeader">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={taskData.task}
            className="taskInput"
            placeholder="Enter your task"
            onChange={handleChange}
          />
          <div className="taskFormBottomLine">
            <div>
              <Tag
                name="HTML"
                selectTag={selectTag}
                selected={checkTag("HTML")}
              />
              <Tag
                name="CSS"
                selectTag={selectTag}
                selected={checkTag("CSS")}
              />
              <Tag
                name="Javascript"
                selectTag={selectTag}
                selected={checkTag("Javascript")}
              />
              <Tag
                name="React"
                selectTag={selectTag}
                selected={checkTag("React")}
              />
            </div>

            <div>
              <select
                name="status"
                value={taskData.status}
                className="taskStatus"
                onChange={handleChange}
              >
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>

              <button type="submit" className="taskSubmit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default TaskForm;
