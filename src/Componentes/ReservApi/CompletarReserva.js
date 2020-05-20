import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import SeleccionarFechas from './SeleccionarFechas';
import PaymentForm from './PaymentForm';
import Review from './ReviewForm';
import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Confirme las fechas', 'Pago', 'Ver tu reserva'];

function getStepContent(step, props) {
  let hues = parseInt(props.huespedes)
  switch (step) {
    case 0:
      return <SeleccionarFechas CheckIn={props.CheckIn} CheckOut={props.CheckOut} huespedes={hues} precio={props.precio} />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review CheckIn={props.CheckIn} CheckOut={props.CheckOut} huespedes={hues} precio={props.precio} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function GuestInfoForm(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);



  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Hotel {props.id}
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Tu Reserva
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por reservar con nosotros
                </Typography>
                <Typography variant="subtitle1">
                  Tu numero de reserva es #2001539. Te hemos enviado un mail con tu vocher, si desea puede editar sus preferencias y realizar su Check-In
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                  component={Link}
                  to={{
                    pathname: `/ReservaOk`,
                    state:{
                      id:props.id,
                      CheckIn:props.CheckIn,
                      CheckOut:props.CheckOut,
                      huespedes:props.huespedes,
                      precio:props.precio,
                    }
                  }}>
                  Continuar
                </Button>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep, props)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Atras
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>

      </main>
    </React.Fragment>
  );
}