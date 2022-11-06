import React, { useState, useContext } from "react";
import { useStyles } from "./style.js";
import { useParams } from "react-router-dom";
import { mainContext } from "../../context/context.jsx";
import { v4 as uuidv4 } from "uuid";

function AddNewTaskModal({ setIsModalOpen, status }) {
  const [task, setTask] = useState("");
  const { dispatch } = useContext(mainContext);
  const { userID, boardName } = useParams();
  const classes = useStyles();

  function addNewTask() {
    dispatch({
      status: status,
      userID: userID,
      boardName: boardName,
      type: "ADD_NEW_TASK",
      payload: { id: uuidv4(), taskName: task },
    });
    setIsModalOpen(false);
  }

  return (
    <div className={classes.modalWrapper}>
      <label className={classes.label}>Task Name</label>
      <input
        className={classes.input}
        value={task}
        type='text'
        onChange={(e) => setTask(e.target.value)}
      />

      <div className={classes.buttonsWrapper}>
        <button className={classes.save} onClick={addNewTask}>
          Save
        </button>
        <button
          onClick={() => setIsModalOpen(false)}
          className={classes.cancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddNewTaskModal;
