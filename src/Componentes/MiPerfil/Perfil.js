import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Paper, } from '@material-ui/core';

import TabsPerfil from './TabsPerfil';



const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    botones: {
        marginTop: theme.spacing(1),
        minWidth: 200
    },
    espacio: {
        marginTop: theme.spacing(4),
    },
})

class Perfil extends Component {


    render() {
        const { classes } = this.props;

        return (
            <Grid container>

                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h3">Hola {this.props.user.displayName}!</Typography>
                </Grid>

                <Grid item xs={12} md={12} lg={12} className={classes.espacio}>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper>
                                <TabsPerfil 
                                user={this.props.user} 
                                perfil={this.props.perfil}
                                romanticoOpen={this.props.romanticoOpen}
                                ejecutivoOpen={this.props.ejecutivoOpen}
                                familiaOpen={this.props.familiaOpen}
                                preferenciasOpen={this.props.preferenciasOpen}
                                romantico={this.props.romantico}
                                ejecutivo={this.props.ejecutivo}
                                familia={this.props.familia}
                                preferencias={this.props.preferencias}
                                perfilCompletado={this.props.perfilCompletado}
                                callPerfilCompletado={this.props.callPerfilCompletado}
                                />
                            </Paper>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        );
    }
}

Perfil.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Perfil);