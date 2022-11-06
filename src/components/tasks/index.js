import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mainContext } from "../../context/context";
import TasksColumn from "../tasksColumn";
import NewStatuColumn from "../../modals/addNewStatusColumn";
import { v4 as uuidv4 } from "uuid";
import { useStyles } from "./style.js";

function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userID, boardName } = useParams();
  const classes = useStyles();
  const { users } = useContext(mainContext);
  const navigate = useNavigate();

  const tasks = Object.entries(
    users
      .find((user) => user.userID === userID)
      .boards.find((board) => board.boardName === boardName).tasks
  );

  return (
    <>
      <button
        className={classes.btnBackToUserPage}
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <div className={classes.tasksWrapper}>
        {tasks.map((task) => {
          return <TasksColumn key={uuidv4()} task={task} />;
        })}
      </div>

      {isModalOpen && <NewStatuColumn setIsModalOpen={setIsModalOpen} />}

      <button
        className={classes.btnAddNewBoard}
        onClick={() => setIsModalOpen(true)}
      >
        New Status
      </button>
    </>
  );
}

export default Tasks;
