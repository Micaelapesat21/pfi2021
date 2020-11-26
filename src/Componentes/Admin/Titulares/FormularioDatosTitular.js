import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import HotelInfo from '../../../Models/Hotel/HotelInfo'
import TitularesAPI from '../../../Network/Titulares/TitularesAPI'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';

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

class FormularioDatosTitular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            email: "",
            documento:"",
            pais: "",
            provincia: "",
            ciudad: "",
            codigoPostal: "",
            direccion: "",
            telefono1: "",
            telefono2: "",
            estrellas: "",
            edicion: true,
            redOnly: false,
            lastResponse: null,

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
            this.state.provincia !== "" &&
            this.state.ciudad !== "" &&
            this.state.codigoPostal !== "" &&
            this.state.direccion !== "" &&
            this.state.telefono1 !== "" &&
            this.state.telefono2 !== ""&&
            this.state.documento !==""
        ) {
            
            this.postTitularInfo(this.getHotelModel())
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

    //Api Calls
    postTitularInfo = (titularData) => {
        this.setState({ loading: true });
        TitularesAPI.createTitular(titularData, this.handlePostTitularInfo.bind(this));
    }

    handlePostTitularInfo = async (titularInfo) => {
        this.setState({ loading: false });
        if (titularInfo.error == null) {
            //post was successful
            this.setState({ edicion: false, redOnly: true })
            var dict = this.getHotelModel();
            this.props.titularCreado(dict);
        } else {
            //get user with email failed
        }
    }

    getHotelModel() {
        return {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            correo: this.state.email,
            pais: this.state.pais,
            estado: this.state.provincia,
            ciudad: this.state.ciudad,
            codigoPostal: this.state.codigoPostal,
            direccion: this.state.direccion,
            telefonoContacto: this.state.telefono1,
            telefono2: this.state.telefono2,
            documento: this.state.documento,
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
                                label="Nombre del titular"
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
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="documento"
                                name="documento"
                                label="Número de Documento"
                                fullWidth
                                autoComplete="docuento"
                                value={this.state.documento}
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
                                id="Provincia"
                                name="provincia"
                                label="Estado/Provincia/Región"
                                fullWidth
                                value={this.state.provincia}
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
                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                    Crear titular
                </Button>
            </Grid>
        );
    }
}

FormularioDatosTitular.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosTitular);