import React, {FC, ReactElement} from 'react';
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {TextField} from "@mui/material";
import {IDate} from "./Interfaces/IDate";
import PropTypes from "prop-types";

const TaskDate:FC<IDate> = ({onChange=(date)=>console.log(date),value=new Date(),disabled=false}):ReactElement => {

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Task Date"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => (
                        <TextField {...params} />
                    )}
                    disabled={disabled}
                />
            </LocalizationProvider>
        </>
    );
};

TaskDate.propTypes={
    disabled:PropTypes.bool,
    value:PropTypes.instanceOf(Date),
    onChange:PropTypes.func,
}

export default TaskDate;