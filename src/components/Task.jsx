import React from "react";
import {CgClose, CgInfo} from 'react-icons/cg';
import {useHistory} from 'react-router-dom';

import "./Task.css";

const Task = ({ task, handleTaskClick, handletaskDeletion }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handletaskDeletion(task.id)}
        >
          <CgClose />
        </button>
        <button className="see-task-datails-button" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );

  // return  <div className="task-container">{task.title}</div> ;
};

export default Task;
