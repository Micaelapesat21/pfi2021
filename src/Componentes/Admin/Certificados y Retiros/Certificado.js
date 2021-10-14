import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormularioDatosAlumnos from '../Alumnos/FormularioDatosAlumnos';
import Alumnos from '../Alumnos/Alumnos';
import CursosAPI from './../../../Network/Cursos/CursosAPI';


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
  //const [modalIsOpen, setAlumnosPorCurso] = React.useState();



  //Api Calls
  const getaAlumnosPorCursos = ()=> {
    
    CursosAPI.getCursos(handleGetAlumnosPorCursos());
  }


const handleGetAlumnosPorCursos = (curso) => {
    this.setState({ loading: false });

    if (curso === undefined || curso === null) {
        //show error message if needed
    } else {
        //this.setState( { curso: cursos } , this.forceUpdate());
        //this.props.actualizarCursos(cursos);
    }
}

  const addButtonPressed = () => {
      setModalIsOpen(true);
  };

  const handleCloseModal = () => {
      setModalIsOpen(false);
  };

  const alumnoCreado = (titular) => {
    setModalIsOpen(false);
    props.alumnoCreado(titular);
  };


  return (
    <React.Fragment>
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                    Certificado: {props.curso.certificado}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </React.Fragment>
  );
}

