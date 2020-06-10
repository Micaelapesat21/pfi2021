import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, /*setChipData*/] = React.useState([
    { check: false, label: 'Restaurante' },
    { check: true, label: 'Estacionamiento' },
    { check: true, label: 'Tintoreria' },
    { check: true, label: 'Limpieza a la habitacion' },
    { check: true, label: 'Comidas especiales' },
    { check: true, label: 'Reserva de Spa' },
    { check: true, label: 'Gimnasio' },
    { check: true, label: 'Pedido de masajes' },
    { check: true, label: 'Tratamientos corporales' },
    { check: true, label: 'Alquiler' },
    { check: true, label: 'Eventos organizados' },
    { check: true, label: 'Actividades' },

   
  ]);

 

  return (
    <Grid component="ul" className={classes.root}>
      {chipData.map((data, index) => {
        if (data.check)
          return (
            <li key={index}>
              <Chip
                label={data.label}
                className={classes.chip}
              />
            </li>
          );
        else
            return(
              <div></div>
            )
      })}
    </Grid>
  );
}