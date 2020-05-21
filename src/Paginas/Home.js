import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import ListItems from '../Componentes/listItems';
import General from '../Componentes/General';
import Perfil from '../Componentes/MiPerfil/Perfil';
import Reservas from '../Componentes/MiReserva/Reservas';
import CheckIn from '../Componentes/MiReserva/CheckIn';
import CheckOut from '../Componentes/MiReserva/CheckOut';
import Servicios from '../Componentes/MiReserva/Servicios';
import Resenas from '../Componentes/MiPerfil/Resenas';
import Pagos from '../Componentes/MiPerfil/Pagos';
import Deslizable from '../Componentes/Deslizable'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
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
}));

export default function PanelControl(props) {
    const classes = useStyles();
    const [modoGeneral, setmodoGeneral] = React.useState(true);
    const [modoPerfil, setmodoPerfil] = React.useState(false);
    const [modoReservas, setmodoReservas] = React.useState(false);
    const [modoCheckIn, setmodoCheckIn] = React.useState(false);
    const [modoServicios, setmodoServicios] = React.useState(false);
    const [modoCheckOut, setmodoCheckOut] = React.useState(false);
    const [modoResenas, setmodoResenas] = React.useState(false);
    const [modoPagos, setmodoPagos] = React.useState(false);

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


    const listDrawer = (
        <div>
            <div className={classes.toolbar} />
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
        </div>
    );

    if (modoPerfil) {
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Deslizable listDrawer={listDrawer} user={props.user} modo={"Mi Perfil"} />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />

                    <Container maxWidth="lg" className={classes.container}>
                        <Perfil user={props.user} />
                    </Container>
                </main>
            </div>
        )
    } else {
        if (modoReservas) {
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <Deslizable listDrawer={listDrawer} user={props.user}  modo={"Reserva"} />
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Container maxWidth="lg" className={classes.container}>
                            <Reservas />
                        </Container>
                    </main>
                </div>
            )
        } else {
            if (modoCheckIn) {
                return (
                    <div className={classes.root}>
                        <CssBaseline />
                        <Deslizable listDrawer={listDrawer} user={props.user}  modo={"Check-In"}/>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer} />
                            <Container maxWidth="lg" className={classes.container}>
                                <CheckIn />
                            </Container>
                        </main>
                    </div>
                )
            } else {
                if (modoServicios) {
                    return (
                        <div className={classes.root}>
                            <CssBaseline />
                            <Deslizable listDrawer={listDrawer} user={props.user}  modo={"Servicios"} />
                            <main className={classes.content}>
                                <div className={classes.appBarSpacer} />
                                <Container maxWidth="lg" className={classes.container}>
                                    <Servicios />
                                </Container>
                            </main>
                        </div>
                    )
                } else {
                    if (modoCheckOut) {
                        return (
                            <div className={classes.root}>
                                <CssBaseline />
                                <Deslizable listDrawer={listDrawer} user={props.user}  modo={"Check-Out"} />
                                <main className={classes.content}>
                                    <div className={classes.appBarSpacer} />
                                    <Container maxWidth="lg" className={classes.container}>
                                        <CheckOut />
                                    </Container>
                                </main>
                            </div>
                        )
                    } else {
                        if (modoResenas) {
                            return (
                                <div className={classes.root}>
                                    <Deslizable listDrawer={listDrawer} user={props.user}  modo={"Reseñas"}/>
                                    <main className={classes.content}>
                                        <div className={classes.appBarSpacer} />
                                        <Container maxWidth="lg" className={classes.container}>
                                            <Resenas />
                                        </Container>
                                    </main>
                                </div>
                            )
                        } else {
                            if (modoPagos) {
                                return (
                                    <div className={classes.root}>
                                        <CssBaseline />
                                        <Deslizable listDrawer={listDrawer} user={props.user} modo={"Pagos"} />
                                        <main className={classes.content}>
                                            <div className={classes.appBarSpacer} />
                                            <Container maxWidth="lg" className={classes.container}>
                                                <Pagos />
                                            </Container>
                                        </main>
                                    </div>
                                )
                            } else {
                                if (modoGeneral) {
                                    return (
                                        <div className={classes.root}>
                                            <CssBaseline />
                                            <Deslizable listDrawer={listDrawer} user={props.user}  modo={"Panel General"} />
                                            <main className={classes.content}>
                                                <div className={classes.appBarSpacer} />
                                                <Container maxWidth="lg" className={classes.container}>
                                                    <General user={props.user} perfilOpen={perfilOpen}  id={props.id} CheckIn={props.CheckIn} CheckOut={props.CheckOut} huespedes={props.huespedes} precio={props.precio}/>
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

