import React, { Fragment, useState } from "react";
import { TextField } from "@material-ui/core";
import { MobileTimePicker } from "@material-ui/pickers";

function TimeValidation() {
  const [selectedDate, handleDateChange] = useState(new Date("2020-01-01 15:00"));

  return (
    <Fragment>

      <MobileTimePicker
        renderInput={props => <TextField {...props} />}
        ampm={false}
        label={"Horario de ingreso"}
        minTime={new Date(0, 0, 0, 15)}
        maxTime={new Date(0, 0, 0, 23)}
        minutesStep={5}
        value={selectedDate}
        onChange={date => handleDateChange(date)}
      />

    </Fragment>
  );
}

export default TimeValidation;