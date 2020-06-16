import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ReservaRender from './MiReserva/ReservaRender.js';

import foto2 from '../Imagenes/logoFourSeason.jpg'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        position: 'relative',

    },

}));

export default function FullWidthTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleNext = () => {
        setValue(value + 1);

    };

    const handleBack = () => {
        setValue(value - 1);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    function back() {

        if (value > 0) {
            return (
                <IconButton onClick={handleBack}>
                    <ArrowBackIosIcon />
                </IconButton>
            )
        }
    }

    function next() {
        if (value < 4) {
            return (
                <IconButton onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </IconButton>
            )
        }
    }
    



    return (
        <Grid container alignItems="center" className={classes.root}>
            <Grid item md={1}>
                {back()}
            </Grid>

            <Grid item md={10}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <ReservaRender
                            id={"Four Season"}
                            nroReserva={"#1234567"}
                            logo={foto2}
                            CheckIn={"2020-12-24"}
                            CheckOut={"2020-12-30"}
                            huespedes={4}
                            precio={"1234"}
                            checkInOpen={props.checkInOpen}
                            checkOutOpen={props.checkOutOpen}
                            modo={props.modo}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        ArrowForwardIosIcon
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        das
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        dasdsf
                    </TabPanel>
                </SwipeableViews>
            </Grid>

            <Grid item md={1}>
                {next()}
            </Grid>

        </Grid>
    );
}
