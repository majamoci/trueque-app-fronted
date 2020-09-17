// general
import React, { useState } from "react";
import { Link } from "react-router-dom";
// material ui
import Step from "@material-ui/core/Step";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import StepContent from "@material-ui/core/StepContent";
// local
import { useStyles } from "../styles";

function getSteps() {
  return [
    "Escoge un título para la publicación",
    "Pon un precio referencial",
    "Selecciona una categoría",
    "Sube tus imágenes",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Esta es una de las partes mas importantes a la hora de crear tu publicación,
                ya que será de beneficio para las personas encontrar rápido lo que necesitan
                con tan solo el título. Ejemplo "Papas, Choclos, Tomate, Arroz, etc.."`;
    case 1:
      return (
        <div>
          Poner un precio referencial sin especulación, el sistema te brinda la
          posibilidad de tener a la mano los precios de los mercados del país,
          puedes encontrarlo tambien en el siguiente&nbsp;
          <Link
            to="//sipa.agricultura.gob.ec/index.php/precios-referenciales"
            target="_blank"
          >
            enlace
          </Link>
          .&nbsp;Por ejemplo un saco de papas esta en $20.
        </div>
      );
    case 2:
      return `Escoge la categoría apropiada para tu producto.
                Por ejemplo: El tomate de árbol va en la categoría de Frutas.`;
    case 3:
      return `Selecciona las mejores imágenes del producto que vas a ofrecer.
              Puedes subir hasta 5 imágenes.`;
    default:
      return "Unknown step";
  }
}

export default function InfoPub() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => setActiveStep(0);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Atras
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
                </Button>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>¡Genial! Haz leído todas las indicaciones.</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Mirar de nuevo!
          </Button>
        </Paper>
      )}
    </div>
  );
}
