import 'date-fns';
import esLocale from "date-fns/locale/es";
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const localeMap = {
  es: esLocale,

};

export default function MaterialUIPickers(props) {
  // The first commit of Material-UI
  const [/*selectedDate*/, setSelectedDate] = React.useState(new Date());
  const [locale] = React.useState("es");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[locale]} >
      <Grid container justify="space-around">
        <KeyboardDatePicker
          autoOk
          inputVariant="outlined"
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          color="primary"
          label={props.label}
          value={props.fecha}
          InputAdornmentProps={{ position: "start" }}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}