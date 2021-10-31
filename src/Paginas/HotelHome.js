import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItems from '../Componentes/Admin/listItems';
import General from '../Componentes/Admin/General';
import DatosHotel from '../Componentes/Admin/DatosHotel';
import ServiciosEscuela from '../Componentes/Admin/ServiciosEscuela';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthController from '../Componentes/login/AuthController'
import ReservasHotel from '../Componentes/Admin/ReservasHotel'
import { Grid } from '@material-ui/core';
//import Logo from '../Imagenes/escudoColegio.jpg'
import Logo from '../Imagenes/regiapp.png';
import Titulares from '../Componentes/Admin/Titulares/Titulares';
import Alumnos from '../Componentes/Admin/Alumnos/Alumnos';
import Asistencias from '../Componentes/Admin/Asistencias/Asistencias';
import Cursos from '../Componentes/Admin/Cursos/Cursos';
import Reportes from '../Componentes/Admin/Reportes/Reportes';
import Certificados from '../Componentes/Admin/Certificados y Retiros/Certificados';
import Mensajes from '../Componentes/Admin/Mensajes/Mensajes';
import Empleados from '../Componentes/Admin/Empleados/Empleados';
import Cobros from '../Componentes/Admin/Cobros/Cobros';
import Facturas from '../Componentes/Admin/Facturación/Facturas';
import { ControlCameraOutlined } from '@material-ui/icons';
 

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
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
        backgroundColor: "#fafafa"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        backgroundColor: "#fafafa"
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
    console.log('llegue hasta aca');
    const classes = useStyles();
    console.log('pasa 1');
    const [open, setOpen] = React.useState(true);
    console.log('pasa  2');
    const [modoGeneral, setmodoGeneral] = React.useState(false);
    console.log('pasa 3');
    const [modoDatos, setmodoDatos] = React.useState(false);
    const [modoServicios, setmodoServicios] = React.useState(false);
    const [modoReservas, setmodoReservas] = React.useState(false);
    const [modoCobranzas, setmodoCobranzas] = React.useState(false);
    const [modoSolicitudes, setmodoSolicitudes] = React.useState(true);
    const [modoResenas, setmodoResenas] = React.useState(false);
    const [modoFacturacion, setmodoFacturacion] = React.useState(false);
    const [modoAsistencias, setmodoAsistencias] = React.useState(false);
    const [modoCursos, setmodoCursos] = React.useState(false);
    const [modoReportes, setmodoReportes] = React.useState(false);
    const [modoCertificados, setmodoCertificados] = React.useState(false);
    const [modoMensajes, setmodoMensajes] = React.useState(false);
    
    console.log('pasa 3');
    const [titulares, setTitulares] = React.useState([]);

    console.log('trea los tituales');
    console.log(titulares);
    console.log("Asistencias del home: " + props.asistencias);

    const [turnos, setTurnos] = React.useState([]);
    console.log('pasa 5');
    const [alumnos, setAlumnos] = React.useState([]);
    console.log('pasa 6');
    const [facturas, setFacturas] = React.useState([]);
    console.log('pasa 7');
    const [asistencias, setAsistencias] = React.useState([]);
    console.log('pasa 8');
    console.log("trae las asistencias");
    console.log(asistencias);
    const [cursos, setCursos] = React.useState([]);
    const [cursosMensaje, setCursosMensaje] = React.useState([]);
    console.log('pasa 9');
    console.log('trea los cursos');
    console.log(cursos);
    const [reportes, setReportes] = React.useState([]);
    const [certificados, setCertificados] = React.useState([]);
    console.log('pasa 10');
    const [mensajes, setMensajes] = React.useState([]);
    console.log('pasa 11');

    const [pagos, setPagos] = React.useState([]);
    

    console.log(modoDatos); //false
    console.log(modoServicios); //false
    console.log(modoSolicitudes); //true

    const actualizarTitulares = (titulares) => {
        console.log('pasa titulares');
        console.log(titulares.state)
        setTitulares(titulares);
        console.log('pasa titulares fin');
    };

    const actualizarTurnos = (turnos) => {
        console.log('pasa turnos');
        setTurnos(turnos);
        console.log('pasa turnos fin');
    }
   
    const actualizarAlumnos = (alumnos) => {
        console.log('pasa alumnos');
        setAlumnos(alumnos);
        console.log('pasa alumnos fin');
    }

    const actualizarFacturas = (facturas) => {
        console.log('pasa facturas');
        setFacturas(facturas)
    }

    const actualizarAsistencias = (asistencias) => {
        console.log('pasa asistencias');
        setAsistencias(asistencias);
        console.log('pasa asistencia fin');
    }

    const actualizarCursos = (cursos) => {
        console.log('pasa cursos' + JSON.stringify(cursos));
        setCursos(cursos);
        console.log('pasa cursos fin');
    }
    
    const actualizarCursosMensaje = (cursosMensaje) => {
        console.log('pasa actualizarCursosMensaje');
        setCursosMensaje(cursosMensaje);
        console.log('pasa actualizarCursosMensaje fin');
    }

    const actualizarMensaje = (mensajes) => {
        console.log('pasa actualizarMensaje: ' + mensajes);
        setMensajes(mensajes);
        console.log('pasa actualizarMensaje fin');
    }
    const actualizarPagos = (pagos) => {
        console.log('pasa actualizarPagos: ' + pagos);
        setPagos(pagos);
        console.log('pasa actualizarPagos fin');
    }

    const actualizarReportes = (reportes) => {
        console.log('pasa reportes');
        setReportes(reportes);
        console.log('pasa reportes fin');
    }

     const actualizarCertificados = (reportes) => {
        console.log('pasa Certificados');
        setReportes(certificados);
        console.log('pasa Certificados fin');
    }

    
    const actualizarMensajes = (reportes) => {
        console.log('pasa Mensajes');
        setReportes(mensajes);
        console.log('pasa Mensajes fin');
    }


    const handleDrawerOpen = () => {
        console.log('pasa draw');
        setOpen(true);
    };
    

    const handleDrawerClose = () => {
        console.log('drawclose');
        setOpen(false);
    };
    const generalOpen = () => {
        console.log('quiere generalOpen');
        setmodoGeneral(true);
        datosClose();
        serviciosClose();
        reservasClose();
        resenasClose();
        solicitudesClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const generalClose = () => {
        console.log('generalClose');
        setmodoGeneral(false);
    };
    const datosOpen = () => {
        console.log('quiere abrir datos');
        setmodoDatos(true);
        generalClose();
        serviciosClose();
        reservasClose();
        resenasClose();
        solicitudesClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const datosClose = () => {
        console.log('quiere cerrar datos');
        setmodoDatos(false);
    };
    const asistenciasOpen = () => {
        console.log('quiere abrir asistencias');
        setmodoAsistencias(true);
        generalClose();
        datosClose();
        reservasClose();
        resenasClose();
        solicitudesClose();
        serviciosClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const asistenciasClose = () => {
        console.log('quiere cerrar asistencias');
        setmodoAsistencias(false);
    };

    const cursosOpen = () => {
        console.log('quiere abrir cursos');
        setmodoCursos(true);
        generalClose();
        datosClose();
        reservasClose();
        resenasClose();
        solicitudesClose();
        serviciosClose();
        asistenciasClose();
        reportesClose();
        certificadosClose();
        mensajesClose();

    };
    const cursosClose = () => {
        console.log('quiere cerrar cursos');
        setmodoCursos(false);
    };

    const reportesOpen = () => {
        console.log('quiere abrir reportes');
        setmodoReportes(true);
        generalClose();
        datosClose();
        reservasClose();
        resenasClose();
        solicitudesClose();
        serviciosClose();
        asistenciasClose();
        cursosClose();
        certificadosClose();
        mensajesClose();
    };

    const reportesClose = () => {
        console.log('quiere cerrar reportes');
        setmodoReportes(false);
    };

    const certificadosOpen = () => {
        console.log('quiere abrir Certificados');
        setmodoCertificados(true);
        generalClose();
        datosClose();
        reservasClose();
        resenasClose();
        solicitudesClose();
        serviciosClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        mensajesClose();
    };

    const certificadosClose = () => {
        console.log('quiere cerrar Certificados');
        setmodoCertificados(false);
    };

    const mensajesOpen = () => {
        console.log('quiere abrir Mensajes');
        setmodoMensajes(true);
        generalClose();
        datosClose();
        reservasClose();
        resenasClose();
        solicitudesClose();
        serviciosClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
    };

    const mensajesClose = () => {
        console.log('quiere cerrar Mensajes');
        setmodoMensajes(false);
    };


    const serviciosOpen = () => {
        console.log('Servicios Open');
        setmodoServicios(true);
        generalClose();
        datosClose();
        reservasClose();
        resenasClose();
        solicitudesClose();
        cobranzasClose();
        solicitudesClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const serviciosClose = () => {
        console.log('servicios close');
        setmodoServicios(false);
    };
    const reservasOpen = () => {
        setmodoReservas(true);
        generalClose();
        datosClose();
        serviciosClose();
        resenasClose();
        solicitudesClose();
        facturacionClose();
        cobranzasClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const reservasClose = () => {
        setmodoReservas(false);
    };
    const solicitudesOpen = () => {
        console.log('solicitudes open');
        setmodoSolicitudes(true);
        generalClose();
        datosClose();
        reservasClose();
        serviciosClose();
        resenasClose();
        facturacionClose();
        cobranzasClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const solicitudesClose = () => {
        console.log('solicitudes close');
        setmodoSolicitudes(false);
    };
    const resenasOpen = () => {
        setmodoResenas(true);
        generalClose();
        datosClose();
        reservasClose();
        serviciosClose();
        solicitudesClose();
        facturacionClose();
        cobranzasClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();

    };
    const resenasClose = () => {
        setmodoResenas(false);
    };

    const cobranzasOpen = () => {
        setmodoCobranzas(true);
        generalClose();
        datosClose();
        reservasClose();
        serviciosClose();
        solicitudesClose();
        resenasClose();
        facturacionClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const cobranzasClose = () => {
        setmodoCobranzas(false);
    };

    const facturacionOpen = () => {
        setmodoFacturacion(true);
        generalClose();
        datosClose();
        reservasClose();
        serviciosClose();
        solicitudesClose();
        resenasClose();
        cobranzasClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const facturacionClose = () => {
        setmodoFacturacion(false);
    };


    if (modoDatos)
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                          <MenuIcon />  
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Datos
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={0} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                            <ExitToAppIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item>
                                <img src={Logo} alt="logo" width={180} height={60} />
                            </Grid>
                        </Grid>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{<ListItems
                        generalOpen={generalOpen}
                        datosOpen={datosOpen}
                        serviciosOpen={serviciosOpen}
                        reservasOpen={reservasOpen}
                        solicitudesOpen={solicitudesOpen}
                        resenasOpen={resenasOpen}
                        facturacionOpen={facturacionOpen}
                        cobranzasOpen={cobranzasOpen}
                        asistenciasOpen={asistenciasOpen}
                        cursosOpen={cursosOpen}
                        reportesOpen={reportesOpen}
                        certificadosOpen= {certificadosOpen}
                        mensajesOpen= {mensajesOpen}
                    />}</List>
                    <Divider />
                    <List></List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <DatosHotel
                            user={props.user}
                        />
                    </Container>
                </main>
            </div>
        )
    else
        if (modoServicios)
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                        <Toolbar className={classes.toolbar}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                Servicios
                            </Typography>
                            <IconButton color="inherit">
                                <Badge badgeContent={0} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                <ExitToAppIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                        }}
                        open={open}
                    >
                        <div className={classes.toolbarIcon}>
                            <Grid container justify="center" alignItems="center">
                                <Grid item>
                                    <img src={Logo} alt="logo" width={180} height={60} />
                                </Grid>
                            </Grid>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>{<ListItems
                            generalOpen={generalOpen}
                            datosOpen={datosOpen}
                            serviciosOpen={serviciosOpen}
                            reservasOpen={reservasOpen}
                            solicitudesOpen={solicitudesOpen}
                            resenasOpen={resenasOpen}
                            facturacionOpen={facturacionOpen}
                            cobranzasOpen={cobranzasOpen}
                            asistenciasOpen={asistenciasOpen}
                            cursosOpen={cursosOpen}
                            reportesOpen={reportesOpen}
                            certificadosOpen= {certificadosOpen}
                            mensajesOpen= {mensajesOpen}
                        />}</List>
                        <Divider />
                        <List></List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />

                        <Container maxWidth="lg" className={classes.container}>
                            <ServiciosEscuela
                                user={props.user}
                            />
                        </Container>
                    </main>
                </div>
            )
        else
            if (modoReservas)
                return (
                    <div className={classes.root}>
                        <CssBaseline />
                        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                            <Toolbar className={classes.toolbar}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    Alumnos
                                </Typography>
                                <IconButton color="inherit">
                                    <Badge badgeContent={0} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                    <ExitToAppIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            variant="permanent"
                            classes={{
                                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                            }}
                            open={open}
                        >
                            <div className={classes.toolbarIcon}>
                                <Grid container justify="center" alignItems="center">
                                    <Grid item>
                                        <img src={Logo} alt="logo" width={180} height={60} />
                                    </Grid>
                                </Grid>
                                <IconButton onClick={handleDrawerClose}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </div>
                            <Divider />
                            <List>{<ListItems
                                generalOpen={generalOpen}
                                datosOpen={datosOpen}
                                serviciosOpen={serviciosOpen}
                                reservasOpen={reservasOpen}
                                solicitudesOpen={solicitudesOpen}
                                resenasOpen={resenasOpen}
                                cobranzasOpen={cobranzasOpen}
                                facturacionopen={facturacionOpen}
                                asistenciasOpen={asistenciasOpen}
                                cursosOpen={cursosOpen}
                                reportesOpen={reportesOpen}
                                certificadosOpen= {certificadosOpen}
                                mensajesOpen= {mensajesOpen}
                            />}</List>
                            <Divider />
                            <List></List>
                        </Drawer>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer} />

                            <Container maxWidth="lg" className={classes.container}>
                                <Alumnos 
                                    titulares = { titulares }
                                    turnos = { turnos }
                                    alumnos = { alumnos }
                                    cursos = { cursos }
                                    actualizarAlumnos = { actualizarAlumnos }
                                />
                            </Container>
                        </main>
                    </div>
                )
            else
                 if (modoAsistencias)
                 return (
                      <div className={classes.root}>
                            <CssBaseline />
                            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                               <Toolbar className={classes.toolbar}>
                                   <IconButton
                                       edge="start"
                                        color="inherit"
                                        aria-label="open drawer"
                                         onClick={handleDrawerOpen}
                                       className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                    >
                                    <MenuIcon />
                                  </IconButton>
                                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                        Asistencias
                                    </Typography>
                                    <IconButton color="inherit">
                                <Badge badgeContent={0} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                <ExitToAppIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                        }}
                        open={open}
                    >
                        <div className={classes.toolbarIcon}>
                            <Grid container justify="center" alignItems="center">
                                <Grid item>
                                    <img src={Logo} alt="logo" width={180} height={60} />
                                </Grid>
                            </Grid>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>{<ListItems
                            generalOpen={generalOpen}
                            datosOpen={datosOpen}
                            serviciosOpen={serviciosOpen}
                            reservasOpen={reservasOpen}
                            solicitudesOpen={solicitudesOpen}
                            resenasOpen={resenasOpen}
                            cobranzasOpen={cobranzasOpen}
                            asistenciasOpen={asistenciasOpen}
                            cursosOpen={cursosOpen}
                            reportesOpen={reportesOpen}
                            certificadosOpen= {certificadosOpen}
                            facturacionopen={facturacionOpen}
                            mensajesOpen= {mensajesOpen}
                        />}</List>
                        <Divider />
                        <List></List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />

                        <Container maxWidth="lg" className={classes.container}>
                            <Asistencias 
                                titulares = { titulares }
                                turnos = { turnos }
                                cursos = { cursos }
                                asistencias = { asistencias }
                                alumnos = { alumnos }
                                actualizarAsistencias = { actualizarAsistencias }
                            />
                        </Container>
                    </main>
                </div>
            )
           else
           console.log('entro en modo Curso');
                 if (modoCursos)
                  return (
                       <div className={classes.root}>
                         <CssBaseline />
                           <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                               <Toolbar className={classes.toolbar}>
                                   <IconButton
                                    edge="start"
                                       color="inherit"
                                       aria-label="open drawer"
                                       onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                   >
                                   <MenuIcon />
                                   </IconButton>
                                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                       Cursos
                                   </Typography>
                                   <IconButton color="inherit">
                                        <Badge badgeContent={0} color="secondary">
                                          <NotificationsIcon />
                                        </Badge>
                                   </IconButton>
                                    <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                   <ExitToAppIcon />
                                 </IconButton>
                               </Toolbar>
                          </AppBar>
                           <Drawer
                               variant="permanent"
                                 classes={{
                                  paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                              }}
                              open={open}
                           >
                              <div className={classes.toolbarIcon}>
                                  <Grid container justify="center" alignItems="center">
                                       <Grid item>
                                           <img src={Logo} alt="logo" width={180} height={60} />
                                       </Grid>
                                   </Grid>
                                  <IconButton onClick={handleDrawerClose}>
                                       <ChevronLeftIcon />
                                    </IconButton>
                              </div>
                              <Divider />
                               <List>{<ListItems
                                    generalOpen={generalOpen}
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    reservasOpen={reservasOpen}
                                    solicitudesOpen={solicitudesOpen}
                                    resenasOpen={resenasOpen}
                                    cobranzasOpen={cobranzasOpen}
                                    asistenciasOpen={asistenciasOpen}
                                    cursosOpen={cursosOpen}
                                    reportesOpen={reportesOpen}
                                    certificadosOpen= {certificadosOpen}
                                    facturacionopen={facturacionOpen}
                                    mensajesOpen= {mensajesOpen}
                               />}</List>
                       <Divider />
                       <List></List>
                   </Drawer>
                   <main className={classes.content}>
                       <div className={classes.appBarSpacer} />

                       <Container maxWidth="lg" className={classes.container}>
                           <Cursos 
                               titulares = { titulares }
                               turnos = { turnos }
                               alumnos = { alumnos }
                               cursos = { cursos }
                               asistencias = { asistencias }
                               actualizarCursos = { actualizarCursos }
                               actualizarCursosMensaje = { actualizarCursosMensaje }
                           />
                       </Container>
                   </main>
               </div>
           )
          else
           console.log('entro en modo Curso');
                 if (modoCursos)
                  return (
                       <div className={classes.root}>
                         <CssBaseline />
                           <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                               <Toolbar className={classes.toolbar}>
                                   <IconButton
                                    edge="start"
                                       color="inherit"
                                       aria-label="open drawer"
                                       onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                   >
                                   <MenuIcon />
                                   </IconButton>
                                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                       Cursos
                                   </Typography>
                                   <IconButton color="inherit">
                                        <Badge badgeContent={0} color="secondary">
                                          <NotificationsIcon />
                                        </Badge>
                                   </IconButton>
                                    <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                   <ExitToAppIcon />
                                 </IconButton>
                               </Toolbar>
                          </AppBar>
                           <Drawer
                               variant="permanent"
                                 classes={{
                                  paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                              }}
                              open={open}
                           >
                              <div className={classes.toolbarIcon}>
                                  <Grid container justify="center" alignItems="center">
                                       <Grid item>
                                           <img src={Logo} alt="logo" width={180} height={60} />
                                       </Grid>
                                   </Grid>
                                  <IconButton onClick={handleDrawerClose}>
                                       <ChevronLeftIcon />
                                    </IconButton>
                              </div>
                              <Divider />
                               <List>{<ListItems
                                    generalOpen={generalOpen}
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    reservasOpen={reservasOpen}
                                    solicitudesOpen={solicitudesOpen}
                                    resenasOpen={resenasOpen}
                                    cobranzasOpen={cobranzasOpen}
                                    asistenciasOpen={asistenciasOpen}
                                    cursosOpen={cursosOpen}
                                    reportesOpen={reportesOpen}
                                    certificadosOpen= {certificadosOpen}
                                    facturacionopen={facturacionOpen}
                                    mensajesOpen= {mensajesOpen}
                               />}</List>
                       <Divider />
                       <List></List>
                   </Drawer>
                   <main className={classes.content}>
                       <div className={classes.appBarSpacer} />

                       <Container maxWidth="lg" className={classes.container}>
                           <Cursos 
                               titulares = { titulares }
                               turnos = { turnos }
                               cursos = { cursos }
                               actualizarCursos = { actualizarCursos }
                               actualizarCursosMensaje = {actualizarCursosMensaje}
                           />
                       </Container>
                   </main>
               </div>
           )
           else
           console.log('entro en modo Reportes');
                 if (modoReportes)
                  return (
                       <div className={classes.root}>
                         <CssBaseline />
                           <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                               <Toolbar className={classes.toolbar}>
                                   <IconButton
                                    edge="start"
                                       color="inherit"
                                       aria-label="open drawer"
                                       onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                   >
                                   <MenuIcon />
                                   </IconButton>
                                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                       Reportes
                                   </Typography>
                                   <IconButton color="inherit">
                                        <Badge badgeContent={0} color="secondary">
                                          <NotificationsIcon />
                                        </Badge>
                                   </IconButton>
                                    <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                   <ExitToAppIcon />
                                 </IconButton>
                               </Toolbar>
                          </AppBar>
                           <Drawer
                               variant="permanent"
                                 classes={{
                                  paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                              }}
                              open={open}
                           >
                              <div className={classes.toolbarIcon}>
                                  <Grid container justify="center" alignItems="center">
                                       <Grid item>
                                           <img src={Logo} alt="logo" width={180} height={60} />
                                       </Grid>
                                   </Grid>
                                  <IconButton onClick={handleDrawerClose}>
                                       <ChevronLeftIcon />
                                    </IconButton>
                              </div>
                              <Divider />
                               <List>{<ListItems
                                    generalOpen={generalOpen}
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    reservasOpen={reservasOpen}
                                    solicitudesOpen={solicitudesOpen}
                                    resenasOpen={resenasOpen}
                                    cobranzasOpen={cobranzasOpen}
                                    asistenciasOpen={asistenciasOpen}
                                    cursosOpen={cursosOpen}
                                    reportesOpen={reportesOpen}
                                    certificadosOpen= {certificadosOpen}
                                    facturacionopen={facturacionOpen}
                                    mensajesOpen= {mensajesOpen}
                               />}</List>
                       <Divider />
                       <List></List>
                   </Drawer>
                       <main className={classes.content}>
                         <div className={classes.appBarSpacer} />

                        <Container maxWidth="lg" className={classes.container}>
                           <Reportes 
                               asistencias = { asistencias }
                              // titulares = {titulares}
                              // turnos = { turnos }
                              // cursos = { cursos }
                              // actualizarReportes = { actualizarReportes}
                           />
                        </Container>
                       </main>
                      </div>
                ) 
                else 
                console.log('entro en modo Certificados');
                 if (modoCertificados)
                  return (
                       <div className={classes.root}>
                         <CssBaseline />
                           <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                               <Toolbar className={classes.toolbar}>
                                   <IconButton
                                    edge="start"
                                       color="inherit"
                                       aria-label="open drawer"
                                       onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                   >
                                   <MenuIcon />
                                   </IconButton>
                                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    Certificados y Retiros
                                   </Typography>
                                   <IconButton color="inherit">
                                        <Badge badgeContent={0} color="secondary">
                                          <NotificationsIcon />
                                        </Badge>
                                   </IconButton>
                                    <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                   <ExitToAppIcon />
                                 </IconButton>
                               </Toolbar>
                          </AppBar>
                           <Drawer
                               variant="permanent"
                                 classes={{
                                  paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                              }}
                              open={open}
                           >
                              <div className={classes.toolbarIcon}>
                                  <Grid container justify="center" alignItems="center">
                                       <Grid item>
                                           <img src={Logo} alt="logo" width={180} height={60} />
                                       </Grid>
                                   </Grid>
                                  <IconButton onClick={handleDrawerClose}>
                                       <ChevronLeftIcon />
                                    </IconButton>
                              </div>
                              <Divider />
                               <List>{<ListItems
                                    generalOpen={generalOpen}
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    reservasOpen={reservasOpen}
                                    solicitudesOpen={solicitudesOpen}
                                    resenasOpen={resenasOpen}
                                    cobranzasOpen={cobranzasOpen}
                                    asistenciasOpen={asistenciasOpen}
                                    cursosOpen={cursosOpen}
                                    reportesOpen={reportesOpen}
                                    certificadosOpen={certificadosOpen}
                                    mensajesOpen= {mensajesOpen}
                                    facturacionopen={facturacionOpen}
                               />}</List>
                       <Divider />
                       <List></List>
                   </Drawer>
                       <main className={classes.content}>
                         <div className={classes.appBarSpacer} />

                        <Container maxWidth="lg" className={classes.container}>
                           <Certificados 
                              titulares = { titulares }
                              turnos = { turnos }
                              alumnos = { alumnos }
                              cursos = { cursos }
                              actualizarAlumnos = { actualizarAlumnos }
                           />
                        </Container>
                       </main>
                      </div>
                ) 
                else
                console.log('entro en modo Mensajes');
                 if (modoMensajes)
                  return (
                       <div className={classes.root}>
                         <CssBaseline />
                           <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                               <Toolbar className={classes.toolbar}>
                                   <IconButton
                                    edge="start"
                                       color="inherit"
                                       aria-label="open drawer"
                                       onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                   >
                                   <MenuIcon />
                                   </IconButton>
                                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    Mensajes
                                   </Typography>
                                   <IconButton color="inherit">
                                        <Badge badgeContent={0} color="secondary">
                                          <NotificationsIcon />
                                        </Badge>
                                   </IconButton>
                                    <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                   <ExitToAppIcon />
                                 </IconButton>
                               </Toolbar>
                          </AppBar>
                           <Drawer
                               variant="permanent"
                                 classes={{
                                  paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                              }}
                              open={open}
                           >
                              <div className={classes.toolbarIcon}>
                                  <Grid container justify="center" alignItems="center">
                                       <Grid item>
                                           <img src={Logo} alt="logo" width={180} height={60} />
                                       </Grid>
                                   </Grid>
                                  <IconButton onClick={handleDrawerClose}>
                                       <ChevronLeftIcon />
                                    </IconButton>
                              </div>
                              <Divider />
                               <List>{<ListItems
                                    generalOpen={generalOpen}
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    reservasOpen={reservasOpen}
                                    solicitudesOpen={solicitudesOpen}
                                    resenasOpen={resenasOpen}
                                    cobranzasOpen={cobranzasOpen}
                                    asistenciasOpen={asistenciasOpen}
                                    cursosOpen={cursosOpen}
                                    reportesOpen={reportesOpen}
                                    certificadosOpen={certificadosOpen}
                                    mensajesOpen={mensajesOpen}
                                    facturacionopen={facturacionOpen}
                               />}</List>
                       <Divider />
                       <List></List>
                   </Drawer>
                       <main className={classes.content}>
                         <div className={classes.appBarSpacer} />

                        <Container maxWidth="lg" className={classes.container}>
                           <Mensajes 
                              titulares = { titulares }
                              turnos = { turnos }
                              alumnos = { alumnos }
                              cursos = { cursos }
                              mensajes = {mensajes}
                              actualizarAlumnos = { actualizarAlumnos }
                              actualizarMensaje = { actualizarMensaje }
                           />
                        </Container>
                       </main>
                      </div>
                ) 
                else
                
                console.log('entro en modoooo');
                   if (modoSolicitudes)
                      return (
                        <div className={classes.root}>
                            <CssBaseline />
                            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                                <Toolbar className={classes.toolbar}>
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={handleDrawerOpen}
                                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                        Titulares
                                        </Typography>
                                    <IconButton color="inherit">
                                        <Badge badgeContent={0} color="secondary">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                        <ExitToAppIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                            <Drawer
                                variant="permanent"
                                classes={{
                                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                }}
                                open={open}
                            >
                                <div className={classes.toolbarIcon}>
                                    <Grid container justify="center" alignItems="center">
                                        <Grid item>
                                            <img src={Logo} alt="logo" width={180} height={60} />
                                        </Grid>
                                    </Grid>
                                    <IconButton onClick={handleDrawerClose}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </div>
                                <Divider />
                                <List>{<ListItems
                                    generalOpen={generalOpen}
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    reservasOpen={reservasOpen}
                                    solicitudesOpen={solicitudesOpen}
                                    resenasOpen={resenasOpen}
                                    cobranzasOpen={cobranzasOpen}
                                    facturacionOpen={facturacionOpen}
                                    asistenciasOpen={asistenciasOpen}
                                    cursosOpen={cursosOpen}
                                    reportesOpen={reportesOpen}
                                    certificadosOpen= {certificadosOpen}
                                    mensajesOpen= {mensajesOpen}
                                />}</List>
                                <Divider />
                                <List></List>
                            </Drawer>
                            <main className={classes.content}>
                                <div className={classes.appBarSpacer} />
                                <Container maxWidth="lg" className={classes.container}>
                                    <Titulares
                                        user={props.user}
                                        actualizarTitulares = { actualizarTitulares }
                                        actualizarTurnos = { actualizarTurnos }
                                        actualizarAlumnos = { actualizarAlumnos }
                                        actualizarCursos = { actualizarCursos }
                                        actualizarCursosMensaje = {actualizarCursosMensaje}
                                        actualizarAsistencias = { actualizarAsistencias }
                                    />
                                </Container>
                            </main>
                        </div>
                    )
                else
                    if (modoResenas)
                        return (
                            <div className={classes.root}>
                                <CssBaseline />
                                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                                    <Toolbar className={classes.toolbar}>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="open drawer"
                                            onClick={handleDrawerOpen}
                                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                            Empleados
                                            </Typography>
                                        <IconButton color="inherit">
                                            <Badge badgeContent={0} color="secondary">
                                                <NotificationsIcon />
                                            </Badge>
                                        </IconButton>
                                        <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                            <ExitToAppIcon />
                                        </IconButton>
                                    </Toolbar>
                                </AppBar>
                                <Drawer
                                    variant="permanent"
                                    classes={{
                                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                    }}
                                    open={open}
                                >
                                    <div className={classes.toolbarIcon}>
                                        <Grid container justify="center" alignItems="center">
                                            <Grid item>
                                                <img src={Logo} alt="logo" width={180} height={60} />
                                            </Grid>
                                        </Grid>
                                        <IconButton onClick={handleDrawerClose}>
                                            <ChevronLeftIcon />
                                        </IconButton>
                                    </div>
                                    <Divider />
                                    <List>{<ListItems
                                        generalOpen={generalOpen}
                                        datosOpen={datosOpen}
                                        serviciosOpen={serviciosOpen}
                                        reservasOpen={reservasOpen}
                                        solicitudesOpen={solicitudesOpen}
                                        resenasOpen={resenasOpen}
                                        cobranzasOpen={cobranzasOpen}
                                        facturacionOpen={facturacionOpen}
                                        asistenciasOpen={asistenciasOpen}
                                        cursosOpen={cursosOpen}
                                        reportesOpen={reportesOpen}
                                        certificadosOpen= {certificadosOpen}
                                        mensajesOpen= {mensajesOpen}
                                    />}</List>
                                    <Divider />
                                    <List></List>
                                </Drawer>
                                <main className={classes.content}>
                                    <div className={classes.appBarSpacer} />
                                    <Container maxWidth="lg" className={classes.container}>
                                        <Empleados
                                            user={props.user}
                                        />
                                    </Container>
                                </main>
                            </div>
                        )
                    else
                        if (modoGeneral)
                            return (
                                <div className={classes.root}>
                                    <CssBaseline />
                                    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                                        <Toolbar className={classes.toolbar}>
                                            <IconButton
                                                edge="start"
                                                color="inherit"
                                                aria-label="open drawer"
                                                onClick={handleDrawerOpen}
                                                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                            >
                                                <MenuIcon />
                                            </IconButton>
                                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                                Panel De Control
                                    </Typography>
                                            <IconButton color="inherit">
                                                <Badge badgeContent={0} color="secondary">
                                                    <NotificationsIcon />
                                                </Badge>
                                            </IconButton>
                                            <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                                <ExitToAppIcon />
                                            </IconButton>
                                        </Toolbar>
                                    </AppBar>
                                    <Drawer
                                        variant="permanent"
                                        classes={{
                                            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                        }}
                                        open={open}
                                    >
                                        <div className={classes.toolbarIcon}>
                                            <Grid container justify="center" alignItems="center">
                                                <Grid item>
                                                    <img src={Logo} alt="logo" width={180} height={60} />
                                                </Grid>
                                            </Grid>
                                            <IconButton onClick={handleDrawerClose}>
                                                <ChevronLeftIcon />
                                            </IconButton>
                                        </div>
                                        <Divider />
                                        <List>{<ListItems
                                            generalOpen={generalOpen}
                                            datosOpen={datosOpen}
                                            serviciosOpen={serviciosOpen}
                                            reservasOpen={reservasOpen}
                                            solicitudesOpen={solicitudesOpen}
                                            resenasOpen={resenasOpen}
                                            cobranzasOpen={cobranzasOpen}
                                            facturacionOpen={facturacionOpen}
                                            asistenciasOpen={asistenciasOpen}
                                            cursosOpen={cursosOpen}
                                            reportesOpen={reportesOpen}
                                            certificadosOpen= {certificadosOpen}
                                            mensajesOpen= {mensajesOpen}
                                        />}</List>
                                        <Divider />
                                        <List></List>
                                    </Drawer>
                                    <main className={classes.content}>
                                        <div className={classes.appBarSpacer} />

                                        <Container maxWidth="lg" className={classes.container}>
                                            <General
                                                reservasOpen={reservasOpen}
                                                serviciosOpen={serviciosOpen}
                                                user={props.user}
                                            />
                                        </Container>
                                    </main>
                                </div>
                            )
                        else
                            if (modoCobranzas)
                                return (
                                    <div className={classes.root}>
                                        <CssBaseline />
                                        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                                            <Toolbar className={classes.toolbar}>
                                                <IconButton
                                                    edge="start"
                                                    color="inherit"
                                                    aria-label="open drawer"
                                                    onClick={handleDrawerOpen}
                                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                                >
                                                    <MenuIcon />
                                                </IconButton>
                                                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                                    Cobranzas
                                                    </Typography>
                                                <IconButton color="inherit">
                                                    <Badge badgeContent={0} color="secondary">
                                                        <NotificationsIcon />
                                                    </Badge>
                                                </IconButton>
                                                <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                                    <ExitToAppIcon />
                                                </IconButton>
                                            </Toolbar>
                                        </AppBar>
                                        <Drawer
                                            variant="permanent"
                                            classes={{
                                                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                            }}
                                            open={open}
                                        >
                                            <div className={classes.toolbarIcon}>
                                                <Grid container justify="center" alignItems="center">
                                                    <Grid item>
                                                        <img src={Logo} alt="logo" width={180} height={60} />
                                                    </Grid>
                                                </Grid>
                                                <IconButton onClick={handleDrawerClose}>
                                                    <ChevronLeftIcon />
                                                </IconButton>
                                            </div>
                                            <Divider />
                                            <List>{<ListItems
                                                generalOpen={generalOpen}
                                                datosOpen={datosOpen}
                                                serviciosOpen={serviciosOpen}
                                                reservasOpen={reservasOpen}
                                                solicitudesOpen={solicitudesOpen}
                                                resenasOpen={resenasOpen}
                                                cobranzasOpen={cobranzasOpen}
                                                facturacionOpen={facturacionOpen}
                                                asistenciasOpen={asistenciasOpen}
                                                cursosOpen={cursosOpen}
                                                reportesOpen={reportesOpen}
                                                certificadosOpen= {certificadosOpen}
                                                mensajesOpen= {mensajesOpen}
                                            />}</List>
                                            <Divider />
                                            <List></List>
                                        </Drawer>
                                        <main className={classes.content}>
                                            <div className={classes.appBarSpacer} />

                                            <Container maxWidth="lg" className={classes.container}>
                                            
                                            <Cobros facturas = { facturas } titulares = { titulares } turnos = { turnos } alumnos = { alumnos }  cursos = { cursos } pagos = {pagos} actualizarPagos = {actualizarPagos}/>
                            
                                            </Container>
                                        </main>
                                    </div>
                                )
                                else
                                    if(modoFacturacion)
                                                return(
                                                    <div className={classes.root}>
                                                    <CssBaseline />
                                                    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                                                        <Toolbar className={classes.toolbar}>
                                                            <IconButton
                                                                edge="start"
                                                                color="inherit"
                                                                aria-label="open drawer"
                                                                onClick={handleDrawerOpen}
                                                                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                                            >
                                                                <MenuIcon />
                                                            </IconButton>
                                                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                                                Facturación
                                                                </Typography>
                                                            <IconButton color="inherit">
                                                                <Badge badgeContent={0} color="secondary">
                                                                    <NotificationsIcon />
                                                                </Badge>
                                                            </IconButton>
                                                            <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                                                <ExitToAppIcon />
                                                            </IconButton>
                                                        </Toolbar>
                                                    </AppBar>
                                                    <Drawer
                                                        variant="permanent"
                                                        classes={{
                                                            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                                        }}
                                                        open={open}
                                                    >
                                                        <div className={classes.toolbarIcon}>
                                                            <Grid container justify="center" alignItems="center">
                                                                <Grid item>
                                                                    <img src={Logo} alt="logo" width={180} height={60} />
                                                                </Grid>
                                                            </Grid>
                                                            <IconButton onClick={handleDrawerClose}>
                                                                <ChevronLeftIcon />
                                                            </IconButton>
                                                        </div>
                                                        <Divider />
                                                        <List>{<ListItems
                                                            generalOpen={generalOpen}
                                                            datosOpen={datosOpen}
                                                            serviciosOpen={serviciosOpen}
                                                            reservasOpen={reservasOpen}
                                                            solicitudesOpen={solicitudesOpen}
                                                            resenasOpen={resenasOpen}
                                                            cobranzasOpen={cobranzasOpen}
                                                            facturacionOpen={facturacionOpen}
                                                            asistenciasOpen={asistenciasOpen}
                                                            cursosOpen={cursosOpen}
                                                            reportesOpen={reportesOpen}
                                                            certificadosOpen= {certificadosOpen}
                                                            mensajesOpen= {mensajesOpen}
                                                        />}</List>
                                                        <Divider />
                                                        <List></List>
                                                    </Drawer>
                                                    <main className={classes.content}>
                                                        <div className={classes.appBarSpacer} />
            
                                                        <Container maxWidth="lg" className={classes.container}>
                                                            <Facturas facturas = { facturas } titulares = { titulares } turnos = { turnos } alumnos = { alumnos }  cursos = { cursos }/>
                                                        </Container>
                                                    </main>
                                                </div>
                                                )


}
