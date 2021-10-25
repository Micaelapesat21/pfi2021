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
import CertificadosAPI from './../../../Network/Certificados/CertificadosAPI';
import Image from 'material-ui-image';


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
  const [finalImg, setFinalImg] = React.useState(null);
  console.log("PROPS CURSO" + props.curso);
  console.log("PROPS CURSO" + props.curso.nombreImagen);
  console.log("PROPS CURSO" + JSON.stringify(props.curso));

  //Api Calls

  const getImagenCertificados = async (imagenInfo,event) => {
    console.log("getImagenCertificados: " + imagenInfo);
    CertificadosAPI.getImagenS3(imagenInfo,handleGetImagen)
    //setAlumno(imagenInfo);
 };

 const handleGetImagen = async (imagenInfo) => {
    console.log("handleGetImagen: " + imagenInfo);
    if (imagenInfo.error == null) {
        //delete was successful
        console.log("Se obtuvo la imagnen: " + imagenInfo.Body);

        let objImg = new Buffer.from(imagenInfo.Body,"base64")
        var finalImg = {
             contentType: "image/jpg" ,
             image: objImg,
        };
        console.log(finalImg);
        setFinalImg(finalImg);
       // setImagen(imagenInfo.Body);
       // setmodalCertificadosIsOpen(true);
        
    } else {
        //delete user failed
        console.log("imagen was failed");
    }
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
        
           <Image
            src={props.curso.certificado}
            />
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </React.Fragment>
  );
}

