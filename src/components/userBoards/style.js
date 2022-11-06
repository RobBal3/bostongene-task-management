import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  boardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  btnBackToUserPage: {
    position: "fixed",
    top: "5px",
    left: "5px",
    width: "70px",
    height: "30px",
    borderRadius: "15px",
    background: "#c1c7b7",
    cursor: "pointer",
  },

  btnAddNewBoard: {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    width: "150px",
    height: "50px",
    borderRadius: "15px",
    background: "#cce1d2",
    cursor: "pointer",
  },
});
