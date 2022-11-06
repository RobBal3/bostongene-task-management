import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  usersContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  usersWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: {
      top: "50px",
    },
    gap: "20px",
    flexWrap: "wrap",
  },

  addUser: {
    margin: {
      top: "30px",
      left: "auto",
      right: "auto",
    },
    height: "60px",
    width: "150px",
    borderRadius: "15px",
    background: "#a2c57f",
    cursor: "pointer",
  },
});
