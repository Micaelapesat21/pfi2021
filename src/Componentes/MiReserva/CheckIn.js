import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

import ReservaRender from './ReservaRender';
import foto from '../../Imagenes/logoHotel.png'







const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 400,
    },
})

class CheckIn extends Component {

    render() {
        //const { classes } = this.props;

        return (
            <Grid container spacing={3} justify="center" alignItems="center">

                <Grid item xs={12} md={8} lg={9}>
                    <Typography variant="h3">Check-In</Typography>

                    {<ReservaRender
                        user={this.props.user}
                        id={this.props.id}
                        logo={foto}
                        CheckIn={this.props.CheckIn}
                        CheckOut={this.props.CheckOut}
                        huespedes={this.props.huespedes}
                        precio={this.props.precio}
                        checkInOpen={this.props.checkInOpen}
                        checkOutOpen={this.props.checkOutOpen}
                        modo={this.props.modo}
                        romantico={this.props.romantico}
                        ejecutivo={this.props.ejecutivo}
                        familia={this.props.familia}
                        preferencias={this.props.preferencias}
                        perfil={this.props.perfil}
                        romanticoOpen={this.props.romanticoOpen}
                        ejecutivoOpen={this.props.ejecutivoOpen}
                        familiaOpen={this.props.familiaOpen}
                        preferenciasOpen={this.props.preferenciasOpen}
                        reservasOpenContacto={this.props.reservasOpenContacto}
                        perfilCompletado={this.props.perfilCompletado}
                        callPerfilCompletado={this.props.callPerfilCompletado}
                    />}



                </Grid>



            </Grid>
        );
    }
}

CheckIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckIn);