import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mainContext } from "../../context/context";
import { useStyles } from "./style";
import Board from "../board";
import AddNewBoardModal from "../../modals/addNewBoard";
import { v4 as uuidv4 } from "uuid";

function UserBoards() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { users } = useContext(mainContext);
  const { userID } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();

  const { boards } = users.find((user) => user.userID === userID);

  function openModal() {
    setModalIsOpen(true);
  }

  return (
    <>
      <div className={classes.boardsContainer}>
        {boards.map((board) => {
          return <Board key={uuidv4()} board={board} />;
        })}
      </div>

      <button
        className={classes.btnBackToUserPage}
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      {modalIsOpen && (
        <AddNewBoardModal setModalIsOpen={setModalIsOpen} userID={userID} />
      )}

      <button className={classes.btnAddNewBoard} onClick={openModal}>
        New Board
      </button>
    </>
  );
}

export default UserBoards;
