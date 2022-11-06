import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  userWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    color: "#fff",
    background: "#333",
    cursor: "pointer",
  },
});
