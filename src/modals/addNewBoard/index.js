import React, { useState, useContext } from "react";
import { useStyles } from "./style";
import { mainContext } from "../../context/context";
import { v4 as uuidv4 } from "uuid";

function AddNewBoardModal({ setModalIsOpen, userID }) {
  const [name, setName] = useState();
  const classes = useStyles();
  const { dispatch } = useContext(mainContext);

  function addNewBoard() {
    dispatch({
      userID: userID,
      type: "ADD_NEW_BOARD",
      payload: {
        id: uuidv4(),
        boardName: name,
        tasks: { todo: [], doing: [], done: [] },
      },
    });

    setModalIsOpen(false);
  }

  return (
    <div className={classes.modalWrapper}>
      <input
        className={classes.input}
        type='text'
        onChange={(e) => setName(e.target.value)}
      />

      <div className={classes.buttonsWrapper}>
        <button className={classes.save} onClick={addNewBoard}>
          Save
        </button>
        <button
          onClick={() => setModalIsOpen(false)}
          className={classes.cancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddNewBoardModal;
