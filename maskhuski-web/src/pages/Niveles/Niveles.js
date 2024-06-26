import React from "react";
import Typography from "../../common/Typography/Typography";
import Image from "../../common/Image/Image";
import Button from "../../common/Button/Button";
import { useStyles } from "./Niveles.styles";

const Niveles = () => {
  const classes = useStyles();
  return (
    <div className={classes.interfazNivelesContainer}>
      <Typography level={"h1"} children={"Más Khuski"} />
      <div>
        <Image src="/images/Logo_principal.png" />
      </div>
      <Typography level={"h3"} children={"Seleccione un Nivel:"} />
      <Button
        className={classes.button}
        variant={"contained"}
        value={"Principiante"}
        href={"/principiante"}
      ></Button>
      <Button
        className={classes.button}
        variant={"contained"}
        value={"Intermedio"}
        href={"/intermedio"}
      ></Button>
      <Button
        className={classes.button}
        variant={"contained"}
        value={"Avanzado"}
        href={"/avanzado"}
      ></Button>
    </div>
  );
};
export default Niveles;
