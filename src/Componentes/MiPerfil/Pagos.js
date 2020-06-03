import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';





const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
})

class Pagos extends Component {
    
    render() {
       // const { classes } = this.props;
       
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} md={8} lg={9}>
                
                  <Typography variant="h3">Pagos</Typography>
              
            </Grid>
        </Grid>
        );
    }
}

Pagos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pagos);