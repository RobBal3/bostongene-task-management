import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  tasksColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "220px",
    background: "#e7f0ef",
    gap: "20px",
    padding: "10px",
    margin: {
      top: "15px",
    },
    borderRadius: "15px",
  },

  statusNameTasksWrapper: {
    display: "flex",
    flexDirection: "column",
  },

  statusName: {
    display: "flex",
    justifyContent: "center",
  },
  add: {
    width: "100px",
    height: "40px",
    borderRadius: "15px",
    fontSize: "1.1rem",
    background: "#74af96",
    color: "#fff",
    cursor: "pointer",
  },
  delete: {
    width: "100px",
    height: "40px",
    borderRadius: "15px",
    fontSize: "1.1rem",
    background: "#67221D",
    color: "#fff",
    cursor: "pointer",
  },

  buttonsWrapper: {
    display: "flex",
    gap: "3px",
  },
});
