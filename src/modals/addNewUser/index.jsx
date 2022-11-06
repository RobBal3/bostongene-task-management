import React, { useState, useContext } from "react";
import { useStyles } from "./style.js";
import { mainContext } from "../../context/context.jsx";
import { v4 as uuidv4 } from "uuid";

function AddNewUserModal({ setIsModalOpen }) {
  const [name, setName] = useState();
  const { dispatch } = useContext(mainContext);

  const classes = useStyles();

  function saveUser() {
    dispatch({
      type: "ADD_NEW_USER",
      payload: { userID: uuidv4(), userName: name, boards: [] },
    });

    setIsModalOpen(false);
  }

  return (
    <div className={classes.modalWrapper}>
      <input
        className={classes.input}
        type='text'
        onChange={(e) => setName(e.target.value)}
      />

      <div className={classes.buttonsWrapper}>
        <button onClick={saveUser} className={classes.save}>
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

export default AddNewUserModal;
