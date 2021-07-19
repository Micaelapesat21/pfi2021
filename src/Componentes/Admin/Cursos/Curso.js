import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DatosCurso from './DatosCurso';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormularioDatosAlumnos from '../Alumnos/FormularioDatosAlumnos';
import Alumnos from '../Alumnos/Alumnos';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const addButtonPressed = () => {
      setModalIsOpen(true);
  };

  const handleCloseModal = () => {
      setModalIsOpen(false);
  };

  const alumnoCreado = (titular) => {
    setModalIsOpen(false);
    props.alumnoCreado(titular);
}


  return (
    <React.Fragment>
       <Dialog
        maxWidth="lg"
        fullWidth= {true}
        open={modalIsOpen}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > DATOS DEL CURSO {props.title} </DialogTitle>
            <DialogContent className="dialogContent">
                <DatosCurso curso={props.title}/>
            </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog> 
  
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                    Total alumnos:
                    <br/>
                    Total Presentes:
                    <br/>
                    Total Ausentes: 
                    <br/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={addButtonPressed}>
          Entrar
        </Button>
      </CardActions>
    </Card>
    </React.Fragment>
  );
}

