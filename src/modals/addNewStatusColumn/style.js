import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  modalWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    position: "fixed",
    zIndex: "1",
    width: "300px",
    height: "400px",
    backgroundColor: "rgba(0,0,0,0.9)",
    top: "50px",
    left: "40%",
    borderRadius: "15px",
  },
  buttonsWrapper: {
    display: "flex",
    gap: "7px",
  },
  save: {
    height: "60px",
    width: "90px",
    borderRadius: "15px",
    background: "#a2c57f",
    cursor: "pointer",
    curser: "pointer",
  },
  cancel: {
    height: "60px",
    width: "90px",
    borderRadius: "15px",
    background: "#a64e6d",
    cursor: "pointer",
    curser: "pointer",
  },
  input: {
    width: "200px",
    height: "50px",
    borderRadius: "15px",
    top: "30px",
  },

  label: {
    color: "#fff",
    margin: {
      top: "20px",
    },
    fontSize: "1.2rem",
  },
});
