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
    console.log("ASISTENCIAS")
    console.log(props.alumnos)
    const classes = useStyles();
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [age, setAge] = React.useState('');


    const handleChange = (event) => {
      setAge(event.target.value);
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
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Complete los datos de la asistencia </DialogTitle>
            <DialogContent className="dialogContent">
             <FormularioDatosAsistencias titularCreado = { asistenciaCreado } titulares = { props.titulares } turnos = { props.turnos }/>
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
                            placeholder="Ingrese Nombre Alumno"
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
                        defaultValue="2021-05-24"
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
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Curso</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { //props.asistencias.map((row, index) => (
                            props.alumnos.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.nombre}</TableCell>
                                <TableCell>{row.apellido}</TableCell>
                                <TableCell>{row.curso}</TableCell>
                                <TableCell>
                                <FormControl className={classes.formControl}>
                                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                            </InputLabel>
                                            <Select
                                            labelId="demo-simple-select-placeholder-label-label"
                                            id="demo-simple-select-placeholder-label"
                                            value={row.estado}
                                            onChange={handleChange}
                                            displayEmpty
                                            className={classes.selectEmpty}
                                            ><MenuItem value="">
                                            <em>Sin Seleccion</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Presente</MenuItem>
                                        <MenuItem value={20}>Ausente</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton size="small">
                                        <SaveIcon />
                                    </IconButton>
                                    <IconButton size="small">
                                        <AddIcon />
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