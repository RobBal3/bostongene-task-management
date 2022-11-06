import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  boardWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "250px",
    height: "150px",
    background: "#333",
    color: "#fff",
    fontSize: "1.3rem",
    cursor: "pointer",
    borderRadius: "15px",
  },
});
