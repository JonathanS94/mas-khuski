import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  table: {
    borderCollapse: "collapse",
    width: "50%",
    margin: "auto",
  },
  cell: {
    border: "1px solid black",
    padding: "80px",
    fontSize: "80px",
  },
  button: {
    width: "300px",
    height: "150px",
    fontSize: "20px",
    border: "1px solid black",
  },
});
