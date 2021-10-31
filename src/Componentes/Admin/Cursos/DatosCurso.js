import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { IconButton, Paper, InputBase, AppBar, Toolbar, Button } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import Title from '../Title';
import Link from '@material-ui/core/Link';
import { fade, makeStyles} from '@material-ui/core/styles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';


// Generate Order Data
function createData(id,nombre, apellido, curso, estado) {
    return { id, nombre, apellido, curso, estado};
}

const asistencias = [
    createData(0, 'Martin', 'Alvarez', '3ero "A"', 'Presente'),
    createData(1, 'Elena', 'Baldes', '5to "B"', 'Ausente'),
    createData(1, 'Carla', 'Gomez', '2do "B"', 'Ausente'),
    createData(1, 'Matias', 'Roger', '3ero "B"', 'Ausente'),
    createData(1, 'Florencia', 'Santoro', '5to "B"', 'Ausente'),
];

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2)
    },
    tableHead: {
        fontWeight: 'bold',
        color:'primary'
      },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    dialogContent: {
        height: '100hv'
    }
}));

export default function DatosCurso(props) {
console.log("CURSOS")
console.log(props.alumnosPorCurso)
console.log("ALUMNOS DEL CURSO")
console.log(props.alumnos)
console.log("ASISTENCIAS")
console.log(props.asistencias)
const [date, setDate] = React.useState("2021-09-18");

const getEstadoAsistencia = (rowid) => {
    console.log("estoy en getEstadoAsistencia");
    console.log("Longitud asistencias:" + props.asistencias.length);
    console.log("rowid:" + rowid);
    console.log("rowid:" + date);
     let r = "Ausente";
     const fecha = date;
      let i = 0;
     while (i<props.asistencias.length) {
    //  console.log("i =  " + i);
          const e = i;
        //  console.log("cursoid: " + props.cursos[e].id);
          if (props.asistencias[e].alumno_id == rowid && props.asistencias[e].fecha == fecha ){
              r = "Presente"
          }else{
            console.log("entre al else: " + props.asistencias[e].alumno_id)
          }
      i++;
     };

      return r;
  };


const classes = useStyles();
    return ( 
            <Paper className={classes.paper}>
                <Title>Alumnos</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>Nombre</TableCell>
                            <TableCell className={classes.tableHead}>Apellido</TableCell>
                            <TableCell className={classes.tableHead}>Curso</TableCell>
                            <TableCell className={classes.tableHead}>Estado</TableCell>
                            <TableCell className={classes.tableHead} align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { props.alumnos.map((alumno, index) => (    
                             <TableRow key={index}> 
                                    {props.alumnosPorCurso.includes(alumno.id) ? 
                                      <TableCell> {alumno.nombre} </TableCell>
                                      : null }
                                    {props.alumnosPorCurso.includes(alumno.id) ? 
                                      <TableCell>{alumno.apellido}</TableCell>
                                      : null }

                                      {props.alumnosPorCurso.includes(alumno.id) ? 
                                      <TableCell>{props.curso}</TableCell>
                                      : null }
                                      
                                      {props.alumnosPorCurso.includes(alumno.id) ? 
                                      <TableCell>{getEstadoAsistencia(alumno.id)}</TableCell>
                                      : null }                    
                                      
                                      {props.alumnosPorCurso.includes(alumno.id) ? 
                                        <TableCell align="right">       
                                      <IconButton size="small">                        
                                        <SaveIcon />
                                      </IconButton>
                                      <IconButton size="small">
                                        <AddIcon />
                                      </IconButton>
                                      </TableCell>    
                                       : null }         
                            </TableRow>
                        
                        ))}

                    </TableBody>
                </Table>
                <div className={classes.seeMore}>
                    <Link color="primary" >
                        Ver Mas Solicitudes
                     </Link>
                </div>
            </Paper>
        
);
}

/*
    constructor(props) {
        super(props);
        this.state = {
            alumnos: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({ alumnos: this.props.alumnos });
    }

  
*/
 
        