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
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
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
    id: `horizontal-tab-${index}`,
    'aria-controls': `horizontal-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 300,
  },
  tabs: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Preferencias() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="horizontal tabs example"
        className={classes.tabs}
      >
        <Tab label="Bienvenida" {...a11yProps(0)} />
        <Tab label="Limpieza a la habitacion" {...a11yProps(1)} />
        <Tab label="Tintoreria" {...a11yProps(2)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        <Bienvenida />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HouseKeeping />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tintoreria />
      </TabPanel>

    </div>
  );
}