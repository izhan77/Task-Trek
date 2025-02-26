import React from "react";
import Todo from "../assets/direct-hit.png";
import Doing from "../assets/check-mark-button.png";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ name, icon, tasks, status, handleDelete }) => {
  return (
    <section className="taskColumn">
      <h2 className="taskColumnHeading">
        <img className="taskColumnIcon" src={icon} alt="" />
        {name}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
