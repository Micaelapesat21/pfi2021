import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid, Button, TextField, Typography} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import 'react-datepicker/dist/react-datepicker.css';
import {DatePickerInput } from 'rc-datepicker';
import DatePicker from 'react-datepicker';
import 'rc-datepicker/lib/style.css';
//import Constantes from './Constantes'; 
import Constantes from '../Constantes';
import ExportExcel from 'react-export-excel';
import Box from '@material-ui/core/Box';
import {Bar} from 'react-chartjs-2';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;
const placeholderFecha = {
    label: 'Selecciona una fecha',
    value: null,
  };
  

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
    console.log(" formatoFecha " + fecha);  
  
    let dia = fecha.getDate();
    console.log("dia: " + dia);
    let mes = fecha.getMonth() + 1;

    if (fecha.getMonth() + 1 < 10 ) {
        mes = fecha.getMonth() + 1;
        mes = "0" + mes.toString();

        console.log("MES: " + mes);
    };
    
    if (fecha.getDate() < 10 ) {
        dia = fecha.getDate();
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
            fechaDesde: new Date(2021,11,20),
            fechaHasta: new Date(2021,11,21),
            fechaD: "", 
            fechaH: "",
            fechasReporte:[],
            presentes: [],
            ausentes: [],
            loading: false,
            errorMessageIsOpen: false,
            errorMessage1IsOpen: false,
            errorMessage2IsOpen: false,

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
        const dateFormateada = formatoFecha(event, 'yyyy-mm-dd');
        this.setState({fechaD: dateFormateada})
      
    }
    onChangeHasta = (event) => {
        const dateFormateada = formatoFecha(event, 'yyyy-mm-dd'); 
        this.setState({fechaH: dateFormateada})
        
    }

    addButtonPressed = async () => {
    
        const fechadesde= this.state.fechaD;
        const fechahasta= this.state.fechaH;
        
      if (fechadesde == "" ){
            this.setState({ errorMessageIsOpen: true }, this.forceUpdate());
      }else { 
            if (fechahasta == ""){
                this.setState({ errorMessage1IsOpen: true }, this.forceUpdate());
            } else {
                    if (fechadesde > fechahasta) {
                        this.setState({ errorMessage2IsOpen: true }, this.forceUpdate());
                    }    
        }
    }
       const result = await fetch(`${Constantes.RUTA_API}/download_alumno_report.php?start=${fechadesde}&end=${fechahasta}`);
       const res = await result.json();
       this.reporte = res;
       
       const presentesResult = await fetch(`${Constantes.RUTA_API}/get_Alumnos_Presentes_Count.php?start=${fechadesde}&end=${fechahasta}`);
       const presentes = await presentesResult.json();
       this.presentes = presentes;

       const ausentesResult = await fetch(`${Constantes.RUTA_API}/get_Alumnos_Ausentes_Count.php?start=${fechadesde}&end=${fechahasta}`);
       const ausentes = await ausentesResult.json();
       this.ausentes = ausentes;
      
       
       const fechasResult = await fetch(`${Constantes.RUTA_API}/get_Fechas_Reporte.php?start=${fechadesde}&end=${fechahasta}`);
       const fechasreporte = await fechasResult.json();
       this.fechasReporte = fechasreporte;
       

       this.setState({presentes: this.presentes})
       this.setState({reporte: this.reporte})
       this.setState({ausentes: this.ausentes})
       this.setState({fechasReporte: this.fechasReporte})
    }

    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
        this.setState({ errorMessage1IsOpen: false }, this.forceUpdate());
        this.setState({ errorMessage2IsOpen: false }, this.forceUpdate());
    }

    getErrorMessage() {
            return "Gracias"
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <ErrorMessageModal title={'Porfavor seleccione una fecha de inicio en la que desea buscar la asistencia'} errorMessage= { this.getErrorMessage() } isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
            <ErrorMessageModal title={'Porfavor seleccione una fecha de fin en la que desea buscar la asistencia'} errorMessage= { this.getErrorMessage() } isOpen={this.state.errorMessage1IsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
            <ErrorMessageModal title={'Porfavor seleccione un rango de fechas válido'} errorMessage= { this.getErrorMessage() } isOpen={this.state.errorMessage2IsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
            
            <Grid item xs={12} >
                <div>
                <Typography variant="h5">Seleccione las fechas para buscar las Asistencias: </Typography>
                <br/>
                    <DatePickerInput
                        onChange={this.onChangeDesde}
                        value={this.state.fechaDesde}
                        placeholder = {placeholderFecha}
                        className='my-custom-datepicker-component'
                    />
                    <br/>
                    <DatePickerInput
                        onChange={this.onChangeHasta}
                        value={this.state.fechaHasta}
                        placeholder = {placeholderFecha}
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
                                                                Exportar Reporte en Excel
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

