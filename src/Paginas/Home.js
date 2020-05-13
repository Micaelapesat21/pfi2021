import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItems from '../Componentes/listItems';
import General from '../Componentes/General';
import BarraPrincipal from '../Componentes/BarraPrincipal'
import Perfil from '../Componentes/Perfil';
import Reservas from '../Componentes/Reservas';
import CheckIn from '../Componentes/CheckIn';
import CheckOut from '../Componentes/CheckOut';
import Servicios from '../Componentes/Servicios';
import Resenas from '../Componentes/Resenas';
import Pagos from '../Componentes/Pagos';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function PanelControl(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modoGeneral, setmodoGeneral] = React.useState(false);
    const [modoPerfil, setmodoPerfil] = React.useState(true);
    const [modoReservas, setmodoReservas] = React.useState(false);
    const [modoCheckIn, setmodoCheckIn] = React.useState(false);
    const [modoServicios, setmodoServicios] = React.useState(false);
    const [modoCheckOut, setmodoCheckOut] = React.useState(false);
    const [modoResenas, setmodoResenas] = React.useState(false);
    const [modoPagos, setmodoPagos] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const generalOpen = () => {
        setmodoGeneral(true);
        reservasClose();
        perfilClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        pagosClose();
    };
    const generalClose = () => {
        setmodoGeneral(false);
    };
    const perfilOpen = () => {
        setmodoPerfil(true);
        generalClose();
        reservasClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        pagosClose();
    };
    const perfilClose = () => {
        setmodoPerfil(false);
    };
    const reservasOpen = () => {
        setmodoReservas(true);
        generalClose();
        perfilClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        pagosClose();
    };
    const reservasClose = () => {
        setmodoReservas(false);
    };
    const checkInOpen = () => {
        setmodoCheckIn(true);
        generalClose();
        perfilClose();
        reservasClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        pagosClose();
    };
    const checkInClose = () => {
        setmodoCheckIn(false);
    };
    const serviciosOpen = () => {
        setmodoServicios(true);
        generalClose();
        perfilClose();
        reservasClose();
        checkInClose();
        checkOutClose();
        resenasClose();
        pagosClose();
    };
    const serviciosClose = () => {
        setmodoServicios(false);
    };
    const checkOutOpen = () => {
        setmodoCheckOut(true);
        generalClose();
        perfilClose();
        reservasClose();
        checkInClose();
        serviciosClose();
        resenasClose();
        pagosClose();
    };
    const checkOutClose = () => {
        setmodoCheckOut(false);
    };
    const resenasOpen = () => {
        setmodoResenas(true);
        generalClose();
        perfilClose();
        reservasClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        pagosClose();
    };
    const resenasClose = () => {
        setmodoResenas(false);
    };
    const pagosOpen = () => {
        setmodoPagos(true);
        generalClose();
        perfilClose();
        reservasClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
    };
    const pagosClose = () => {
        setmodoPagos(false);
    };

    if (modoPerfil) {
        return (
            <div className={classes.root}>
                <CssBaseline />
                <BarraPrincipal user={props.user} handleDrawerOpen={handleDrawerOpen} open={open} />
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{<ListItems
                        openGeneral={generalOpen}
                        perfilOpen={perfilOpen}
                        reservasOpen={reservasOpen}
                        checkInOpen={checkInOpen}
                        serviciosOpen={serviciosOpen}
                        checkOutOpen={checkOutOpen}
                        resenasOpen={resenasOpen}
                        pagosOpen={pagosOpen}
                        user={props.user}
                    />}</List>
                    
                    <List></List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />

                    <Container maxWidth="lg" className={classes.container}>
                        <Perfil user={props.user}/>
                    </Container>
                </main>
            </div>
        )
    } else {
        if (modoReservas) {
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <BarraPrincipal user={props.user} handleDrawerOpen={handleDrawerOpen} open={open} />
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                        }}
                        open={open}
                    >
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>{<ListItems
                            openGeneral={generalOpen}
                            perfilOpen={perfilOpen}
                            reservasOpen={reservasOpen}
                            checkInOpen={checkInOpen}
                            serviciosOpen={serviciosOpen}
                            checkOutOpen={checkOutOpen}
                            resenasOpen={resenasOpen}
                            pagosOpen={pagosOpen}
                            user={props.user}
                        />}</List>
                       
                        <List></List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />

                        <Container maxWidth="lg" className={classes.container}>
                            <Reservas/>
                        </Container>
                    </main>
                </div>
            )
        } else {
            if (modoCheckIn) {
                return (
                    <div className={classes.root}>
                        <CssBaseline />
                        <BarraPrincipal user={props.user} handleDrawerOpen={handleDrawerOpen} open={open} />
                        <Drawer
                            variant="permanent"
                            classes={{
                                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                            }}
                            open={open}
                        >
                            <div className={classes.toolbarIcon}>
                                <IconButton onClick={handleDrawerClose}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </div>
                            <Divider />
                            <List>{<ListItems
                                openGeneral={generalOpen}
                                perfilOpen={perfilOpen}
                                reservasOpen={reservasOpen}
                                checkInOpen={checkInOpen}
                                serviciosOpen={serviciosOpen}
                                checkOutOpen={checkOutOpen}
                                resenasOpen={resenasOpen}
                                pagosOpen={pagosOpen}
                                user={props.user}
                            />}</List>
                           
                            <List></List>
                        </Drawer>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer} />

                            <Container maxWidth="lg" className={classes.container}>
                                <CheckIn/>
                            </Container>
                        </main>
                    </div>
                )
            } else {
                if (modoServicios) {
                    return (
                        <div className={classes.root}>
                            <CssBaseline />
                            <BarraPrincipal user={props.user} handleDrawerOpen={handleDrawerOpen} open={open} />
                            <Drawer
                                variant="permanent"
                                classes={{
                                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                }}
                                open={open}
                            >
                                <div className={classes.toolbarIcon}>
                                    <IconButton onClick={handleDrawerClose}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </div>
                                <Divider />
                                <List>{<ListItems
                                    openGeneral={generalOpen}
                                    perfilOpen={perfilOpen}
                                    reservasOpen={reservasOpen}
                                    checkInOpen={checkInOpen}
                                    serviciosOpen={serviciosOpen}
                                    checkOutOpen={checkOutOpen}
                                    resenasOpen={resenasOpen}
                                    pagosOpen={pagosOpen}
                                    user={props.user}
                                />}</List>
                               
                                <List></List>
                            </Drawer>
                            <main className={classes.content}>
                                <div className={classes.appBarSpacer} />

                                <Container maxWidth="lg" className={classes.container}>
                                   <Servicios/>
                                </Container>
                            </main>
                        </div>
                    )
                } else {
                    if (modoCheckOut) {
                        return (
                            <div className={classes.root}>
                                <CssBaseline />
                                <BarraPrincipal user={props.user} handleDrawerOpen={handleDrawerOpen} open={open} />
                                <Drawer
                                    variant="permanent"
                                    classes={{
                                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                    }}
                                    open={open}
                                >
                                    <div className={classes.toolbarIcon}>
                                        <IconButton onClick={handleDrawerClose}>
                                            <ChevronLeftIcon />
                                        </IconButton>
                                    </div>
                                    <Divider />
                                    <List>{<ListItems
                                        openGeneral={generalOpen}
                                        perfilOpen={perfilOpen}
                                        reservasOpen={reservasOpen}
                                        checkInOpen={checkInOpen}
                                        serviciosOpen={serviciosOpen}
                                        checkOutOpen={checkOutOpen}
                                        resenasOpen={resenasOpen}
                                        pagosOpen={pagosOpen}
                                        user={props.user}
                                    />}</List>
                                   
                                    <List></List>
                                </Drawer>
                                <main className={classes.content}>
                                    <div className={classes.appBarSpacer} />

                                    <Container maxWidth="lg" className={classes.container}>
                                    <CheckOut/>
                                    </Container>
                                </main>
                            </div>
                        )
                    } else {
                        if (modoResenas) {
                            return (
                                <div className={classes.root}>
                                    <CssBaseline />
                                    <BarraPrincipal user={props.user} handleDrawerOpen={handleDrawerOpen} open={open} />
                                    <Drawer
                                        variant="permanent"
                                        classes={{
                                            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                        }}
                                        open={open}
                                    >
                                        <div className={classes.toolbarIcon}>
                                            <IconButton onClick={handleDrawerClose}>
                                                <ChevronLeftIcon />
                                            </IconButton>
                                        </div>
                                        <Divider />
                                        <List>{<ListItems
                                            openGeneral={generalOpen}
                                            perfilOpen={perfilOpen}
                                            reservasOpen={reservasOpen}
                                            checkInOpen={checkInOpen}
                                            serviciosOpen={serviciosOpen}
                                            checkOutOpen={checkOutOpen}
                                            resenasOpen={resenasOpen}
                                            pagosOpen={pagosOpen}
                                            user={props.user}
                                        />}</List>
                                       
                                        <List></List>
                                    </Drawer>
                                    <main className={classes.content}>
                                        <div className={classes.appBarSpacer} />

                                        <Container maxWidth="lg" className={classes.container}>
                                            <Resenas/>
                                        </Container>
                                    </main>
                                </div>
                            )
                        } else {
                            if (modoPagos) {
                                return (
                                    <div className={classes.root}>
                                        <CssBaseline />
                                        <BarraPrincipal user={props.user} handleDrawerOpen={handleDrawerOpen} open={open} />
                                        <Drawer
                                            variant="permanent"
                                            classes={{
                                                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                            }}
                                            open={open}
                                        >
                                            <div className={classes.toolbarIcon}>
                                                <IconButton onClick={handleDrawerClose}>
                                                    <ChevronLeftIcon />
                                                </IconButton>
                                            </div>
                                            <Divider />
                                            <List>{<ListItems
                                                openGeneral={generalOpen}
                                                perfilOpen={perfilOpen}
                                                reservasOpen={reservasOpen}
                                                checkInOpen={checkInOpen}
                                                serviciosOpen={serviciosOpen}
                                                checkOutOpen={checkOutOpen}
                                                resenasOpen={resenasOpen}
                                                pagosOpen={pagosOpen}
                                                user={props.user}
                                            />}</List>
                                            
                                            <List></List>
                                        </Drawer>
                                        <main className={classes.content}>
                                            <div className={classes.appBarSpacer} />

                                            <Container maxWidth="lg" className={classes.container}>
                                                <Pagos/>
                                            </Container>
                                        </main>
                                    </div>
                                )
                            } else {
                                if (modoGeneral) {
                                    return (
                                        <div className={classes.root}>
                                            <CssBaseline />
                                            <BarraPrincipal user={props.user} handleDrawerOpen={handleDrawerOpen} open={open} />
                                            <Drawer
                                                variant="permanent"
                                                classes={{
                                                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                                }}
                                                open={open}
                                            >
                                                <div className={classes.toolbarIcon}>
                                                    <IconButton onClick={handleDrawerClose}>
                                                        <ChevronLeftIcon />
                                                    </IconButton>
                                                </div>
                                                <Divider />
                                                <List>{<ListItems
                                                    openGeneral={generalOpen}
                                                    perfilOpen={perfilOpen}
                                                    reservasOpen={reservasOpen}
                                                    checkInOpen={checkInOpen}
                                                    serviciosOpen={serviciosOpen}
                                                    checkOutOpen={checkOutOpen}
                                                    resenasOpen={resenasOpen}
                                                    pagosOpen={pagosOpen}
                                                    user={props.user}
                                                />}</List>
                                               
                                                <List></List>
                                            </Drawer>
                                            <main className={classes.content}>
                                                <div className={classes.appBarSpacer} />

                                                <Container maxWidth="lg" className={classes.container}>
                                                    <General />
                                                </Container>
                                            </main>
                                        </div>
                                    )
                                }
                            }
                        }
                    }
                }
            }

        }
    }
}
