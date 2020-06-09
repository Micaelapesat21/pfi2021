import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Servicios</Title>
      <Typography component="p" variant="h4">
        
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
       
      </Typography>
      <div>
        <Link color="primary" href="">
          Ver Mas Servicios
        </Link>
      </div>
    </React.Fragment>
  );
}