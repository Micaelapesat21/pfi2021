import React from 'react';
import Link from '@material-ui/core/Link';
import { fade, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckIcon from '@material-ui/icons/Check';
import BlockIcon from '@material-ui/icons/Block';
import { IconButton, InputBase, AppBar, Toolbar, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormularioDatosCertificados from './FormularioDatosCertificados';
import FormularioDatosRetiros from './FormularioDatosRetiros';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MessageIcon from '@material-ui/icons/Message';
import Constantes from './Constantes'; 
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import Paper from '@material-ui/core/Paper';
import AlumnosAPI from '../../../Network/Alumnos/AlumnosAPI';
import RetirosAPI from '../../../Network/Retiros/RetirosAPI';
import CertificadosAPI from '../../../Network/Certificados/CertificadosAPI';

const CHECK_PAIRING_EMPLOYEE_INTERVAL = 1000;

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2)
    },
    table: {
        minWidth: 650,
      },
    tableHead: {
        fontWeight: 'bold'
      },
    tableRowGreen: {
          color:'green'
     
      },
    tableRowRed: {
        color:'red'
    
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
    const [actualizar, setactualizar] = React.useState(false);
    
    const [successMessageIsOpen, setsuccessMessageIsOpen] = React.useState(false);
    const [successMessageIsOpenDesasignado, setsuccessMessageIsOpenDesasignado] = React.useState(false);
    const [successMessageDelete, setsuccessMessageDelete] = React.useState(false);
    const [alumnos, setAlumnos] = React.useState(props.alumnos);
    const [data, setData] = React.useState([]);
    const [term, setTerm] = React.useState("");

    const [alumno, setAlumno] = React.useState('');
    const [certificados, setCertificados] = React.useState([]);
    const [retiros, setRetiros] = React.useState([]);
    const [modalRetirosIsOpen, setmodalRetirosIsOpen] = React.useState(false);
    const [modalCertificadosIsOpen, setmodalCertificadosIsOpen] = React.useState(false);

    console.log("Arreglo de titulares y de cursos");
    console.log(props.titulares);
    console.log(props.cursos);

    //AlumnosAPI.getAlumnos(handleGetAlumnos.bind());

    React.useEffect(()=>{
        console.log("USE EFFECT TABLA Alumnos"); 
       // setAlumnos(props.alumnos);
        console.log("state alumnos: " + alumnos);
        setData(alumnos);   
       // console.log("USE EFFECT TITULARES");
    }); 

    React.useEffect(() => {
        console.log("USE EFFECT 3");
        closeSuccessModal();
        closeSuccessModal2();
        closeSuccessModal3();
        AlumnosAPI.getAlumnos(handleGetAlumnos.bind());
        setactualizar(false);
    }, [actualizar])


    React.useEffect(()=>{
        console.log("USE EFFECT 2");
        setAlumnos(alumnos);
    },[alumnos]); 

    const addButtonPressed = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
        setmodalCertificadosIsOpen(false);
        setmodalRetirosIsOpen(false);
    };

    const handleGetAlumnos = async (alumnos) => {
   
        console.log("handleGetAlumnos ");
        if (alumnos === undefined || alumnos === null) {
            //show error message if needed
        } else {
            console.log("actualizo alumnos");
           // setactualizar(true);
            setAlumnos(alumnos);
          
        }
    }

    const alumnoCreado = (titular) => {
        setModalIsOpen(false);
        props.alumnoCreado(titular);
        setactualizar(true);
    };
  
    

     const getRetirosAlumno = async (alumnoInfo,event) => {
        console.log("getRetirosAlumno: " + alumnoInfo.id);
        RetirosAPI.getRetirosPorAlumno(alumnoInfo.id, handleGetRetirosPorId); 
        setAlumno(alumnoInfo.id);
     };

    

    const handleGetRetirosPorId = async (alumnoInfo) => {
        console.log("handleGetRetirosPorId: " + alumnoInfo);
        if (alumnoInfo.error == null) {
            //delete was successful
            console.log("se obtubieron los retiros: " + alumnoInfo);
            //AlumnosAPI.getAlumnos(handleGetAlumnos.bind());
            setRetiros(alumnoInfo);
            setmodalRetirosIsOpen(true);
           // setsuccessMessageDelete(true);
          
        } else {
            //delete user failed
            console.log("Retiros was failed");
        }
    }

    const getCertificadosAlumno = async (alumnoInfo,event) => {
        console.log("getCertificadosAlumno: " + alumnoInfo.id);
        CertificadosAPI.getCertificadosPorAlumno(alumnoInfo.id,handleGetCertificadoPorId)
        setAlumno(alumnoInfo.id);
  
     };

     const handleGetCertificadoPorId = async (alumnoInfo) => {
        console.log("handleGetCertificadoPorId: " + alumnoInfo);
        if (alumnoInfo.error == null) {
            //delete was successful
            console.log("Se obtuvieron los certificados: " + alumnoInfo);
            setCertificados(alumnoInfo);
            setmodalCertificadosIsOpen(true);
            //AlumnosAPI.getAlumnos(handleGetAlumnos.bind());
          // setsuccessMessageDelete(true);
          
        } else {
            //delete user failed
            console.log("cetfificados was failed");
        }
    }

     const getSuccessMessage = () => {
        if(successMessageIsOpen) {
            return "RFID Asignado!"
        } 
    };

    const getSuccessMessageDelete = () => {
        if(successMessageDelete) {
            return "Gracias!"
        } 
    }

    
    const closeSuccessModal = () => {
        //console.log("cerrado");
        setsuccessMessageIsOpen(false);
        setactualizar(true);
    }
 
    const getSuccessMessageDesasignado = () => {
        if(successMessageIsOpenDesasignado) 
        { //setsuccessMessageIsOpenDesasignado(true)
            return "RFID Desasignado!"
            
        } 
    }
    
    const closeSuccessModal2 = () => {
        setsuccessMessageIsOpenDesasignado(false);
        setactualizar(true);
    }
 
    const closeSuccessModal3 = () => {
        setsuccessMessageDelete(false);
        setactualizar(true);
    }

    return (
        <React.Fragment>
            <ErrorMessageModal title={'Alumno asignado a pulsera con éxito'} errorMessage= {getSuccessMessage() } isOpen={successMessageIsOpen} closeErrorModal={closeSuccessModal.bind() }/>
            <ErrorMessageModal title={'Pulsera desasignada'} errorMessage= {getSuccessMessageDesasignado() } isOpen={successMessageIsOpenDesasignado} closeErrorModal={closeSuccessModal2.bind()} />
            <ErrorMessageModal title={'Alumno eliminado con exito'} errorMessage= {getSuccessMessageDelete() } isOpen={successMessageDelete} closeErrorModal={closeSuccessModal3.bind()} />
            
            <Dialog
            maxWidth="lg"
            fullWidth= {true}
            open={modalRetirosIsOpen}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Responsables para retirar al Alumno </DialogTitle>
            <DialogContent className="dialogContent">   
                <FormularioDatosRetiros titularCreado = { alumnoCreado } titulares = { props.titulares } cursoCreado = { alumnoCreado } cursos = { props.cursos } turnos = { props.turnos } alumno = {alumno} retiros={retiros}/>
            </DialogContent>
            <DialogActions>
            </DialogActions>
            </Dialog>
            <Dialog
            maxWidth="lg"
            fullWidth= {true}
            open={modalCertificadosIsOpen}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Certificados cargados del Alumno </DialogTitle>
            <DialogContent className="dialogContent">   
                <FormularioDatosCertificados titularCreado = { alumnoCreado } titulares = { props.titulares } cursoCreado = { alumnoCreado } cursos = { props.cursos } turnos = { props.turnos } alumno = {alumno} certificados={certificados}/>
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
                <Title>Alumnos</Title>
                <Table size="small" >
                    <TableHead >
                        <TableRow >
                            <TableCell className={classes.tableHead}> 
                                 Nombre
                            </TableCell > 
                            <TableCell className={classes.tableHead}>Apellido</TableCell>
                            <TableCell className={classes.tableHead}>Teléfono</TableCell>
                            <TableCell className={classes.tableHead}>Ciudad</TableCell>
                            <TableCell className={classes.tableHead}>Certificados</TableCell>
                            <TableCell className={classes.tableHead}>Retiros</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { alumnos.filter(searchingTerm(term)).map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.nombre}</TableCell>
                                <TableCell>{row.apellido}</TableCell>
                                <TableCell>{row.telefono1}</TableCell>
                                <TableCell>{row.ciudad}</TableCell>
                                <TableCell >
                                    <IconButton size="small">
                                        <AssignmentTurnedInIcon size="small" onClick= {(event)=> {getCertificadosAlumno(row,event)}} />
                                    </IconButton>
                                </TableCell>
                                <TableCell >
                                    <IconButton size="small">
                                        <AssignmentTurnedInIcon size="small" onClick= {(event)=> {getRetirosAlumno(row,event)}}/>
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

