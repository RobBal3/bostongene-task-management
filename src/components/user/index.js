import React from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./style.js";

function User({ user }) {
  const classes = useStyles();
  const navigate = useNavigate();

  function navigateToUserBoards(params) {
    navigate(`/${user.userID}`);
  }

  return (
    <div className={classes.userWrapper} onClick={navigateToUserBoards}>
      <div>{user.userName}</div>
    </div>
  );
}

export default User;
