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
import { IconButton, Paper, InputBase, AppBar, Toolbar, Button, TextField, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormularioDatosTitular from './FormularioDatosTitular';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import MensajesAPI from '../../../Network/Mensajes/MensajesAPI'

// Generate Order Data
function createData(id,nombre, apellido, email, telefono1, ciudad) {
    return { id, nombre, apellido, email, telefono1, ciudad };
}


const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
        width: '100%'
    },
    box:{
        display: 'flex',
        width: '100%',
        marginRight: theme.spacing(5),
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
    },
    button:{
        alignItems: 'rigth',
    }
}));

function searchingTerm(term){
    console.log("SearchiinvTerm");
    return function(x){
        return x.nombre.toLowerCase().includes(term) || !term ; 
    }
};

export default function Orders(props) {
    const classes = useStyles();
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [modalMensajeIsOpen, setmodalMensajeIsOpen] = React.useState(false);
    const [actualizar, setactualizar] = React.useState(false);
    //const [mensajes, setMensajes] = React.useState(props.mensajes);
    //console.log("Mensajes: " +  mensajes );
    console.log("actualizar: " +  actualizar );
  

    const [titulares, setTitulares] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [term, setTerm] = React.useState("");
/*
    React.useEffect(()=>{
        setTitulares(props.titulares);
        setData(titulares)
       // console.log("USE EFFECT TITULARES");
    }); 

    React.useEffect(()=>{
        console.log("USE EFFECT ACTUALIZAR");
        MensajesAPI.getMensajes(handleGetMensajes.bind());
        setactualizar(false);
    },[actualizar]); 

    React.useEffect(()=>{
       console.log("USE EFFECT Mensajes");
        setMensajes(mensajes);
    },[mensajes]); 

*/

    const addButtonPressed = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    const titularCreado = (titular) => {
        setModalIsOpen(false);
        props.titularCreado(titular);
    }

    const responder = (mensaje) => {
        console.log("Responder");
    }

    const marcarLeido = (mensaje) => {
       console.log("Marcar leido");
    }

    const cursoMensaje = (curso) => {
        console.log("PASA POR ACA  cursoMensaje: " + JSON.stringify(curso))
        setModalIsOpen(false);
        setmodalMensajeIsOpen(false);
        props.cursoMensaje(curso);
    }

    const getMensajes = () => {
        MensajesAPI.getMensajes(this.handleGetMensajes.bind(this));
    }

    /*
    const handleGetMensajes = async (mensajes) => {
    console.log("estoy en el hanld de la respuesta: " + mensajes)
        if (mensajes === undefined || mensajes === null) {
            //show error message if needed
        } else {
            setMensajes(mensajes);
        }
    }
    */

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
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Complete los datos del Titular </DialogTitle>
            <DialogContent className="dialogContent">
             <FormularioDatosTitular titularCreado = { titularCreado } mensajes={props.mensajes} cursoMensaje = { cursoMensaje }/>
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
                            onChange={(e) => setTerm(e.target.value)}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
         <Paper className={classes.paper}>
             <FormularioDatosTitular mensajes={props.mensajes} cursoMensaje = { cursoMensaje }/>
                <div className={classes.seeMore}>
                    <Link color="primary" >
                        Ver Mas Solicitudes
                     </Link>
                </div>
            </Paper>
        </React.Fragment>
    );
}