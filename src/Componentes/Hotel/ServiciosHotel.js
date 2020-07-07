import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChipServicios from './ChipServicios'
import TabsServicios from './TabsServicios'
import { Grid, Typography } from '@material-ui/core';

const styles = theme => ({

})

class ServiciosHotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurante: true,
            estacionamiento: true,
            tintoreria: true,
            servicio: true,
            limpieza: true,
            comidas: true,
            spa: true,
            gimnasio: true,
            masajes: true,
            tratamiento: true,
            botes: true,
            bicicletas: true,
            autos: true,
            motos: true,
            ski: true,
            Buceo: true,
            eventos: true,
            actividades: true,
        }
    }

    

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };


    render() {
        //const { classes } = this.props;

        return (
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant="h5">Servicios seleccionados </Typography>
                </Grid>
                <Grid item md={12}>
                    <ChipServicios
                        restaurante={this.state.restaurante}
                        estacionamiento={this.state.estacionamiento}
                        tintoreria={this.state.tintoreria}
                        servicio={this.state.servicio}
                        limpieza={this.state.limpieza}
                        comidas={this.state.comidas}
                        spa={this.state.spa}
                        gimnasio={this.state.gimnasio}
                        masajes={this.state.masajes}
                        tratamiento={this.state.tratamiento}
                        botes={this.state.botes}
                        bicicletas={this.state.bicicletas}
                        autos={this.state.autos}
                        motos={this.state.motos}
                        ski={this.state.ski}
                        Buceo={this.state.Buceo}
                        eventos={this.state.eventos}
                        actividades={this.state.actividades}                        
                    />
                </Grid>
                <Grid item md={12}>
                    <TabsServicios
                        restaurante={this.state.restaurante}
                        estacionamiento={this.state.estacionamiento}
                        tintoreria={this.state.tintoreria}
                        servicio={this.state.servicio}
                        limpieza={this.state.limpieza}
                        comidas={this.state.comidas}
                        spa={this.state.spa}
                        gimnasio={this.state.gimnasio}
                        masajes={this.state.masajes}
                        tratamiento={this.state.tratamiento}
                        botes={this.state.botes}
                        bicicletas={this.state.bicicletas}
                        autos={this.state.autos}
                        motos={this.state.motos}
                        ski={this.state.ski}
                        Buceo={this.state.Buceo}
                        eventos={this.state.eventos}
                        actividades={this.state.actividades}
                        handleChange={this.handleChange}
                    />
                </Grid>
            </Grid>
        );
    }
}

ServiciosHotel.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ServiciosHotel);