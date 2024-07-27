import React, {FC, ReactElement} from 'react';
import {TextField} from "@mui/material";
import {ITextField} from "./Interfaces/ITextField";
import PropTypes from "prop-types";
import TaskTitle from "./_TaskTitle";

const TaskDescription:FC<ITextField> = ({disabled=false,onChange=e=>console.log(e)}):ReactElement => {
    return (
        <TextField
        id='description'
        name='description'
        label='Description'
        placeholder='Description'
        variant='outlined'
        size='small'
        multiline
        rows={4}
        fullWidth
        disabled={disabled}
        onChange={onChange}
        />
    );
};

TaskTitle.propTypes={
    onChange:PropTypes.func,
    disabled:PropTypes.bool,
}


export default TaskDescription;