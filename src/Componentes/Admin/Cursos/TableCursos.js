import React from 'react';
import Link from '@material-ui/core/Link';
import { fade, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Box from '@material-ui/core/Box';
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
import FormularioDatosCursos from './FormularioDatosCursos';
import FormularioMensajeCurso from './FormularioMensajeCurso';
import Curso from './Curso';
import Cursos from './Cursos';
import MediaCard from './Curso';
import TableAlumnos from '../Alumnos/TableAlumnos';
import DatosCurso from './DatosCurso';
import CursosAPI from './../../../Network/Cursos/CursosAPI';


// Generate Order Data
function createData(id,nombre, apellido, email, telefono1, ciudad) {
    return { id, nombre, apellido, email, telefono1, ciudad };
}

const rows = [
    createData(0, 'Martin', 'Gomez', 'martin.gomez@gmail.com', '4793-2123', 'Acassuso'),
    createData(1, 'Elena', 'Roger', 'elenaroger@gmail.com', '1154537898', 'Palermo'),
];

const arraycursos = [
    {
        id: 1,
        title: '1ero "A"'
    },
    {
        id: 2,
        title: '1ero "B"'
    },
    {
        id: 3,
        title: '2do "A"'
    },
    {
        id: 4,
        title: '3ero "A"'
    }
]

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2)
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

export default function Orders(props) {
    const classes = useStyles();
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [modalMensajeIsOpen, setmodalMensajeIsOpen] = React.useState(false);


    const addButtonPressed = () => {
        setModalIsOpen(true);
        setmodalMensajeIsOpen(false);
    };
    const addButtonPressedMensaje = () => {
        setModalIsOpen(false);
        setmodalMensajeIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
        setmodalMensajeIsOpen(false);
    };

    const cursoCreado = (curso) => {
        setModalIsOpen(false);
        setmodalMensajeIsOpen(false);
        props.cursoCreado(curso);
    }

    const cursoMensaje = (curso) => {
        setModalIsOpen(false);
        setmodalMensajeIsOpen(false);
        props.cursoMensaje(curso);
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
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Complete los datos del curso </DialogTitle>
            <DialogContent className="dialogContent">
            <FormularioDatosCursos cursoCreado = { cursoCreado } titularCreado = { cursoCreado } titulares = { props.titulares } turnos = { props.turnos } />
            {/*
             <DatosCurso  /> */}
                     
            </DialogContent>
            <DialogActions>
            </DialogActions>
            </Dialog>
            <Dialog
            maxWidth="lg"
            fullWidth= {true}
            open={modalMensajeIsOpen}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Complete los datos del mensaje </DialogTitle>
            <DialogContent className="dialogContent">
            <FormularioMensajeCurso cursoCreado = { cursoCreado } cursoMensaje = { cursoMensaje } titularCreado = { cursoCreado } titulares = { props.titulares } turnos = { props.turnos } cursos = { props.cursos }/>
            {/*
             <DatosCurso  /> */}
                     
            </DialogContent>
            <DialogActions>
            </DialogActions>
            </Dialog>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Buscar???"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        </div>
                    <Button variant="contained" color="secondary" onClick={ addButtonPressed } >
                     Agregar Curso 
                    </Button>                   
                    <div>
                    <Box m={2}>
                        <Button  variant="contained" color="secondary" align="right" onClick={ addButtonPressedMensaje } padding={10} margin={5} >
                          Enviar Mensaje 
                        </Button>
                    </Box>
                    </div> 
                    
                </Toolbar>
            </AppBar>
            <Paper className={classes.paper}>
                <Title>Cursos</Title>
                 <div className="container">
                     <div className="row"> 
                         {
                             props.cursos.map( objectcurso => (
                                <div className= "col-md-3" key={objectcurso.id}>
                                   <MediaCard title={objectcurso.numero + " Div. "+ objectcurso.division} curso = {objectcurso}  alumnos={props.alumnos} asistencias = { props.asistencias }></MediaCard>
                                </div>
                            ))
                        }          
                    </div>
                 </div>             
                <div className={classes.seeMore}>
                    <Link color="primary" >
                        Ver Mas Solicitudes
                     </Link>
                </div>
            </Paper>
        </React.Fragment>
    );
}