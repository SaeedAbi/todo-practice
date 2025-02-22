import React, {FC, ReactElement} from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import {ITaskCounter} from "./interfaces/ITaskCounter";
import {Status} from "../CreateTaskForm/enums/Status";
import {emitCorrectBorderColor} from "./helpers/emitCorrectBorderColor";
import {emitCorrectLabel} from "./helpers/emitCorrectLabel";
import PropTypes from "prop-types";

const TaskCounter:FC<ITaskCounter> = ({count=0,status=Status.completed}):ReactElement => {
    return (
        <>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='cemter'>
            <Avatar
            sx={{
                backgroundColor:'transparent',
                border:'5px solid',
                width:'96px',
                height:'96px',
                marginBottom:'16px',
                borderColor:`${emitCorrectBorderColor(status)}`
            }}
            >
                <Typography variant='h4' color='#ffffff'>{count}</Typography>
            </Avatar>
            <Typography
            color='#ffffff'
            fontWeight='bold'
            fontSize='20px'
            variant='h5'
            >{
                emitCorrectLabel(status)
            }</Typography>
        </Box>
        </>
    );
};

TaskCounter.propTypes={
    count:PropTypes.number,
    status:PropTypes.oneOf([Status.todo,Status.inProgress,Status.completed])
}

export default TaskCounter;