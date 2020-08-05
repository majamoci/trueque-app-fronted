import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Escoger un título para la publicación', 'Poner un precio referencial', 'Seleccione una categoría', 'Subir imagenes'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Esta es una de las partes mas importantes a la hora de crear tu publicación,
                ya que será de beneficio para las personas encontrar rápido lo que necesitan
                con tan solo el título. Ejemplo "Papas, Choclos, Tomate, Arroz, etc.."`;
                
    case 1:
      return <div>
              Poner un preción referencial sin especulación, el sistema te brinda la posibilidad 
              de tener a la mano los precios de los Mercados del país, puedes encontrarlo tabien en
              el siguiente 
              <Link to="//sipa.agricultura.gob.ec/index.php/precios-referenciales" target="_blank"> enlace.  </Link> 
              Por ejemplo un saco de papas esta en $20.
          </div>;
    case 2:
      return `Escoge la categoría apropiada para tu producto.
                Por ejemplo: El tomate de árbol va en la actegoría de Frutas.`;
    case 3:
      return `Seleccionar imágenes que sean acorde del producto.
              Puedes subir de 1 a 5 imágenes.  `;
    default:
      return 'Unknown step';
  }
}

export default function StepperVertical() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
     <h3>Instrucciones</h3>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
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
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Todos las indicaciones completadas.</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reiniciar
          </Button>
        </Paper>
      )}
    </div>
  );
}