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
import FormularioDatosTitular from './FormularioDatosTitular';
import DeleteIcon from '@material-ui/icons/Delete';

// Generate Order Data
function createData(id,nombre, apellido, email, telefono1, ciudad) {
    return { id, nombre, apellido, email, telefono1, ciudad };
}

const rows = [
    createData(0, 'Emiliano', 'Da Luz', 'emiliano.daluz@gmail.com', '4793-2123', 'Acassuso'),
    createData(1, 'Hernan', 'Quire', 'hnquire@gmail.com', '1154537898', 'Palermo'),
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

function searchingTerm(term){
    console.log("SearchiinvTerm");
    return function(x){
        return x.nombre.toLowerCase().includes(term) || !term ; 
    }
};

export default function Orders(props) {
    const classes = useStyles();
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    

    const [titulares, setTitulares] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [term, setTerm] = React.useState("");

    React.useEffect(()=>{
        setTitulares(props.titulares);
        setData(titulares)
       // console.log("USE EFFECT TITULARES");
    }); 

    React.useEffect(()=>{
     //   console.log("USE EFFECT 2");
        setTitulares(titulares);
    },[titulares]); 

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
             <FormularioDatosTitular titularCreado = { titularCreado }/>
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
                            onChange={(e) => setTerm(e.target.value)}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Button variant="contained" color="secondary" onClick={ addButtonPressed } >
                     Agregar Titular 
                     </Button>
                </Toolbar>
            </AppBar>
            <Paper className={classes.paper}>
                <Title>Titulares</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>Nombre</TableCell>
                            <TableCell className={classes.tableHead}>Apellido</TableCell>
                            <TableCell className={classes.tableHead}>Email</TableCell>
                            <TableCell className={classes.tableHead}>Telefono1</TableCell>
                            <TableCell className={classes.tableHead}>Ciudad</TableCell>
                            <TableCell className={classes.tableHead} align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { titulares.filter(searchingTerm(term)).map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.nombre}</TableCell>
                                <TableCell>{row.apellido}</TableCell>
                                <TableCell>{row.correo}</TableCell>
                                <TableCell>{row.telefonoContacto}</TableCell>
                                <TableCell>{row.ciudad}</TableCell>
                                <TableCell align="right">
                                    {/* 
                                    <IconButton size="small">
                                        <CheckIcon />
                                    </IconButton>
                                    */}
                                    <IconButton size="small">
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton size="small">
                                        <VisibilityIcon />
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