import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  table: {
    width: "50%",
    margin: "auto",
  },
  tableCell: {
    border: "1px solid #000",
    padding: "8px",
    textAlign: "center",
  },
  img: {
    width: "70px",
    height: "70px",
  },
  monedaContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});