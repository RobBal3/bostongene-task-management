import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStyles } from "./style";

function Board({ board }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  function navigateToBoard() {
    navigate(`${pathname}/${board.boardName}`);
  }

  return (
    <div className={classes.boardWrapper} onClick={navigateToBoard}>
      <div>{board.boardName}</div>
    </div>
  );
}

export default Board;
