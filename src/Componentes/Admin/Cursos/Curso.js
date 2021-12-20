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
  const [date, setDate] = React.useState("2021-12-20");
  //const [modalIsOpen, setAlumnosPorCurso] = React.useState();

  console.log("asistencias: " + props.asistencias)

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

  const getCantidadPresentesAsistencia = () => {
    console.log("Longitud asistencias:" + props.asistencias.length);
    console.log("rowid:" + date);
    console.log("alumnos por curso: " + props.curso.alumnos)
    let r = "Ausente";
    let count = 0;
    const fecha = date;
    let i = 0;
    let j = 0;
    while (j < props.curso.alumnos.length){
      const a = j
      i = 0
      const rowid = props.curso.alumnos[a];
      console.log(" alumno de curso: " + rowid);
      while (i<props.asistencias.length) {
          const e = i;
          console.log(" alumno de asistnecia: " + props.asistencias[e].alumno_id);
            if (props.asistencias[e].alumno_id == rowid && props.asistencias[e].fecha == fecha && props.asistencias[e].estado == "Presente" ){
              count++;
            }
        i++;
      };
      console.log("aumento j")
      j++;
    }
      return count;
  };



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
                <DatosCurso curso={props.title} alumnosPorCurso= {props.curso.alumnos} alumnos= {props.alumnos} asistencias = { props.asistencias }/>
            </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog> 
  
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <div>
          { props.title == "7 Div. B" ? 
          <div>
          <Typography variant="body2" color="textSecondary" component="p">
                     Total alumnos: {props.curso.alumnos.length}
                    <br/>
                    Total Presentes: {getCantidadPresentesAsistencia()}
                    <br/>
                    Total Ausentes: {props.curso.alumnos.length - getCantidadPresentesAsistencia()}
                    <br/>
          </Typography>
          </div>                    
                              : 
        <div>
         <Typography variant="body2" color="textSecondary" component="p">
              Total alumnos: 30
              <br/>
              Total Presentes: 25
              <br/>
              Total Ausentes: 5
              <br/>
        </Typography>
        </div>
                              }
          </div>
          
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

