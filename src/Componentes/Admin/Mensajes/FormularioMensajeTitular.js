import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';

import CursosAPI from '../../../Network/Cursos/CursosAPI'
import MensajesAPI from '../../../Network/Mensajes/MensajesAPI'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const styles = theme => ({
    paper: {
        padding: theme.spacing(5),
        marginTop: theme.spacing(2)
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    container: {
        backgroundColor: 'red',
        fullWidth: true,
    },
    input: {
        display: 'none',
    },
    createButton: {
        marginTop: 20,
        marginLeft: '80%'
    }
})

function horaTime(){
    const dateHoy= new Date();
    console.log("FECHA: " + dateHoy);
    const hora = dateHoy.getHours();
    const minutos = dateHoy.getMinutes();
    const miliseg = dateHoy.getSeconds();
  
    const r = hora + ':' + minutos + ':' + miliseg;
    console.log("hora del mensaje" + r)
    return r 
}

 function formatoFecha (fecha, formato) {
   
    console.log(" formatoFecha " + fecha);  
  
    let dia = fecha.getDate();
    console.log("dia: " + dia);
    let mes = fecha.getMonth() + 1;

    if (fecha.getMonth() + 1 < 10 ) {
        mes = fecha.getMonth() + 1;
        mes = "0" + mes.toString();

        console.log("MES: " + mes);
    };
    
    if (fecha.getDate() < 10 ) {
        dia = fecha.getDate();
        dia = "0" + dia.toString();
        console.log("DIA: " + dia);
    };

	const map = {
        dd: dia,
        mm: mes,
        //yy: fecha.getFullYear().toString().slice(-2),
        yyyy: fecha.getFullYear()
    }

    return formato.replace(/dd|mm|yyyy/gi, matched => map[matched])
}


class FormularioMensajeTitular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: "",
            dvision: "",
            redOnly: false,
            lastResponse: null,
            titular: "",
            loading: false,
            errorMessageIsOpen: false,
            successMessageIsOpen: false,
            cursoSeleccionado: null,
            cursoMensaje: null, 
            cursosMenuOpen: false,
            cursoInfo: null,
            cursoMensajeInfo: null,
            fecha:"", 
            hora: "",
            errorMessage: ""
         }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.enviar = this.enviar.bind(this);
    }

    componentDidMount() {
        //  this.get()
    }

    //API Calls
    enviar() {
        console.log("Estoy en enviar Mensaje");
        console.log("curso: " + this.state.cursoMensaje);
        console.log("division:" + this.state.division);
        const fecha = new Date();
        const dateFormateada = formatoFecha(fecha, 'yyyy-mm-dd');
        console.log("Date formateada: " + dateFormateada);
        const hora = horaTime();
        this.state.hora = hora;
        //this.setState({fecha: dateFormateada});
        this.state.fecha = dateFormateada;
        console.log("fecha: " + this.state.fecha);

        if (
            this.state.cursoSeleccionado !== null &&
            this.state.division !== "" &&
            this.state.fecha !== ""
         ) {
           console.log("enviando mensaje");
           var dict = this.getCursoModel();
           console.log("curso modelo: " + dict);
           this.postCursoMensaje(dict);
           
        } else {
            this.setState({
                errorMessageIsOpen: true,
                errorMessage: "Verifique si lleno todos los datos."
            });
        }
    }

    postCursoMensaje = (cursoMensajeInfo) => {
        this.setState({ loading: true });
        console.log("Mensaje:" + cursoMensajeInfo);
        //CursosAPI.crearNotificacion(cursoMensajeInfo, this.handlePostCursoMensaje.bind(this));
        MensajesAPI.crearNotificacion(cursoMensajeInfo, this.handlePostCursoMensaje.bind(this));
    }

    handlePostCursoMensaje = async (cursoMensajeInfo) => {
        this.setState({ loading: false });
        if (cursoMensajeInfo.error == null) {
            //post was successful
            this.setState({ 
                cursoMensajeInfo: cursoMensajeInfo,
                edicion: false, 
                redOnly: true,
                successMessageIsOpen: true
            })
        } else {
            //get user with email failed
        }
    }

    edicionOpen() {
        this.setState({ edicion: true, redOnly: false })
    }

    showLoaderIfNeeded() {
        if (this.state.loading) {
            return (
                <div className="loader">
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                </div>
            )
        } else {
            return (
                <div />
            )
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Api Calls
   
    handleChangeCurso(e) {
        //let curso = this.props.cursos[ e.target.value ];
        //this.setState({ cursoSeleccionado: e.target.value});
        //this.setState({ cursoMensaje: curso.id  });
        console.log("e.target.value" + e.target.value)
        let titular = this.props.titulares[ e.target.value ];
        console.log("Titular: " + titular.id);
        console.log("Titular: " + titular.documento);
        this.setState({ cursoSeleccionado: e.target.value});
        this.setState({ cursoMensaje: titular.id  });
        console.log("handleChangeCurso" +  this.state.cursoMensaje);
        
    }

    getCursoModel() {
        return {
            usuario: this.state.cursoMensaje,
            leida: 'N', 
            texto: this.state.division, // es el texto
            alumno: '',
            fecha: this.state.fecha,
            hora: this.state.hora
        };

    }

    //Modal handlers
    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
    }

    closeSuccessModal() {
        this.props.cursoMensaje(this.state.cursoMensajeInfo);
        console.log("estoy cerrando el mensaje");
        this.setState({ successMessageIsOpen: false }, this.forceUpdate());
    }

    getSuccessMessage() {
           return "Gracias!";
    }

    getCursoMenuValue() {
        if( this.state.cursoSeleccionado === null ) {
            console.log("getCursoMenuValue == null");
            return null;
        } else {
            console.log("getCursoMenuValue != null");
            return this.state.cursoSeleccionado.numero + " "  + this.state.cursoSeleccionado.division
        }
    }

    handleCursosMenuOpen() {
        console.log("tomo los cursos");
        console.log(this.props.cursos)
        this.setState({ cursosMenuOpen: true });
    }

    handleCursosMenuClose() {
        this.setState({ cursosMenuOpen: false });
    }
    
    render() {
        const { classes } = this.props;
        return (
            <Grid >
                {this.showLoaderIfNeeded()}
                
                <ErrorMessageModal title={'Algo salió mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                <ErrorMessageModal title={'Mensaje enviado con éxito'} errorMessage= { this.getSuccessMessage() } isOpen={this.state.successMessageIsOpen} closeErrorModal={this.closeSuccessModal.bind(this)} />
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>    
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="curso-label">Titular</InputLabel>
                                <Select
                                fullWidth
                                labelId="curso-label"
                                id="curso-open-select"
                                open={ this.state.cursosMenuOpen }
                                onClose={ this.handleCursosMenuClose.bind(this) }
                                onOpen={ this.handleCursosMenuOpen.bind(this) }
                                value = { this.state.cursoSeleccionado }
                                onChange={ e => this.handleChangeCurso(e) }
                                >
                                {
                                this.props.titulares.map((titular, index) => (
                                    <MenuItem value={index}> { titular.nombre} { titular.apellido } </MenuItem>
                                ))}  
                                </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            id="outlined-multiline-static"
                            label="Mensaje"
                            name="division"
                            multiline
                            fullWidth
                            rows={4}
                            defaultValue="Escriba texto..."
                            variant="outlined"
                            value={this.state.division}
                            onChange={this.handleChange}
                            InputProps={{
                                readOnly: this.state.redOnly
                            }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.enviar.bind(this)} color="primary" autoFocus>                         
                    Enviar Mensaje
                </Button>
            </Grid>
        );
    }
}

FormularioMensajeTitular.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioMensajeTitular);

