import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

export default function Tintoreria(props) {
  const classes = useStyles();
  const setTintoreria=props.setTintoreria
  const tintoreria=props.tintoreria

  const handleChange = (event) => {
    setTintoreria({ ...tintoreria, [event.target.name]: event.target.checked });
  };

  const { uno, dos, tres,cuatro } = tintoreria;
 

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Dias a la semana</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="primary" checked={uno} onChange={handleChange} name="uno" />}
            label="1 Vez a la semana"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={dos} onChange={handleChange} name="dos" />}
            label="2 Veces a la semana"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={tres} onChange={handleChange} name="tres" />}
            label="3 Veces a la semana"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={cuatro} onChange={handleChange} name="cuatro" />}
            label="4 Veces a la semana"
          />
        </FormGroup>
        <FormHelperText>*Sujeto a disponibilidad del Hotel </FormHelperText>
      </FormControl>
      
     
    </div>
  );
}