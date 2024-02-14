import React, { useState, useEffect } from "react";
import Typography from "../../common/Typography/Typography";
import Button from "../../common/Button/Button";
import { useStyles } from "./Principiante.styles.js";
import Monedas from "../../components/Monedas/Monedas.js"

const Principiante = () => {
  const classes = useStyles();

  const [values, setValues] = useState([]);
  useEffect(() => {
    const initialValue = ["$4", "$7", "$15", "$60", "$30", "$70"];
    const shuffledValue = shuffleArray(initialValue);
    setValues(shuffledValue);
  }, []);

  // Función para mezclar un array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className={classes.container}>
      <div style={{ fontSize: "36px" }}>
        <Typography level={"h2"} children={"NIVEL PRINCIPIANTE"} />
      </div>
      <div>
        <table className={classes.table}>
          <tbody>
            <tr>
              <td className={classes.cell}>{values[0]}</td>
              <td className={classes.cell}>{values[1]}</td>
              <td className={classes.cell}>{values[2]}</td>
            </tr>
            <tr>
              <td className={classes.cell}>{values[3]}</td>
              <td className={classes.cell}>{values[4]}</td>
              <td className={classes.cell}>{values[5]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <div>
        <Monedas />
        <br></br>
      </div>
      <Button
        className={classes.button}
        variant={"contained"}
        value={"Enviar Respuesta"}
      />
    </div>
  );

};
export default Principiante;
