import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
  }));


export default function RenderAvatar(props) {

    const classes = useStyles();

    if (props.user.photoURL === null) {
        return (
            <Avatar className={classes.size}>{props.user.displayName.charAt(0)}</Avatar>
        )
    } else {
        return (
            <Avatar className={classes.small} src={props.user.photoURL} alt={props.user.displayName} />
        )
    }
}
