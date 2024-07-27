import React, {FC, ReactElement} from 'react';
import {TextField} from "@mui/material";
import {ITextField} from "./Interfaces/ITextField";
import {log} from "node:util";
import PropTypes from "prop-types";

const TaskTitle:FC<ITextField> = ({onChange=e=>console.log(e),disabled=false}):ReactElement => {
    return (
<TextField
id='title'
label='Task Title'
placeholder='Task Title'
variant='outlined'
size='small'
name='title'
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

export default TaskTitle;