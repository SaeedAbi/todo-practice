import React, {FC, ReactElement} from 'react';
import {Box, Grid} from "@mui/material";
import {format} from "date-fns";
import TaskCounter from "../taskCounter/TaskCounter";
import Task from "../Task/task";

const TaskArea:FC = ():ReactElement => {
    return (
        <Grid item md={8} px={4} >
            <Box mb={8} px={4}>
            <h2>Status of your Tasks as on {format(new Date(),'PPPP') }</h2>
            </Box>
            <Grid container display='flex' justifyContent='center'>
                <Grid item display='flex' flexDirection='row' justifyContent='space-around' alignItems='center'
                md={10} xs={12} mb={8}
                >
                    <TaskCounter/>
                    <TaskCounter/>
                    <TaskCounter/>

                </Grid>
                <Grid item display='flex' flexDirection='column' xs={10} md={8}>
                    <Task/>
                    <Task/>
                    <Task/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TaskArea;