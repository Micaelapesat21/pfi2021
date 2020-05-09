import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthController from '../Componentes/login/AuthController'

const styles = theme => ({

})

class Home extends Component {
    render() {
        //const { classes } = this.props;
        return (
            <Grid>
                <Typography variant="h2">HOLA {this.props.user.displayName}!</Typography>
                <IconButton color="primary" variant="contained" onClick={AuthController.handleLogout}  >
                    <ExitToAppIcon />
                </IconButton>
            </Grid>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);