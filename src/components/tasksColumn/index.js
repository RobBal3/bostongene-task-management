import React, { useState, useContext } from "react";
import { mainContext } from "../../context/context.jsx";
import Task from "../task/index.js";
import { useStyles } from "./style.js";
import { v4 as uuidv4 } from "uuid";
import { capitalizeFirstLetter } from "../../utilities/utilityFunctions.js";
import AddNewTaskModal from "../../modals/addNewTask/index.js";
import { useParams } from "react-router-dom";

function TasksColumn({ task }) {
  const { dispatch } = useContext(mainContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const classes = useStyles();
  const { userID, boardName } = useParams();

  const [status, tasks] = task;

  function deleteColumn() {
    dispatch({
      type: "DELETE_TASK",
      status: status,
      userID: userID,
      boardName: boardName,
    });
  }

  return (
    <div className={classes.statusNameTasksWrapper}>
      <h3 className={classes.statusName}>{capitalizeFirstLetter(status)}</h3>
      <div className={classes.tasksColumn}>
        {tasks.map((task) => {
          return <Task key={uuidv4()} task={task} />;
        })}
        <div className={classes.buttonsWrapper}>
          <button className={classes.add} onClick={() => setIsModalOpen(true)}>
            Add
          </button>
          <button className={classes.delete} onClick={deleteColumn}>
            Delete
          </button>
        </div>
      </div>

      {isModalOpen && (
        <AddNewTaskModal setIsModalOpen={setIsModalOpen} status={status} />
      )}
    </div>
  );
}

export default TasksColumn;
