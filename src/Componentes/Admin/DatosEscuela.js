import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import EscuelaInfo from '../../Models/Escuela/EscuelaInfo'
import EscuelaAPI from '../../Network/Escuela/EscuelaAPI'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../Commons/ErrorMessageModal';

const styles = theme => ({
    paper: {
        padding: theme.spacing(5),
        marginTop: theme.spacing(2)
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    image: {
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
        },
        '&:hover': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.6,
                borderRadius: 60,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {

                display: "block",
            },
        },
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0,
        borderRadius: 60,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        display: "none",
        fontFamily: "Montserrat, sans-serif",
    },
    imageMarked: {
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        transition: theme.transitions.create('opacity'),
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    input: {
        display: 'none',
    },
})

class DatosEscuela extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fotoEscuela: "",
            nombre: "",
            razon: "",
            email: "",
            pais: "",
            estado: "",
            ciudad: "",
            codigoPostal: "",
            direccion: "",
            telefono1: "",
            telefono2: "",
            estrellas: "",
            url: "",
            edicion: false,
            redOnly: true,
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
         this.getEscuelaInfo()
    }

    guardar() {
        if (this.state.nombre !== "" &&
            this.state.razon !== "" &&
            this.state.email !== "" &&
            this.state.pais !== "" &&
            this.state.estado !== "" &&
            this.state.ciudad !== "" &&
            this.state.codigoPostal !== "" &&
            this.state.direccion !== "" &&
            this.state.telefono1 !== "" &&
            this.state.telefono2 !== "" &&
            this.state.estrellas !== "" &&
            this.state.url !== ""
        ) {
            var dict = this.getEscuelaModel();
            EscuelaInfo.getInstance().setEscuelaData(dict);
            this.postEscuelaInfo()
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
    botonGuardar() {
        if (this.state.edicion) {
            return (
                <Button variant="outlined" onClick={this.guardar} >Guardar</Button>
            )
        } else {
            return (
                <div />
            )
        }

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
    getEscuelaInfo(email) {
        this.setState({ loading: true });
        let escuelaInfo = EscuelaInfo.getInstance().getHotelData()         
        this.handleGetEscuelaInfo(escuelaInfo)
    }

    handleGetEscuelaInfo(escuelaInfo) {
        this.setState({ loading: false });

        if (escuelaInfo === undefined || escuelaInfo === null) {
            //show error message if needed
        } else {
            let escuelaData = escuelaInfo.state;

            if (escuelaData !== null) {
                this.setState({
                    nombre: escuelaData.nombre,
                    razon: escuelaData.razon,
                    email: escuelaData.email,
                    pais: escuelaData.pais,
                    estado: escuelaData.estado,
                    ciudad: escuelaData.ciudad,
                    codigoPostal: escuelaData.codigoPostal,
                    direccion: escuelaData.direccion,
                    telefono1: escuelaData.telefono1,
                    telefono2: escuelaData.telefono2,
                    estrellas: escuelaData.estrellas,
                    url: escuelaData.url,
                });            
            }
        }
    }

    postEscuelaInfo = () => {
        this.setState({ loading: true });
        EscuelaAPI.postEscuelaInfo(this.handlePostEscuelaInfo);
    }

    handlePostEscuelaInfo = async (escuelaInfo) => {
        this.setState({ loading: false });
        if (escuelaInfo.error == null) {
            //post was successful
            this.setState({ edicion: false, redOnly: true })
        } else {
            //get user with email failed
        }
    }

    getEscuelaModel() {
        return {
            nombre: this.state.nombre,
            razon: this.state.razon,
            email: this.state.email,
            pais: this.state.pais,
            estado: this.state.estado,
            ciudad: this.state.ciudad,
            codigoPostal: this.state.codigoPostal,
            direccion: this.state.direccion,
            telefono1: this.state.telefono1,
            telefono2: this.state.telefono2,
            estrellas: this.state.estrellas,
            url: this.state.url
        };

    }

    //Modal handlers
    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid>
                {this.showLoaderIfNeeded()}
                <ErrorMessageModal title={'Algo sali?? mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                <Grid container spacing={2}>
                    <Grid item >
                        <Button variant="contained" color="primary" onClick={this.edicionOpen}>Editar</Button>
                    </Grid>
                    <Grid item >
                        {this.botonGuardar()}
                    </Grid>
                </Grid>
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <Grid container direction="row" alignItems="center" justify="center" spacing={3}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="contained-button-file">
                                    <ButtonBase
                                        focusRipple
                                        className={classes.image}
                                        focusVisibleClassName={classes.focusVisible}
                                        component="span"
                                    >
                                        <Avatar className={classes.large} />
                                        <span className={classes.imageBackdrop} />
                                        <span className={classes.imageButton}>
                                            <Typography
                                                component="span"
                                                variant="subtitle1"
                                                color="inherit"
                                                className={classes.imageTitle}
                                            >
                                                Editar
                                     </Typography>
                                        </span>
                                    </ButtonBase>
                                </label>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Nombre"
                                name="nombre"
                                label="Nombre de la Escuela"
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
                                name="razon"
                                label="Razon social"
                                fullWidth
                                autoComplete="razon"
                                value={this.state.razon}
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
                                id="Pa??s"
                                name="pais"
                                label="Pa??s"
                                fullWidth
                                autoComplete="Pa??s"
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
                                label="Estado/Provincia/Regi??n"
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
                                id="C??digo Postal"
                                name="codigoPostal"
                                label="C??digo Postal"
                                fullWidth
                                autoComplete="C??digo Postal"
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
                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="C??digo Postal"
                                name="url"
                                label="URL / Pagina Web"
                                fullWidth
                                autoComplete="url"
                                value={this.state.url}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>


                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

DatosEscuela.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DatosEscuela);