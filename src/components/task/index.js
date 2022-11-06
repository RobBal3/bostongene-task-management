import React from "react";
import { useStyles } from "./style.js";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function Task({ task }) {
  const classes = useStyles();
  return (
    <div className={classes.taskWrapper}>
      <div className={classes.taskName}>{task.taskName}</div>

      <FaEdit className={classes.edit} />
      <FaTrash className={classes.delete} />
    </div>
  );
}

export default Task;
