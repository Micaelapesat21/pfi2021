import React from 'react';
import Link from '@material-ui/core/Link';
import { fade, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { IconButton, Paper, InputBase, AppBar, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '15 Oct, 2019', '20 Oct, 2019', 'Fernado Palomo', 'VISA ⠀•••• 3719', 3120.44),
    createData(1, '15 Oct, 2019', '20 Oct, 2019', 'Juan Fernandez', 'VISA ⠀•••• 2574', 8660.99),
    createData(2, '15 Oct, 2019', '20 Oct, 2019', 'Martin Velazquez', 'MC ⠀•••• 1253', 1000.81),
    createData(3, '15 Oct, 2019', '20 Oct, 2019', 'Sergio Perez', 'AMEX ⠀•••• 2000', 6540.39),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
    createData(4, '14 Oct, 2019', '20 Oct, 2019', 'Carlos Abila', 'VISA ⠀•••• 5919', 2120.79),
];

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2)
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Orders() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Buscar…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Paper className={classes.paper}>
                <Title>Ultimas Reservas</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Check-In</TableCell>
                            <TableCell>Check-Out</TableCell>
                            <TableCell>Reservado Por</TableCell>
                            <TableCell>Metodo de Pago</TableCell>
                            <TableCell align="right">Monto Total</TableCell>
                            <TableCell align="right">Ver mas</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row,index) => (
                            <TableRow key={index}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.shipTo}</TableCell>
                                <TableCell>{row.paymentMethod}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">
                                    <IconButton size="small">
                                        <VisibilityIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className={classes.seeMore}>
                    <Link color="primary" >
                        Ver Mas Reservas
                     </Link>
                </div>
            </Paper>
        </React.Fragment>
    );
}