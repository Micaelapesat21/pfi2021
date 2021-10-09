import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid, Button, TextField } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
import Constantes from './Constantes'; 
import ExportExcel from 'react-export-excel';
import Box from '@material-ui/core/Box';
import {Bar} from 'react-chartjs-2';

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

const data = {
    labels: ['10/09', '11/09', '12/09', '13/09', '14/09', '15/09'],
    datasets: [
        {
            label: '# Presentes',
            data:  [100, 50, 90, 120, 75, 52],
            backgroundColor: 'rgb(75, 192, 192)',
        },

      {
        label: '# Ausentes',
        data: [100, 50, 90, 120, 75, 52],
        backgroundColor: 'rgb(255, 99, 132)',
      }
    
    ]
  };

  const opciones = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

const styles = theme => ({

})

function formatoFecha(fecha,formato) {
   
    let dia = fecha.getDay();
    let mes = fecha.getMonth() + 1;

    if (fecha.getMonth() + 1 < 10 ) {
        mes = fecha.getMonth() + 1;
        mes = "0" + mes.toString();

        console.log("MES: " + mes);
    };
    
    if (fecha.getDay() < 10 ) {
        dia = fecha.getDay();
        dia = "0" + dia.toString();
        console.log("DIA: " + dia);
    };

    const map = {
        dd: dia,
        mm: mes,
        //yy: fecha.getFullYear().toString().slice(-2),
        yyyy: fecha.getFullYear()
    };
    return formato.replace(/dd|mm|yyyy/gi, matched => map[matched])
};

class Reportes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asistencias: [],
            reporte: [],
            // dateEnd: String,
            fechaDesde: new Date("2021", "08", "26"),
            fechaHasta: new Date("2021", "08", "26"),
            fechaD: "", 
            fechaH: "",
            fechasReporte:[],
            presentes: [],
            ausentes: [],
            loading: false
            }
            this.onChangeDesde = this.onChangeDesde.bind(this);
            this.onChangeHasta = this.onChangeHasta.bind(this);
           
    }

    componentDidMount() {
        this.setState({ asistencias: this.props.asistencias });
    }

    componentDidUpdate() {
        console.log("Componente actualizado");
        console.log(this.state.presentes);
        console.log(this.state.ausentes);
        console.log(this.state.fechasReporte);
        console.log(this.state.fechaD);
        console.log(this.state.fechaH);
    }

    reporteCreado = (asistencia) => {
        var reportesActualizado = this.props.asistencias;
        reportesActualizado.push(asistencia);
        this.setState({ asistencias: reportesActualizado });
        this.props.actualizarAsistencia(reportesActualizado);
    }
    onChangeDesde = (event) => {
        console.log(this.state.fechaDesde);
        const dateFormateada = formatoFecha(event, 'yyyy-mm-dd');
        console.log("Date formateada: " + dateFormateada);
        //this.setState({this.fechaD: dateFormateada });
        //this.state.fechaD = dateFormateada;
        this.setState({fechaD: dateFormateada})
        console.log("fecha desde: " + this.state.fechaD);
    }
    onChangeHasta = (event) => {
        const dateFormateada = formatoFecha(event, 'yyyy-mm-dd');
        console.log("Date formateada: " + dateFormateada);
        //this.state.fechaH = dateFormateada; 
        this.setState({fechaH: dateFormateada})
        console.log("fecha desde: " + this.state.fechaH);

    }

    addButtonPressed = async () => {

        const fechadesde= this.state.fechaD;
        const fechahasta= this.state.fechaH;
        console.log("FECHA DESDE:" + fechadesde);
        console.log("Exportar Reporte");
      
       const result = await fetch(`${Constantes.RUTA_API}/download_employee_report.php?start=${fechadesde}&end=${fechahasta}`);
       //const result = await fetch("http://localhost/TEST/asistencia-php-rfid-main/download_employee_report.php?start=2021-09-01&end=2021-09-29");
       const res = await result.json();
       console.log("reporte: " + res);
       this.reporte = res;
       console.log(" this reporte: " + this.reporte );

       const presentesResult = await fetch(`${Constantes.RUTA_API}/get_Alumnos_Presentes_Count.php?start=${fechadesde}&end=${fechahasta}`);
       //const presentesResult = await fetch("http://localhost/TEST/asistencia-php-rfid-main/get_Alumnos_Presentes_Count.php?start=2021-09-15&end=2021-09-23");
       console.log("PRESENTES RESPONSE: " + presentesResult);
       const presentes = await presentesResult.json();
       console.log("PRESENTES: " + presentes);
       this.presentes = presentes;

       const ausentesResult = await fetch(`${Constantes.RUTA_API}/get_Alumnos_Ausentes_Count.php?start=${fechadesde}&end=${fechahasta}`);
       const ausentes = await ausentesResult.json();
       console.log("AUSENTES: " + ausentes);
       this.ausentes = ausentes;
      
       
       const fechasResult = await fetch(`${Constantes.RUTA_API}/get_Fechas_Reporte.php?start=${fechadesde}&end=${fechahasta}`);
       const fechasreporte = await fechasResult.json();
       console.log("FECHAS: " + fechasreporte);
       this.fechasReporte = fechasreporte;
       

       this.setState({presentes: this.presentes})
       this.setState({reporte: this.reporte})
       this.setState({ausentes: this.ausentes})
       this.setState({fechasReporte: this.fechasReporte})
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
                <div>
                    <DatePickerInput
                        onChange={this.onChangeDesde}
                        value={this.state.fechaDesde}
                        className='my-custom-datepicker-component'
                    />
                    <br/>
                    <DatePickerInput
                        onChange={this.onChangeHasta}
                        value={this.state.fechaHasta}
                        className='my-custom-datepicker-component'
                    />
                </div>
                    <br/>
                    <div>
                        <Button variant="contained" color="secondary"  onClick = {this.addButtonPressed}>
                                Filtrar
                        </Button>
                    
                        <br/>
                        <br/>

                        <ExcelFile element = { <Button variant="contained" color="secondary">
                                                                Exportar Reporte
                                                        </Button>} 
                                    filename = "Reporte Asistencia" >
                                <ExcelSheet data ={this.reporte} name = "Asistencias">
                                    <ExcelColumn label = "Alumno" value = "name" />
                                    <ExcelColumn label = "Dias Presentes" value = "presence_count" />
                                    <ExcelColumn label = "Dias Ausentes" value = "absence_count" />
                                </ExcelSheet>
                        </ExcelFile>
                        <div>
                                <Bar data= {{
                                        labels: this.state.fechasReporte,
                                        datasets: [
                                            {
                                                label: '# Presentes',
                                                data: this.state.presentes,
                                                backgroundColor: 'rgb(75, 192, 192)',
                                            },

                                        {
                                            label: '# Ausentes',
                                            data: this.state.ausentes,
                                            backgroundColor: 'rgb(255, 99, 132)',
                                        } ]
                                    }} options={opciones}/>
                        </div>
                    </div>
            </Grid>
        </Grid>
        );
    }
};

Reportes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reportes);

