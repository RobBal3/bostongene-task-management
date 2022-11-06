import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  taskWrapper: {
    width: "90%",
    height: "120px",
    background: "#f7faf9",
    borderRadius: "15px",
    position: "relative",
  },
  taskName: {
    padding: "5px",
    margin: {
      top: "15px",
    },
  },
  edit: {
    position: "absolute",
    bottom: "15px",
    left: "15px",
    color: "#f9a99a",
    cursor: "pointer",
  },
  delete: {
    position: "absolute",
    bottom: "15px",
    left: "35px",
    color: "#67221d",
    cursor: "pointer",
  },
});
