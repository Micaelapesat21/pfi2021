import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';





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
            <Grid container spacing={3}>
            
                <Grid item xs={12} md={8} lg={9}>
                   
                      
                    
                </Grid>
               
                
                
            </Grid>
        );
    }
}

Pagos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pagos);