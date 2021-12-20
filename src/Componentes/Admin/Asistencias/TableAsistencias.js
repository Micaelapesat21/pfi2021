import React from 'react';
import Link from '@material-ui/core/Link';
import { fade, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckIcon from '@material-ui/icons/Check';
import BlockIcon from '@material-ui/icons/Block';
import { IconButton, Paper, InputBase, AppBar, Toolbar, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormularioDatosAsistencias from './FormularioDatosAsistencias';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CursosAPI from './../../../Network/Cursos/CursosAPI';
import { LeakAddTwoTone } from '@material-ui/icons';
//import Constantes from './Constantes'; 
import Constantes from '../Constantes';
import { getDate } from 'date-fns';


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
        fontWeight: 'bold'
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

function getNumeroCurso2 (rowid, cursos) {
    // console.log("estoy en getNumeroCurso");
    // console.log("la entrada es: " + props.cursos[0].id);
     let r = {numero:"",division:""};
      let i = 0;
     while (i<cursos.length) {
    //  console.log("i =  " + i);
          const e = i;
        //  console.log("cursoid: " + props.cursos[e].id);
          if (cursos[e].id == rowid){
              r.numero = cursos[i].numero;
              r.division =cursos[i].division;
            //  console.log("entre al if: " + r)
          }else{
            //  console.log("entre al else: " + props.cursos[i].id)
          }

      i++;
     };

      return r;
  };

function searchingTerm(term,name, cursos){
    console.log("SearchiinvTerm");

    if (name == "alumno"){ 
        return function(x){
            return x.nombre.toLowerCase().includes(term) || !term ; 
        }
    } else{
        //name == curso
        return function(x){
            const curso = getNumeroCurso2(x.curso, cursos).numero + getNumeroCurso2(x.curso, cursos).division; 
            return curso.includes(term)  || !term ; 
        }
    } 

};

function formatoFecha(fecha, formato) {
   
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;

    if (fecha.getMonth() + 1 < 10 ) {
        mes = fecha.getMonth() + 1;
        mes = "0" + mes.toString();

        console.log("MES: " + mes);
    }
    
    if (fecha.getDate() < 10 ) {
        //dia = fecha.getDate().toString().slice(+2);
        dia = fecha.getDate();
        dia = "0" + dia.toString();
        console.log("DIA: " + dia);
    }

	const map = {
        dd: dia,
        mm: mes,
        //yy: fecha.getFullYear().toString().slice(-2),
        yyyy: fecha.getFullYear()
    }

    return formato.replace(/dd|mm|yyyy/gi, matched => map[matched])
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours < 10 ? '0' + hours : hours;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    second = second < 10 ? '0' + second : second;
    var strTime = hours + ':' + minutes +  ':' + second + ' ' + ampm;
    return strTime;
  }
  



export default function Orders(props) {
    console.log("ASISTENCIAS")
    console.log(props.asistencias)
    console.log("CURSOS")
    console.log(props.cursos)
    const dateHoy= new Date();
    console.log("FECHA");
    
    const dateFormateada = formatoFecha(dateHoy, 'yyyy-mm-dd');
    console.log(dateFormateada);

    const horario2 =  dateHoy.getHours() + ':' + dateHoy.getMinutes() + ':' + dateHoy.getSeconds() + '' + dateHoy.getTimezoneOffset();
    console.log("horario2" + horario2);
    const horaActual= formatAMPM(dateHoy);
     console.log("horaActual " + horaActual)
    
    const classes = useStyles();
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [actualizar, setActualizar] = React.useState(false);
    const [estado, setEstado] = React.useState("");
    const [estadoAlumno, setEstadoAlumno] = React.useState("");
    const [date, setDate] = React.useState(dateFormateada);
    const [cursor,setCurso] = React.useState('');
    const [id,setIdCurso] = React.useState('');
    const [idAlumno,setIdAlumno] = React.useState('');
    const numerocurso = "";

    const [alumnos, setAlumnos] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [term, setTerm] = React.useState("");
    const [inputBase, setInputBase ] =  React.useState("");

    React.useEffect(() => {
        console.log("estoy en use effect")
        setActualizar(false);   

    }, [date,actualizar])

    React.useEffect(()=>{
        console.log("USE EFFECT TABLA ASISTENCIAS");
        setAlumnos(props.alumnos);
        console.log("state alumnos: " + alumnos);
        setData(alumnos);   
       // console.log("USE EFFECT TITULARES");
    }); 

    React.useEffect(()=>{
        console.log("USE EFFECT 2");
        setAlumnos(alumnos);
    },[alumnos]); 


    const handleChange = (event) => {
       
        if (event.target.id == "date"){
            console.log("handleChange if date");
            setDate(event.target.value);
        } 
        //setEstado(event.target.value); 
       
    };


    const handleChangeStatus = async (event,id) => {
            const estado = event.target.value;   
            setEstadoAlumno(estado);
            console.log("Estado: " + estadoAlumno);
            setIdAlumno(id);
            console.log("Estado: " + idAlumno);
            setModalIsOpen(true);
            //const response = await fetch(`${Constantes.RUTA_API}/save_attendance_data.php?id=${id}&date=${date}&status=${estado}`); 
           
    };

    const handleCloseAceptar = async () => {
        console.log("handleCloseAceptar")
        const response = await fetch(`${Constantes.RUTA_API}/save_attendance_data.php?id=${idAlumno}&date=${date}&status=${estadoAlumno}`); 
        console.log("Guardado");
        var horario = " ";
        console.log("estadoAlumno" + estadoAlumno);
        
        if (estadoAlumno=="Presente"){
            horario = horaActual;
        }

        console.log("Horario: " + horario);
        
        const asistencia = {
            alumno_id: idAlumno,
            estado: estadoAlumno,
            fecha: date,
            hora: horario 
        }
        console.log("asistencia:" + asistencia.hora)
        setModalIsOpen(false);
        props.asistenciaCreado(asistencia);
        setActualizar(true);
    };

    const handleCloseCancelar = () => {
        console.log("NO Guardado");
        setModalIsOpen(false);
    };

    const addButtonPressed = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    const asistenciaCreado = (asistencia) => {
        setModalIsOpen(false);
        //props.asistenciaCreado(titular);
    };

    const getNumeroCurso = (rowid) => {
      // console.log("estoy en getNumeroCurso");
      // console.log("la entrada es: " + props.cursos[0].id);
       let r = {numero:"",division:""};
        let i = 0;
       while (i<props.cursos.length) {
      //  console.log("i =  " + i);
            const e = i;
          //  console.log("cursoid: " + props.cursos[e].id);
            if (props.cursos[e].id == rowid){
                r.numero = props.cursos[i].numero;
                r.division = props.cursos[i].division;
              //  console.log("entre al if: " + r)
            }else{
              //  console.log("entre al else: " + props.cursos[i].id)
            }

        i++;
       };

        return r;
    };

const getEstadoAsistencia = (rowid) => {
    console.log("getEstadoAsistencia");
     let r = "Ausente";
     const fecha = date;
      let i = 0;
     while (i<props.asistencias.length) {
    //  console.log("i =  " + i);
          const e = i;
        //  console.log("cursoid: " + props.cursos[e].id);
          if (props.asistencias[e].alumno_id == rowid && props.asistencias[e].fecha == fecha ){
              r = props.asistencias[e].estado;
          }else{
            console.log("else");
          }
      i++;
     };

      return r;
  };
  const getEstadoAsistenciaHorario = (rowid) => {
    console.log("getEstadoAsistenciaHorario");
     let r = " ";
     const fecha = date;
      let i = 0;
     while (i<props.asistencias.length) {
    //  console.log("i =  " + i);
          const e = i;
        //  console.log("cursoid: " + props.cursos[e].id);
          if (props.asistencias[e].alumno_id == rowid && props.asistencias[e].fecha == fecha) {
             if  (props.asistencias[e].estado == 'Presente'){
                    r = props.asistencias[e].hora;
             } else {
                    r = "";
             }
                    
          }else{
            console.log("else");
          }
      i++;
     };

      return r;
  };


  const onchangeTerm = (e) => {
    setTerm(e.target.value);
    setInputBase(e.target.name);
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
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Confirme el cambio </DialogTitle>
             
             <DialogContent className="dialogContent">
             {/*
               <FormularioDatosAsistencias titularCreado = { asistenciaCreado } titulares = { props.titulares } turnos = { props.turnos }/>
             */}
             ¿Está seguro que desa pasar al estado "{estadoAlumno}" al alumno?
             </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseAceptar}> Si </Button>
                <Button onClick={handleCloseCancelar}>No </Button>
            </DialogActions>
            </Dialog>

            <AppBar position="static">
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            name = "alumno"
                            placeholder="Ingrese Nombre Alumno"
                            onChange={(e) => onchangeTerm(e)}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            name = "curso"
                            placeholder="Ingrese Curso 5B.."
                            onChange={(e) => onchangeTerm(e) }
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Fecha"
                                type="date"
                                defaultValue={dateFormateada}
                                value={date}
                                onChange={handleChange}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                    </form>
                </Toolbar>
            </AppBar>
            <Paper className={classes.paper}>
                <Title>Asistencias</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>Nombre</TableCell>
                            <TableCell className={classes.tableHead}>Apellido</TableCell>
                            <TableCell className={classes.tableHead}>Curso</TableCell>
                            <TableCell className={classes.tableHead}>Estado</TableCell>
                            <TableCell className={classes.tableHead}>Hora</TableCell>
                            <TableCell className={classes.tableHead} align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { //props.asistencias.map((row, index) => (
                           alumnos.filter(searchingTerm(term,inputBase, props.cursos)).map((row, index) => (
                                <TableRow key={index} > 
                                <TableCell>{row.nombre}</TableCell>
                                <TableCell>{row.apellido}</TableCell>
                                <TableCell>{getNumeroCurso(row.curso).numero + " div " + getNumeroCurso(row.curso).division}</TableCell>
                                <TableCell>{/*getEstadoAsistencia(row.id)*/}
                                     <FormControl className={classes.formControl}>
                                        <Select
                                        value={estado}
                                        onChange={(e) => handleChangeStatus(e,row.id)}
                                        displayEmpty
                                        className={classes.selectEmpty}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="" disabled>
                                                {getEstadoAsistencia(row.id)}
                                            </MenuItem>
                                            <MenuItem value={"Presente"}>Presente</MenuItem>
                                            <MenuItem value={"Ausente"}>Ausente</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell>{getEstadoAsistenciaHorario(row.id)}</TableCell>
                                <TableCell align="right">
                                    <IconButton size="small">
                                        <SaveIcon />
                                    </IconButton>
                                    {/*
                                    <IconButton size="small">
                                        <AddIcon />
                                    </IconButton>
                                    */}
                                </TableCell>
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
        </React.Fragment>
    );
}