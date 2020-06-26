import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Preferencias from './Preferencias';
import { Grid } from '@material-ui/core';
import SeleccionPerfil from './SeleccionPerfil'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormularioDatos from './FormularioDatos';

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
                <Box p={3}>
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

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 800,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
    },
    formControl: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function TabsPerfil(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(1);
    const [state, setState] = React.useState({
        romantico: false,
        ejecutivo: false,
        familia: false,
        preferencias: false,
        elegido: "",
    });
    const [bienvenida, setBienvenida] = React.useState({
        aguaFria: false,
        champagne: false,
        gaseosa: false,
        vino: false,
        chocolates: false,
        golosinas: false,
        fiambres: false,
        pasteleria: false,
        elegido1:"",
        elegido2:"",
    });
    const [houseKeeping, setHouseKeeping] = React.useState({
        siete: false,
        nueve: false,
        once: false,
        trece: false,
        elegido:"",
    });
    const [tintoreria, setTintoreria] = React.useState({
        uno: false,
        dos: false,
        tres: false,
        cuatro: false,
        elegido:"",
    });







    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

   
    const handleChangeSwitch = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked, elegido: event.target.name });
    };

    


   

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label=" Datos" {...a11yProps(0)} />
                    <Tab label="Perfiles" {...a11yProps(1)} />
                    <Tab label="Preferencias" wrapped {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>

                    {/*FORMULARIO*/}
                    <FormularioDatos
                        user={props.user}
                        modo={"Perfil"}
                        perfilCompletado={props.perfilCompletado}
                        callPerfilCompletado={props.callPerfilCompletado}
                    />

                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Grid container  >
                        <Grid item xs={12} md={6}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                {/*PERFILES*/}
                                <FormLabel component="legend">Seleccione su tipo de Perfil</FormLabel>
                                <FormGroup tag="div">
                                    <FormControlLabel
                                        control={<Switch color="primary" checked={state.romantico} onChange={handleChangeSwitch} name="romantico" />}
                                        label="Romantico"
                                    />
                                    <FormControlLabel
                                        control={<Switch color="primary" checked={state.ejecutivo} onChange={handleChangeSwitch} name="ejecutivo" />}
                                        label="Ejecutivo"
                                    />
                                    <FormControlLabel
                                        control={<Switch color="primary" checked={state.familia} onChange={handleChangeSwitch} name="familia" />}
                                        label="Familia"
                                    />
                                    <FormControlLabel
                                        control={<Switch color="primary" checked={state.preferencias} onChange={handleChangeSwitch} name="preferencias" />}
                                        label="Mis Preferencias"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SeleccionPerfil
                                romantico={props.romantico}
                                ejecutivo={props.ejecutivo}
                                familia={props.familia}
                                preferencias={props.preferencias}
                                bienvenida={bienvenida}
                                houseKeeping={houseKeeping}
                                tintoreria={tintoreria} />
                        </Grid>
                    </Grid>

                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    {/*PREFERENCIAS*/}
                    <Preferencias
                        bienvenida={bienvenida}
                        setBienvenida={setBienvenida}
                        houseKeeping={houseKeeping}
                        setHouseKeeping={setHouseKeeping}
                        tintoreria={tintoreria}
                        setTintoreria={setTintoreria}

                    />
                </TabPanel>
            </SwipeableViews>
          
        </div>
    )
}