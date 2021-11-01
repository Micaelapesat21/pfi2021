import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import EscuelaInfo from '../../../Models/Escuela/EscuelaInfo'
import AlumnosAPI from '../../../Network/Alumnos/AlumnosAPI'
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

class FormularioDatosAlumnos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titularSeleccionado: null,
            titularesMenuOpen: false,
            cursoSeleccionado: null, 
            cursosMenuOpen: false,
            turnoSeleccionado: null,
            turnosMenuOpen: false,
            nombre: "",
            apellido: "",
            email: "",
            pais: "",
            estado: "",
            ciudad: "",
            codigoPostal: "",
            direccion: "",
            telefono1: "",
            telefono2: "",
            estrellas: "",
            edicion: true,
            redOnly: false,
            lastResponse: null,
            titular: "",
            curso: "",
            loading: false,
            errorMessageIsOpen: false,
            successMessageIsOpen: false,
            alumnoInfo: null,
            errorMessage: "",
            gimnasio:false,
            futbol:false,
            tenis:false,
            hockey:false,
            ingles:false,
            portugues:false,
            frances:false,
            danza:false,
            teatro:false,
            pintura:false,
            musica:false,
            desayuno:false,
            almuerzo:false,
            merienda:false,
            transporte:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    componentDidMount() {
        //  this.get
    }

    //Menu
    handleTitularesMenuOpen() {
        console.log("tomo titulares");
        console.log(this.props.titulares)
        this.setState({ titularesMenuOpen: true });
    }

    handleTitularesMenuClose() {
        this.setState({ titularesMenuOpen: false });
    }

    handleCursosMenuOpen() {
        console.log("tomo los cursos");
        console.log(this.props.cursos)
        this.setState({ cursosMenuOpen: true });
    }

    handleCursosMenuClose() {
        this.setState({ cursosMenuOpen: false });
    }

    handleTurnosMenuOpen() {
        this.setState({ turnosMenuOpen: true });
    }

    handleTurnosMenuClose() {
        this.setState({ turnosMenuOpen: false });
    }

    getTitularMenuValue() {
        if( this.state.titularSeleccionado === null ) {
            console.log("getTitularMenuValue == null");
            return null;
        } else {
            console.log("getTitularMenuValue != null");
            return this.state.titularSeleccionado.nombre + " "  + this.state.titularSeleccionado.apellido
        }
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

    //API Calls
    guardar() {
        {console.log(this.state.gimnasio)}
        if (this.state.titularSeleccionado !== null,
            this.state.cursoSeleccionado !== null,
            this.state.turnoSeleccionado !== null,
            this.state.nombre !== "" &&
            this.state.apellido !== "" &&
            this.state.dni !== "" &&
            this.state.email !== "" &&
            this.state.pais !== "" &&
            this.state.estado !== "" &&
            this.state.ciudad !== "" &&
            this.state.codigoPostal !== "" &&
            this.state.direccion !== "" &&
            this.state.telefono1 !== "" &&
            this.state.telefono2 !== ""
        ) {
            var dict = this.getAlumnoModel();
            this.postAlumnoInfo(dict);
        } else {
            this.setState({
                errorMessageIsOpen: true,
                errorMessage: "Verifique si lleno todos los datos."
            });
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

    handleChangeTitular(e) {
        let titular = this.props.titulares[ e.target.value ];
        this.setState({ titularSeleccionado: e.target.value });
    }

    handleChangeCurso(e) {
        let curso = this.props.cursos[ e.target.value ];
        this.setState({ cursoSeleccionado: e.target.value });
    }

    handleChangeTurno(e) {
        let titular = this.props.turnos[ e.target.value ];
        this.setState({ turnoSeleccionado: e.target.value });
    }
    handleCheck = () => {
        this.setState({gimnasio: true});
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Api Calls

    postAlumnoInfo = (alumnoInfo) => {
        this.setState({ loading: true });
        console.log("POST ALUMNO INFO" + alumnoInfo.idTitular);
        AlumnosAPI.createAlumno(alumnoInfo, this.handlePostAlumnoInfo.bind(this));
    }

    handlePostAlumnoInfo = async (alumnoInfo) => {
        this.setState({ loading: false });
        if (alumnoInfo.error == null) {
            //post was successful
            this.setState({ 
                alumnoInfo: alumnoInfo,
                edicion: false, 
                redOnly: true,
                successMessageIsOpen: true
            })
        } else {
            //get user with email failed
        }
    }

    getAlumnoModel() {
        let titular = this.props.titulares[this.state.titularSeleccionado];
        console.log("Titular Seleccionado: " + titular.id);
        let turno = this.props.turnos[this.state.turnoSeleccionado];
        let curso = this.props.cursos[this.state.cursoSeleccionado]
        return {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            dni: this.state.dni,
            correo: this.state.email,
            pais: this.state.pais,
            provincia: this.state.estado,
            ciudad: this.state.ciudad,
            codigoPostal: this.state.codigoPostal,
            direccion: this.state.direccion,
            telefono1: this.state.telefono1,
            telefono2: this.state.telefono2,
            idTitular: titular.id,
            curso: curso.id,
            turno: turno.id,
            gimnasio: this.state.gimnasio,
        };

    }

    //Modal handlers
    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
    }

    closeSuccessModal() {
        this.props.titularCreado(this.state.alumnoInfo);
        this.setState({ successMessageIsOpen: false }, this.forceUpdate());
    }

    closeSuccessModal() {
        this.props.cursoCreado(this.state.alumnoInfo);
        this.setState({ successMessageIsOpen: false }, this.forceUpdate());
    }

    getSuccessMessage() {
        if(this.state.gimnasio) {
            return "Ya estas Inscripto en el Gimnasio B \n Usuario: ESCB_" + this.state.dni + "\n password: 123456"
        } else {
            return "Bienvenido al colegio"
        }
    }
    
    render() {
        const { classes } = this.props;
        return (
            <Grid >
                {this.showLoaderIfNeeded()}
                
                <ErrorMessageModal title={'Algo salió mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                <ErrorMessageModal title={'Alumno Generada con éxito'} errorMessage= { this.getSuccessMessage() } isOpen={this.state.successMessageIsOpen} closeErrorModal={this.closeSuccessModal.bind(this)} />
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-mutiple-name-label">Nombre Titular</InputLabel>
                            <Select
                            fullWidth
                            labelId="demo-mutiple-name-label"
                            id="demo-controlled-open-select"
                            open={ this.state.titularesMenuOpen }
                            onClose={ this.handleTitularesMenuClose.bind(this) }
                            onOpen={ this.handleTitularesMenuOpen.bind(this) }
                            value = { this.state.titularSeleccionado }
                            onChange={ e => this.handleChangeTitular(e) }
                            >
                            { this.props.titulares.map((titular, index) => (
                                <MenuItem value={index}> { titular.nombre } { titular.apellido} </MenuItem>
                            ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Nombre"
                                name="nombre"
                                label="Nombre del alumno"
                                fullWidth
                                autoComplete="Nombre"
                                value={this.state.nombre}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Apellido"
                                name="apellido"
                                label="Apellido/s"
                                fullWidth
                                autoComplete="apellido"
                                value={this.state.apellido}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Correo"
                                name="email"
                                label="Correo Electronico"
                                fullWidth
                                autoComplete="Correo"
                                value={this.state.email}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Dni"
                                name="dni"
                                label="DNI"
                                fullWidth
                                autoComplete="Dni"
                                value={this.state.dni}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="País"
                                name="pais"
                                label="País"
                                fullWidth
                                autoComplete="País"
                                value={this.state.pais}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="Estado"
                                name="estado"
                                label="Estado/Provincia/Región"
                                fullWidth
                                value={this.state.estado}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Ciudad"
                                name="ciudad"
                                label="Ciudad"
                                fullWidth
                                autoComplete="Ciudad"
                                value={this.state.ciudad}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Código Postal"
                                name="codigoPostal"
                                label="Código Postal"
                                fullWidth
                                autoComplete="Código Postal"
                                value={this.state.codigoPostal}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}> 
                            <TextField
                                required
                                id="Direccion"
                                name="direccion"
                                label="Direccion"
                                fullWidth
                                autoComplete="Direccion"
                                value={this.state.direccion}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Telefono1"
                                name="telefono1"
                                label="Telefono 1"
                                fullWidth
                                autoComplete="Telefono1"
                                value={this.state.telefono1}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="telefono2"
                                name="telefono2"
                                label="Telefono 2"
                                fullWidth
                                autoComplete="Telefono 2"
                                value={this.state.telefono2}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                         <Grid item xs={12} sm={6}>
                            <InputLabel id="curso-label">Curso</InputLabel>
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
                              this.props.cursos.map((curso, index) => (
                                <MenuItem value={index}> { curso.numero} { curso.division } </MenuItem>
                            ))}  
                            </Select>
                        </Grid> 
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="turno-label">Turno</InputLabel>
                            <Select
                            fullWidth
                            labelId="turno-label"
                            id="turnos-open-select"
                            open={ this.state.turnosMenuOpen }
                            onClose={ this.handleTurnosMenuClose.bind(this) }
                            onOpen={ this.handleTurnosMenuOpen.bind(this) }
                            value = { this.state.turnoSeleccionado }
                            onChange={ e => this.handleChangeTurno(e) }
                            >
                            { this.props.turnos.map((turno, index) => (
                                <MenuItem value={ index }> { turno.nombreTurno } , Precio:{  turno.precioTurno } </MenuItem>
                                ))}
                            </Select>
                        </Grid> 
                        <Grid item xs={12} sm={6}>
                       
                        </Grid>
                        
          
                    </Grid>
                </Paper>
                
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                                
                    Crear Alumno
                </Button>
            </Grid>
        );
    }
}

FormularioDatosAlumnos.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosAlumnos);

/*
<Grid xs = {12} sm={8}>
          <ListItem>
            <Checkbox id='gimnasio' color='primary'/>
            <ListItemText primary={'Gimnasio'}/>
            <Checkbox  id='futbol' color='primary'/>
            <ListItemText primary={'Fútbol'}/>
            <Checkbox id ='hockey' color='primary'/>
            <ListItemText primary={'Hockey'}/>
            <Checkbox id ='tenis' color='primary'/>
            <ListItemText primary={'Tenis'}/>
          </ListItem></Grid>
          <Grid xs = {12} sm={6}>
          <ListItem>
            <Checkbox id ='ingles' color='primary'/>
            <ListItemText primary={'Inglés'}/>
            <Checkbox id = 'portugues' color='primary'/>
            <ListItemText primary={'Portugués'}/>
            <Checkbox id ='frances' color='primary'/>
            <ListItemText primary={'Francés'}/>
          </ListItem></Grid>
          <Grid xs = {12} sm={8}>
          <ListItem>
            <Checkbox id ='danza' color='primary'/>
            <ListItemText primary={'Danza'}/>
            <Checkbox id ='teatro' color='primary'/>
            <ListItemText primary={'Teatro'}/>
            <Checkbox id ='pintura' color='primary'/>
            <ListItemText primary={'Pintura'}/>
            <Checkbox id ='musica' color='primary'/>
            <ListItemText primary={'Música'}/>
          </ListItem></Grid>
          <Grid xs = {12} sm={8}>
          <ListItem>
            <Checkbox id ='transporte' color='primary'/>
            <ListItemText primary={'Transporte'}/>
            <Checkbox id ='desayuno' color='primary'/>
            <ListItemText primary={'Desayuno'}/>
            <Checkbox id ='almuerzo' color='primary'/>
            <ListItemText primary={'Almuerzo'}/>
            <Checkbox id ='merienda' onChange={this.handleCheck} color='primary'/>
            <ListItemText primary={'Merienda'}/>
          </ListItem></Grid> */