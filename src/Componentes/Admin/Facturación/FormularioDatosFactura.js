import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import HotelInfo from '../../../Models/Hotel/HotelInfo'
import FacturasAPI from '../../../Network/Facturas/FacturasAPI'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

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

class FormularioDatosFactura extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alumnoSeleccionado: null,
            titularesMenuOpen: false,
            titularesMenuOpen: false,
            turnoSeleccionado: null,
            nombre: "",
            apellido: "",
            email: "",
            pais: "",
            estado: "",
            ciudad: "",
            codigoPostal: "",
            direccion: "",
            telefono1: "",
            mesFactura: "",
            anioFactura: "",
            estrellas: "",
            edicion: true,
            redOnly: false,
            lastResponse: null,
            jornada: "",
            loading: false,
            errorMessageIsOpen: false,
            errorMessage: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    componentDidMount() {
        console.log("Facturas");
    }

    guardar() {
        if (this.alumnoSeleccionado !== null,
            this.turnoSeleccionado !== null,
            this.state.nombre !== "" &&
            this.state.apellido !== "" &&
            this.state.email !== "" &&
            this.state.pais !== "" &&
            this.state.estado !== "" &&
            this.state.ciudad !== "" &&
            this.state.codigoPostal !== "" &&
            this.state.direccion !== "" &&
            this.state.telefono1 !== "" &&
            this.state.mesFactura !== "" &&
            this.state.anioFactura !== "" && 
            this.state.jornada !=="" 
        ) {
            var dict = this.getFacturaModel();
            this.props.titularCreado(dict);

            this.postFacturaInfo(dict);
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

    //Turnos Menu
    handleChangeTurno(e) {
        this.setState({ alumnoSeleccionado: e.target.value });
    }

    handleTurnosMenuOpen() {
        this.setState({ turnosMenuOpen: true });
    }

    handleTurnosMenuClose() {
        this.setState({ turnosMenuOpen: false });
    }

    //Api Calls
    getHotelInfo(email) {
        this.setState({ loading: true });
        let hotelInfo = HotelInfo.getInstance().getHotelData()         
        this.handleGetHotelInfo(hotelInfo)
    }

    handleGetHotelInfo(hotelInfo) {
        this.setState({ loading: false });

        if (hotelInfo === undefined || hotelInfo === null) {
            //show error message if needed
        } else {
            let hotelData = hotelInfo.state;

            if (hotelData !== null) {
                this.setState({
                    nombre: hotelData.nombre,
                    razon: hotelData.razon,
                    email: hotelData.email,
                    pais: hotelData.pais,
                    estado: hotelData.estado,
                    ciudad: hotelData.ciudad,
                    codigoPostal: hotelData.codigoPostal,
                    direccion: hotelData.direccion,
                    telefono1: hotelData.telefono1,
                    telefono2: hotelData.telefono2,
                    titular: hotelData.titular,
                    jornada: hotelData.jornada,
                });            
            }
        }
    }

    postFacturaInfo = (facturaInfo) => {
        this.setState({ loading: true });
        FacturasAPI.createFactura(facturaInfo, this.handlePostHotelInfo);
    }

    handlePostFacturaInfo = async (facturaInfo) => {
        this.setState({ loading: false });
        if (facturaInfo.error == null) {
            //post was successful
            this.setState({ edicion: false, redOnly: true })
        } else {
            //get user with email failed
        }
    }

    getFacturaModel() {
        let alumnoSeleccionado = this.props.titulares[this.state.alumnoSeleccionado];

        return {
            idAlumno: alumnoSeleccionado.id,
            mes: this.state.mesFactura,
            anio: this.state.anioFactura,
        };
    }

     //Menu
     handleTitularesMenuOpen() {
        this.setState({ titularesMenuOpen: true });
    }

    handleTitularesMenuClose() {
        this.setState({ titularesMenuOpen: false });
    }

    handleChangeTitular(e) {
        this.setState({ alumnoSeleccionado: e.target.value });
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
                    <Grid item xs={12} sm={6}>
                                <InputLabel id="demo-mutiple-name-label">Nombre Alumno</InputLabel>
                                <Select
                                fullWidth
                                labelId="demo-mutiple-name-label"
                                id="demo-controlled-open-select"
                                open={ this.state.titularesMenuOpen }
                                onClose={ this.handleTitularesMenuClose.bind(this) }
                                onOpen={ this.handleTitularesMenuOpen.bind(this) }
                                value = { this.state.alumnoSeleccionado }
                                onChange={ e => this.handleChangeTitular(e) }
                                >
                                { this.props.alumnos.map((titular, index) => (
                                    <MenuItem value={index}> { titular.nombre } { titular.apellido} </MenuItem>
                                ))}
                                </Select>
                            </Grid>
                        <Grid container spacing={3}>
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
                                id="mes"
                                name="mes"
                                label="Mes Factura a emitir"
                                fullWidth
                                autoComplete="Mes Factura a emitir"
                                value={this.state.mesFactura}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="anio"
                                name="anio"
                                label="Año Factura a Emitir"
                                fullWidth
                                autoComplete="Año Factura a Emitir"
                                value={this.state.anioFactura}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
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
                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                    Generar Factura
                </Button>
            </Grid>
        );
    }
}

FormularioDatosFactura.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosFactura);