import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Typography, Divider, IconButton } from '@material-ui/core';










const useStyles = makeStyles(theme => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    izq: {
        borderRight: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
    },
    main: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(0),

        },
    },
    tituloMobile: {
        display: "block",
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
    },
    perfilDatos:{
        marginBottom: theme.spacing(1),
    },
    ocultar:{
        display: "none",
    }
}));


export default function AdminReserva(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
   
    

    return (
        <Grid>
            <Grid container direction="row" >
                <Grid item md={3} xs={12} className={classes.izq} >
                    <Grid item md={12} xs={7} className={classes.tituloMobile}>
                        <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.id}</Typography>
                    </Grid>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Grid container direction="row" justify="flex-end" alignItems="flex-end">
                        <Grid item md={1}>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                aria-expanded={expanded}
                                color="primary"
                                onClick={handleExpandClick}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />


            <Collapse in={expanded} timeout="auto" unmountOnExit>
                
            </Collapse>
        </Grid >
    );

}