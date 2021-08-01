import React from 'react';
import Link from '@material-ui/core/Link';
import { fade, makeStyles} from '@material-ui/core/styles';
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
import FormularioDatosAlumnos from './FormularioDatosAlumnos';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MessageIcon from '@material-ui/icons/Message';

// Generate Order Data
function createData(id,nombre, apellido, email, telefono1, ciudad) {
    return { id, nombre, apellido, email, telefono1, ciudad };
}

const rows = [
    createData(0, 'Martin', 'Gomez', 'martin.gomez@gmail.com', '4793-2123', 'Acassuso'),
    createData(1, 'Elena', 'Roger', 'elenaroger@gmail.com', '1154537898', 'Palermo'),
];

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
    console.log("Arreglo de titulares y de cursos");
    console.log(props.titulares);
    console.log(props.cursos);


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
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Complete los datos del Alumno </DialogTitle>
            <DialogContent className="dialogContent">
             <FormularioDatosAlumnos titularCreado = { alumnoCreado } titulares = { props.titulares } cursos = { props.cursos } turnos = { props.turnos }/>
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
                            placeholder="Buscar…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Button variant="contained" color="secondary" onClick={ addButtonPressed } >
                     Agregar Alumno 
                     </Button>
                </Toolbar>
            </AppBar>
            <Paper className={classes.paper}>
                <Title>Alumnos</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Pulsera NFC</TableCell>
                            <TableCell>Teléfono</TableCell>
                            <TableCell>Ciudad</TableCell>
                            <TableCell align="right">Asignar Pulsera</TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { props.alumnos.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.nombre}</TableCell>
                                <TableCell>{row.apellido}</TableCell>
                                <TableCell>
                                         <Box color="success.main">Asignado</Box>
                                </TableCell>
                                <TableCell>{row.telefono1}</TableCell>
                                <TableCell>{row.ciudad}</TableCell>
                                <TableCell align="right">
                                    <IconButton size="small">
                                        <AssignmentTurnedInIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton size="small">
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton size="small">
                                        <VisibilityIcon />
                                    </IconButton> 
                                    <IconButton size="small">
                                        <MessageIcon />
                                    </IconButton> 
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