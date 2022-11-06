import React, { useState, useContext } from "react";
import { useStyles } from "./style.js";
import { useParams } from "react-router-dom";
import { mainContext } from "../../context/context.jsx";
import { v4 as uuidv4 } from "uuid";

function NewStatuColumn({ setIsModalOpen }) {
  const [status, setStatus] = useState("");
  const { dispatch } = useContext(mainContext);
  const { userID, boardName } = useParams();
  const classes = useStyles();

  function addNewStatusColumn() {
    dispatch({
      type: "ADD_NEW_STATUS_COLUMN",
      userID: userID,
      boardName: boardName,
      payload: { [status]: [] },
    });

    setIsModalOpen(false);
  }

  return (
    <div className={classes.modalWrapper}>
      <label className={classes.label}>Status</label>
      <input
        className={classes.input}
        value={status}
        type='text'
        onChange={(e) => setStatus(e.target.value)}
      />

      <div className={classes.buttonsWrapper}>
        <button className={classes.save} onClick={addNewStatusColumn}>
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

export default NewStatuColumn;
