import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Bienvenida from './Bienvenida';
import HouseKeeping from './HouseKeeping';
import Tintoreria from './Tintoreria';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
      >
        <Tab label="Bienvenida" {...a11yProps(0)} />
        <Tab label="Limpieza a la habitacion" {...a11yProps(1)} />
        <Tab label="Tintoreria" {...a11yProps(2)} />

      </Tabs>

      <TabPanel value={value} index={0}>
        <Bienvenida
          aguaFria={props.aguaFria}
          champagne={props.champagne}
          gaseosa={props.gaseosa}
          vino={props.vino}
          bebidaElegida={props.bebidaElegida}
          handleBebida={props.handleBebida}
          chocolates={props.chocolates}
          golosinas={props.golosinas}
          fiambres={props.fiambres}
          pasteleria={props.pasteleria}
          acompañamientoElegido={props.acompañamientoElegido}
          handleAcompañamiento={props.handleAcompañamiento}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HouseKeeping
          siete={props.siete}
          nueve={props.nueve}
          once={props.once}
          trece={props.trece}
          limpiezaElegida={props.limpiezaElegida}
          handleLimpieza={props.handleLimpieza}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tintoreria
          uno={props.uno}
          dos={props.dos}
          tres={props.tres}
          cuatro={props.cuatro}
          tintoreriaElegida={props.tintoreriaElegida}
          handleTintoreria={props.handleTintoreria}
        />
      </TabPanel>

    </div>
  );
}