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
import FormularioDatosAlumnos from './FormularioDatosAlumnos';

import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MessageIcon from '@material-ui/icons/Message';
import Alumnos from './Alumnos';
//import Constantes from './Constantes'; 
import Constantes from '../Constantes';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Paper from '@material-ui/core/Paper';
import AlumnosAPI from '../../../Network/Alumnos/AlumnosAPI';


// Generate Order Data
function createData(id,nombre, apellido, email, telefono1, ciudad) {
    return { id, nombre, apellido, email, telefono1, ciudad };
}

const rows = [
    createData(0, 'Martin', 'Gomez', 'martin.gomez@gmail.com', '4793-2123', 'Acassuso'),
    createData(1, 'Elena', 'Roger', 'elenaroger@gmail.com', '1154537898', 'Palermo'),
];

const CHECK_PAIRING_ALUMNO_INTERVAL = 1000;

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
    const [alumnosRfid, setalumnosRfid] = React.useState([]);
    const [successMessageIsOpen, setsuccessMessageIsOpen] = React.useState(false);
    const [successMessageIsOpenDesasignado, setsuccessMessageIsOpenDesasignado] = React.useState(false);
    const [successMessageDelete, setsuccessMessageDelete] = React.useState(false);
    const [alumnos, setAlumnos] = React.useState(props.alumnos);
    const [data, setData] = React.useState([]);
    const [term, setTerm] = React.useState("");
    
    const [actualizarIsOpen, setActualizarIsOpen] = React.useState(false);
    const [alumnoActualizar, setAlumnoActualizar] = React.useState([]);

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
        getEmployeeRfid();
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

    const actualizarButtonPressed = (row) => {
        console.log("actualizarButtonPressed" + row);
        setAlumnoActualizar(row);
        setActualizarIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
        setActualizarIsOpen(false);
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
  
    const assignRfidCard = async (employeeId,event) => {
        console.log("ESTOY POR ASIGNAR");
        console.log(employeeId);
        // shouldCheck = true;
         //const employeeId = employee.id;
         //const employeeId = 1; // esto lo puse para ver si colocaba en el empleado 3 la asignacion.
         console.log("id");
         console.log(employeeId); 

         //employee.waiting = true;
         const respuesta = await fetch(`${Constantes.RUTA_API}/set_reader_for_pairing.php?employee_id=${employeeId}`);
        // await fetch("./set_reader_for_pairing.php?employee_id=" + employeeId);
         console.log('REACT - HIZO la asignacion')
         checkIfAlumnoHasJustAssignedRfid(employeeId);
         
     };
     const checkIfAlumnoHasJustAssignedRfid = async (employeeId) => {
         console.log("checkIfAlumnoHasJustAssignedRfid");
         const r = await fetch(`${Constantes.RUTA_API}/get_alumno_rfid_serial_by_id.php?employee_id=${employeeId}`);
         console.log(r);
         const serial = await r.json();
         console.log(serial);
        // if (!shouldCheck) {
        //     employee.waiting = false;
        //     return;
        // }
         if (serial) {
           
             console.log("RFID assigned!");            
             console.log("Con Serial: " + serial);
             setsuccessMessageIsOpen(true);
             //  this.$toasted.show("RFID assigned!", {
           //     position: "top-left",
           //      duration: 1000,
           //  });
            // await this.setReaderForReading();
            // await this.refreshEmployeesList();
         } else {
            console.log("Aun no asignado")
             setTimeout(() => {
                checkIfAlumnoHasJustAssignedRfid(employeeId);
             }, CHECK_PAIRING_ALUMNO_INTERVAL);
         }
     };

     const removeRfidCard = async(alumnoId) => {
 
        //console.log("REMOVIENDO PULSERA");
        const rfidSerial = await fetch(`${Constantes.RUTA_API}/get_alumno_rfid_serial_by_id.php?employee_id=${alumnoId}`);
        // await fetch("./set_reader_for_pairing.php?employee_id=" + employeeId);
        //console.log("RFID SERIAL: " );
        //console.log(rfidSerial);
        const serial = await rfidSerial.json();
        //console.log(serial);
        //rfidSerial = 'B3-ED-AF-19';
        const r = await fetch(`${Constantes.RUTA_API}/remove_rfid_card.php?rfid_serial=${serial}`);
        setsuccessMessageIsOpenDesasignado(true); 
     // console.log("REMOVIDA");
       // console.log(r);
        //await fetch("./remove_rfid_card.php?rfid_serial=" + rfidSerial);
        // esto es el mensaje que sale arriba de todo 
        //this.$toasted.show("RFID removed", {
          //  position: "top-left",
            //duration: 1000,
        //});
     };

     const eliminarAlumno = async (alumnoInfo,event) => {
        console.log("eliminarAlumno: " + alumnoInfo.id);
        AlumnosAPI.deleteAlumno(alumnoInfo, handleDeleteAlumnos); 
     };

    const handleDeleteAlumnos = async (alumnoInfo) => {
        console.log("handleDeleteAlumnoInfo: " + alumnoInfo);
        if (alumnoInfo.error == null) {
            //delete was successful
            console.log("delete was successful");
            AlumnosAPI.getAlumnos(handleGetAlumnos.bind());
            setsuccessMessageDelete(true);
          
        } else {
            //delete user failed
            console.log("delete was failed");
        }
    }

     const getEmployeeRfid = async () => {
        console.log("getEmployeeRfid");
        const alumnosConRfid = await fetch(`${Constantes.RUTA_API}/get_Alumnos_with_rfid.php`);
        const alumnosRfid = await alumnosConRfid.json();
        console.log(alumnosRfid);
        setalumnosRfid(alumnosRfid);
     };

     const getStatusRfid = (alumnoId) => {
        //console.log("getStatusRfid");
        //console.log("longitud: " + alumnosRfid.length);
        let i = 0;
        let rfid_serial = "";
        while(i<alumnosRfid.length){
            const e = i;
            if (alumnosRfid[e].alumno_id == alumnoId){
          //      console.log("entre al if: " + alumnosRfid[e].rfid_serial )
                rfid_serial = alumnosRfid[e].rfid_serial;
            }else{
            //    console.log("entre al else: " + alumnosRfid[e].alumno_id)
            }
            i++;
        }
        return rfid_serial;
     };

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
            open={modalIsOpen}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Complete los datos del Alumno </DialogTitle>
            <DialogContent className="dialogContent">   
                <FormularioDatosAlumnos titularCreado = { alumnoCreado } titulares = { props.titulares } cursoCreado = { alumnoCreado } cursos = { props.cursos } turnos = { props.turnos }/>
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
                    <Button variant="contained" color="secondary" onClick={ addButtonPressed } >
                     Agregar Alumno 
                     </Button>
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
                            <TableCell className={classes.tableHead}>Pulsera NFC</TableCell>
                            <TableCell className={classes.tableHead}>Teléfono</TableCell>
                            <TableCell className={classes.tableHead}>Ciudad</TableCell>
                            <TableCell className={classes.tableHead} align="right" >Asignar Pulsera</TableCell>
                            <TableCell className={classes.tableHead} align="right">Desaignar Pulsera</TableCell>
                            <TableCell className={classes.tableHead} align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { alumnos.filter(searchingTerm(term)).map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.nombre}</TableCell>
                                <TableCell>{row.apellido}</TableCell>
                                { (getStatusRfid(row.id) == "") ?
                                <TableCell className={classes.tableRowRed}> No Asignado </TableCell>
                                : <TableCell className={classes.tableRowGreen}> Asignado ({getStatusRfid(row.id)})</TableCell>
                                }
                                <TableCell>{row.telefono1}</TableCell>
                                <TableCell>{row.ciudad}</TableCell>
                                <TableCell align="center">
                                    <IconButton size="small" onClick= {(event)=> {assignRfidCard(row.id,event)}}>
                                    <AssignmentTurnedInIcon ></AssignmentTurnedInIcon>
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton size="small" onClick= {(event)=> {removeRfidCard(row.id,event)}}>
                                    <AssignmentReturnedIcon ></AssignmentReturnedIcon>
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton size="small">
                                        <DeleteIcon size="small" onClick= {(event)=> {eliminarAlumno(row,event)}} />
                                    </IconButton>
                                    <IconButton size="small">
                                        <VisibilityIcon onClick = { (event) => {actualizarButtonPressed(row,event)}}/>
                                    </IconButton> 
                
                                {/*                
                                    
                                    <IconButton size="small">
                                        <MessageIcon />
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

