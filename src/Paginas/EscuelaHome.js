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
import DatosEscuela from '../Componentes/Admin/DatosEscuela';
import ServiciosEscuela from '../Componentes/Admin/ServiciosEscuela';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthController from '../Componentes/login/AuthController'
import { Grid } from '@material-ui/core';
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
    const classes = useStyles();  
    const [open, setOpen] = React.useState(true);
    const [modoDatos, setmodoDatos] = React.useState(false);
    const [modoServicios, setmodoServicios] = React.useState(false);
    const [modoAlumnos, setmodoAlumnos] = React.useState(false);
    const [modoCobranzas, setmodoCobranzas] = React.useState(false);
    const [modoTitulares, setmodoTitulares] = React.useState(true);
    const [modoEmpleados, setmodoEmpleados] = React.useState(false);
    const [modoFacturacion, setmodoFacturacion] = React.useState(false);
    const [modoAsistencias, setmodoAsistencias] = React.useState(false);
    const [modoCursos, setmodoCursos] = React.useState(false);
    const [modoReportes, setmodoReportes] = React.useState(false);
    const [modoCertificados, setmodoCertificados] = React.useState(false);
    const [modoMensajes, setmodoMensajes] = React.useState(false);
    const [titulares, setTitulares] = React.useState([]);
    const [turnos, setTurnos] = React.useState([]);
    const [alumnos, setAlumnos] = React.useState([]);
    const [facturas, setFacturas] = React.useState([]);
    const [asistencias, setAsistencias] = React.useState([]);
    const [cursos, setCursos] = React.useState([]);
    const [cursosMensaje, setCursosMensaje] = React.useState([]);    
    const [reportes, setReportes] = React.useState([]);
    const [certificados, setCertificados] = React.useState([]);
    const [mensajes, setMensajes] = React.useState([]);
    const [pagos, setPagos] = React.useState([]);
    


    const actualizarTitulares = (titulares) => {
        setTitulares(titulares);
    };

    const actualizarTurnos = (turnos) => {
        setTurnos(turnos);  
    }
   
    const actualizarAlumnos = (alumnos) => {  
        setAlumnos(alumnos);
    }

    const actualizarFacturas = (facturas) => {     
        setFacturas(facturas)
    }

    const actualizarAsistencias = (asistencias) => {
        setAsistencias(asistencias);
       
    }

    const actualizarCursos = (cursos) => {
        setCursos(cursos);
      
    }
    
    const actualizarCursosMensaje = (cursosMensaje) => {
        setCursosMensaje(cursosMensaje);
      
    }

    const actualizarMensaje = (mensajes) => {     
        setMensajes(mensajes);
     
    }
    const actualizarPagos = (pagos) => {
         setPagos(pagos);
     
    }

    const actualizarReportes = (reportes) => {     
        setReportes(reportes);
       
    }

     const actualizarCertificados = (reportes) => {  
        setReportes(certificados);
   
    }

    
    const actualizarMensajes = (reportes) => {    
          setReportes(mensajes);
   
    }


    const handleDrawerOpen = () => {
        setOpen(true);
    };
    

    const handleDrawerClose = () => {
        setOpen(false);
    };
     
    const datosOpen = () => {
        setmodoDatos(true);
        
        serviciosClose();
        alumnosClose();
        empleadosClose();
        titularesClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const datosClose = () => {
        setmodoDatos(false);
    };
    const asistenciasOpen = () => {

        setmodoAsistencias(true);
       
        datosClose();
        alumnosClose();
        empleadosClose();
        titularesClose();
        serviciosClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const asistenciasClose = () => {
       
        setmodoAsistencias(false);
    };

    const cursosOpen = () => {
   
        setmodoCursos(true);
        
        datosClose();
        alumnosClose();
        empleadosClose();
        titularesClose();
        serviciosClose();
        asistenciasClose();
        reportesClose();
        certificadosClose();
        mensajesClose();

    };
    const cursosClose = () => {
        setmodoCursos(false);
    };

    const reportesOpen = () => {
   
        setmodoReportes(true);
   
        datosClose();
        alumnosClose();
        empleadosClose();
        titularesClose();
        serviciosClose();
        asistenciasClose();
        cursosClose();
        certificadosClose();
        mensajesClose();
    };

    const reportesClose = () => {
       
        setmodoReportes(false);
    };

    const certificadosOpen = () => {
        setmodoCertificados(true);
      
        datosClose();
        alumnosClose();
        empleadosClose();
        titularesClose();
        serviciosClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        mensajesClose();
    };

    const certificadosClose = () => {
        setmodoCertificados(false);
    };

    const mensajesOpen = () => {
        setmodoMensajes(true);
       
        datosClose();
        alumnosClose();
        empleadosClose();
        titularesClose();
        serviciosClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
    };

    const mensajesClose = () => {
        setmodoMensajes(false);
    };


    const serviciosOpen = () => {
        setmodoServicios(true);
     
        datosClose();
        alumnosClose();
        empleadosClose();
        titularesClose();
        cobranzasClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };

    const serviciosClose = () => {
        setmodoServicios(false);
    };

    const alumnosOpen = () => {
        setmodoAlumnos(true);
       
        datosClose();
        serviciosClose();
        empleadosClose();
        titularesClose();
        facturacionClose();
        cobranzasClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const alumnosClose = () => {
        setmodoAlumnos(false);
    };
    const titularesOpen = () => {
        setmodoTitulares(true);
      
        datosClose();
        alumnosClose();
        serviciosClose();
        empleadosClose();
        facturacionClose();
        cobranzasClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();
    };
    const titularesClose = () => {
        setmodoTitulares(false);
    };
    const empleadosOpen = () => {
        setmodoEmpleados(true);
    
        datosClose();
        alumnosClose();
        serviciosClose();
        titularesClose();
        facturacionClose();
        cobranzasClose();
        asistenciasClose();
        cursosClose();
        reportesClose();
        certificadosClose();
        mensajesClose();

    };
    const empleadosClose = () => {
        setmodoEmpleados(false);
    };

    const cobranzasOpen = () => {
        setmodoCobranzas(true);
      
        datosClose();
        alumnosClose();
        serviciosClose();
        titularesClose();
        empleadosClose();
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
 
        datosClose();
        alumnosClose();
        serviciosClose();
        titularesClose();
        empleadosClose();
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
            
                        datosOpen={datosOpen}
                        serviciosOpen={serviciosOpen}
                        alumnosOpen={alumnosOpen}
                        titularesOpen={titularesOpen}
                        empleadosOpen={empleadosOpen}
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
                        <DatosEscuela
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
                         
                            datosOpen={datosOpen}
                            serviciosOpen={serviciosOpen}
                            alumnosOpen={alumnosOpen}
                            titularesOpen={titularesOpen}
                            empleadosOpen={empleadosOpen}
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
            if (modoAlumnos)
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
                        
                                datosOpen={datosOpen}
                                serviciosOpen={serviciosOpen}
                                alumnosOpen={alumnosOpen}
                                titularesOpen={titularesOpen}
                                empleadosOpen={empleadosOpen}
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
                       
                            datosOpen={datosOpen}
                            serviciosOpen={serviciosOpen}
                            alumnosOpen={alumnosOpen}
                            titularesOpen={titularesOpen}
                            empleadosOpen={empleadosOpen}
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
                               
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    alumnosOpen={alumnosOpen}
                                    titularesOpen={titularesOpen}
                                    empleadosOpen={empleadosOpen}
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
                               
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    alumnosOpen={alumnosOpen}
                                    titularesOpen={titularesOpen}
                                    empleadosOpen={empleadosOpen}
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
                                    
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    alumnosOpen={alumnosOpen}
                                    titularesOpen={titularesOpen}
                                    empleadosOpen={empleadosOpen}
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
                                  
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    alumnosOpen={alumnosOpen}
                                    titularesOpen={titularesOpen}
                                    empleadosOpen={empleadosOpen}
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
                            
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    alumnosOpen={alumnosOpen}
                                    titularesOpen={titularesOpen}
                                    empleadosOpen={empleadosOpen}
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
                   if (modoTitulares)
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
                                  
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    alumnosOpen={alumnosOpen}
                                    titularesOpen={titularesOpen}
                                    empleadosOpen={empleadosOpen}
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
                    if (modoEmpleados)
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
                                      
                                        datosOpen={datosOpen}
                                        serviciosOpen={serviciosOpen}
                                        alumnosOpen={alumnosOpen}
                                        titularesOpen={titularesOpen}
                                        empleadosOpen={empleadosOpen}
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
                                            
                                                datosOpen={datosOpen}
                                                serviciosOpen={serviciosOpen}
                                                alumnosOpen={alumnosOpen}
                                                titularesOpen={titularesOpen}
                                                empleadosOpen={empleadosOpen}
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
                                                        
                                                            datosOpen={datosOpen}
                                                            serviciosOpen={serviciosOpen}
                                                            alumnosOpen={alumnosOpen}
                                                            titularesOpen={titularesOpen}
                                                            empleadosOpen={empleadosOpen}
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
