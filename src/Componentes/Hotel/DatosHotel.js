import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';

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
        '&:hover, &$focusVisible': {
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

class DatosHotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fotoPerfil: "",
            nombre: "",
            apellido: "",
            tipo: "",
            documento: "",
            correo: "",
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
        }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    guardar() {
        this.setState({ edicion: false, redOnly: true })
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


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid>
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
                                label="Nombre del Hotel"
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
                                label="Razon social"
                                fullWidth
                                autoComplete="Apellido"
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
                                name="correo"
                                label="Correo Electronico"
                                fullWidth
                                autoComplete="Correo"
                                value={this.state.correo}
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
                                id="Cantidad de estrellas"
                                name="estrellas"
                                label="Cantidad de estrellas"
                                fullWidth
                                autoComplete="Cantidad de estrellas"
                                value={this.state.estrellas}
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
                                name="url"
                                label="URL / Pagina Web"
                                fullWidth
                                autoComplete="Código Postal"
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

DatosHotel.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DatosHotel);