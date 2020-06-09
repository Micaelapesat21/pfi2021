import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const styles = theme => ({

})

class Nuevo extends Component {
    render() {
        //const { classes } = this.props;
        return (
            <div>

            </div>
        );
    }
}

Nuevo.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Nuevo);