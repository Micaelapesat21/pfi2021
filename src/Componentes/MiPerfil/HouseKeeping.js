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

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    champagne: false,
    gaseosa: false,
    vino: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { aguaFria, champagne, gaseosa,vino } = state;
 

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Horario de limpieza</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="primary" checked={aguaFria} onChange={handleChange} name="aguaFria" />}
            label="07:00 - 09:00 Hs"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={champagne} onChange={handleChange} name="champagne" />}
            label="09:00 - 11:00 Hs"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={gaseosa} onChange={handleChange} name="gaseosa" />}
            label="11:00 - 13:00 Hs"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={vino} onChange={handleChange} name="vino" />}
            label="13:00 - 15:00 Hs"
          />
        </FormGroup>
        <FormHelperText>*Sujeto a disponibilidad del Hotel </FormHelperText>
      </FormControl>
      
     
    </div>
  );
}