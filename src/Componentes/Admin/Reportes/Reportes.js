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

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;


const styles = theme => ({

})

function formatoFecha(fecha,formato) {
   
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;

    if (fecha.getMonth() + 1 < 10 ) {
        mes = fecha.getMonth() + 1;
        mes = "0" + mes.toString();

        console.log("MES: " + mes);
    }
    
    if (fecha.getDate() < 10 ) {
        dia = fecha.getDate().toString().slice(+2)
        console.log("DIA: " + dia);
    }

    const map = {
        dd: dia,
        mm: mes,
        //yy: fecha.getFullYear().toString().slice(-2),
        yyyy: fecha.getFullYear()
    }

    return formato.replace(/dd|mm|yyyy/gi, matched => map[matched])
}

const reportes = [{name:"Bautista Garcia Vega",presence_count :2,absence_count:26},{name:"Rosario Sol Garcia Vega",presence_count:0,absence_count:28}]

class Reportes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            asistencias: [],
            reporte: [],
            // dateEnd: String,
            fechaDesde: new Date("2019", "08", "26"),
            fechaHasta: new Date("2019", "08", "26"),
            fechaD: "", 
            fechaH: "",
            loading: false,
            }
            this.onChangeDesde = this.onChangeDesde.bind(this);
            this.onChangeHasta = this.onChangeHasta.bind(this);
           
    }

    componentDidMount() {
        this.setState({ asistencias: this.props.asistencias });
    }

    componentDidUpdate() {
        console.log("Componente actualizado");
        //this.setState({ reporte: this.reporte });
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
        console.log("Exportar Reporte");
        const result = await fetch(`${Constantes.RUTA_API}/download_employee_report.php?start=${this.state.fechaD}&end=${this.state.fechaH}`);
        //const result = await fetch("http://localhost/TEST/asistencia-php-rfid-main/download_employee_report.php?start=2021-09-01&end=2021-09-29");
        const res = await result.json();
        console.log("reporte: " + res);

        this.reporte = res;
        this.setState({reporte: this.reporte})
       console.log(" this reporte: " + this.reporte );
        
       
       /*
        let i = 0;
        const reporte = [];
        while(i<res.length){
                const e = i;
                const alumnoAsis = {
                    name: res[e].name,
                    presence_count: res[e].presence_count,
                    absence_count: res[e].absence_count,
                };
                reporte[e] = alumnoAsis;
                console.log("alumno: " + reporte[e].name );
        
            i++;
        }

        //this.reporte = reporte;
        
        this.setState({reporte: reporte})
        console.log(" this reporte: " + this.reporte[2].name );
        
        return reporte;
        */
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
                    </div>
            </Grid>
        </Grid>
        );
    }
}

Reportes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reportes);

