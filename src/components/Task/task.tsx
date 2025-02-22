import React, {FC, ReactElement} from 'react';
import {Box} from "@mui/material";
import TaskHeader from "./_TaskHeader";
import TaskDescription from "./_TaskDescription";
import TaskFooter from "./_TaskFooter";
import {ITask} from "./interfaces/ITask";
import {Status} from "../CreateTaskForm/enums/Status";
import {Priority} from "../CreateTaskForm/enums/Priority";
import {log} from "node:util";
import PropTypes from "prop-types";
import {renderPriorityBorderColor} from "./helpers/renderPriorityBorderColor";

const Task:FC<ITask> = (props):ReactElement => {
    const {title='Test Title',
        date=new Date()
        ,description='dommy text',
        priority=Priority.high,
        status=Status.completed,
        onStatusChange=e=>console.log(e),
        onClick=e=>console.log(e)}=props

    return (
        <Box
        display='flex'
        width='100%'
        justifyContent='flex-start'
        flexDirection='column'
        mb={4}
        p={2}
        sx={{
            width:'100%',
            backgroundColor:'background.paper',
            borderRadius:'8px',
            border:'1px solid',
            borderColor:renderPriorityBorderColor(priority),
        }}
        >
            <TaskHeader title={title} date={date}/>
            <TaskDescription description={description}/>
            <TaskFooter onStatusChange={onStatusChange} onClick={onClick}/>
        </Box>
    );
};

Task.propTypes={
    title:PropTypes.string,
    date:PropTypes.instanceOf(Date),
    description:PropTypes.string,
    onStatusChange:PropTypes.func,
    onClick:PropTypes.func,
    priority:PropTypes.string,
    status:PropTypes.string
}

export default Task;