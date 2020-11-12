import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import HotelInfo from '../../../Models/Hotel/HotelInfo'
import EmpleadosAPI from '../../../Network/Empleados/EmpleadosAPI'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

class FormularioDatosEmpleados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            email: "",
            pais: "",
            estado: "",
            ciudad: "",
            codigoPostal: "",
            direccion: "",
            telefono1: "",
            edicion: true,
            redOnly: false,
            lastResponse: null,
            Categoria: "",
            Puesto: "",
            CargaHoraria: "",
            Sueldo: "",
            FechaIngreso: "",
           

            loading: false,
            errorMessageIsOpen: false,
            errorMessage: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    componentDidMount() {
        //  this.getHotelInfo()
    }

    guardar() {
        if (this.state.nombre !== "" &&
            this.state.apellido !== "" &&
            this.state.email !== "" &&
            this.state.pais !== "" &&
            this.state.estado !== "" &&
            this.state.ciudad !== "" &&
            this.state.codigoPostal !== "" &&
            this.state.direccion !== "" &&
            this.state.telefono1 !== "" &&
            this.state.Categoria !== "" &&
            this.state.Puesto !== "" &&
            this.state.CargaHoraria !== "" &&
            this.state.Sueldo !== "" &&
            this.state.FechaIngreso !== ""
        ) {
         
            this.postEmpleadoInfo(this.getEmpleadoModel())

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


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    postEmpleadoInfo = (empleadoData) => {
        this.setState({ loading: true });
        EmpleadosAPI.createEmpleado(empleadoData, this.handlePostEmpleadoInfo.bind(this));
    }



    handlePostEmpleadoInfo = async (empleadoInfo) => {
        this.setState({ loading: false });
        if (empleadoInfo.error !== null) {
            //post was successful
            this.setState({ edicion: false, redOnly: true })
            var dict = this.getEmpleadoModel();
            this.props.empleadoCreado(dict);
        } else {
            //get user with email failed
        }
    }

    getEmpleadoModel() {
        return {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            correo: this.state.email,
            pais: this.state.pais,
            estado: this.state.estado,
            ciudad: this.state.ciudad,
            codigoPostal: this.state.codigoPostal,
            direccion: this.state.direccion,
            telefono: this.state.telefono1,
            categoria: this.state.Categoria,
            puesto: this.state.Puesto,
            cargaHoraria: this.state.CargaHoraria,
            sueldo: this.state.Sueldo,
            fechaIngreso: this.state.FechaIngreso
        };

    }
    

    //Modal handlers
    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid >
                {this.showLoaderIfNeeded()}
                <ErrorMessageModal title={'Algo salió mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Nombre"
                                name="nombre"
                                label="Nombre del empleado"
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
                        <Grid item xs={12}>
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
                        <Grid item xs={12}>
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
                                id="select" 
                                name="Categoria"
                                label= "categoria" 
                                fullWidth
                                value={this.state.Categoria}
                                autoComplete="Categoria"
                                onChange={this.handleChange}                           
                                select>
                          
                                <MenuItem value="10">Responsable Inscripto</MenuItem>
                                <MenuItem value="20">Monotributista</MenuItem>
                                <MenuItem value="30">Responsable Inscripto</MenuItem>                        
                            </TextField>                          
                        </Grid> 


                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="select" 
                                name="Puesto"
                                label= "Puesto" 
                                fullWidth
                                value={this.state.Puesto}
                                autoComplete="Puesto"
                                onChange={this.handleChange}                           
                                select>
                          
                                <MenuItem value="10">Docente Secundaria</MenuItem>
                                <MenuItem value="20">Docente Primaria</MenuItem>
                                <MenuItem value="30">Maestranza</MenuItem>
                                <MenuItem value="40">Mantenimiento</MenuItem>  
                                <MenuItem value="50">Administración</MenuItem>
                                <MenuItem value="60">Secretaría</MenuItem> 
                                <MenuItem value="70">Tesorería</MenuItem> 
                                <MenuItem value="80">Portería</MenuItem>                           
                            </TextField>                          
                        </Grid> 

                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="select" 
                                name="CargaHoraria"
                                label= "CargaHoraria" 
                                fullWidth
                                value={this.state.CargaHoraria}
                                autoComplete="CargaHoraria"
                                onChange={this.handleChange}                           
                                select>
                          
                                <MenuItem value="10">Full Time</MenuItem>
                                <MenuItem value="20">Part Time</MenuItem>                      
                            </TextField>                          
                        </Grid> 

                       
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Sueldo"
                                name="Sueldo"
                                label="Sueldo"
                                fullWidth
                                autoComplete="Sueldo"
                                value={this.state.Sueldo}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="FechaIngreso"
                                name="FechaIngreso"
                                label="FechaIngreso"
                                fullWidth
                                autoComplete="FechaIngreso"
                                value={this.state.FechaIngreso}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly
                                }}
                            />
                        </Grid>


                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                    Crear Empleado
                </Button>
            </Grid>
        );
    }
}

FormularioDatosEmpleados.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosEmpleados);