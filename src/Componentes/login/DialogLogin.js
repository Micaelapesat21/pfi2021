import React from 'react';
import { DialogTitle, withStyles, DialogContent, TextField, DialogContentText, DialogActions, Button, Container } from '@material-ui/core';
import AuthController from './AuthController';
import IniciarSesion from './IniciarSesion'

const styles = theme => ({

});

class DialogLogin extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      correo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.cambiar = this.cambiar.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  cambiar() {
    const Correo = this.state.correo;
    AuthController.handleRecupero(Correo)
    this.handleClose();
  }

  handleClose = () => {
    this.props.closePass();
  }


  render() {
    return (
      <Container>
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
    
          <IniciarSesion/>

        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose.bind()} color="primary">
            Cancelar
        </Button>
        </DialogActions>
      </Container>
    )
  }
}

export default withStyles(styles)(DialogLogin);