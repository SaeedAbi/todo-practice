import React, {FC, ReactElement} from 'react';
import {Grid} from "@mui/material";
import TaskArea from "../../components/taskArea/TaskArea";
import Sidbar from "../../components/sidbar/Sidbar";

const Dashboard:FC = ():ReactElement => {
    return (
       <Grid container minHeight="100vh" p={0} m={0}>
       <TaskArea/>
           <Sidbar/>
       </Grid>
    );
};

export default Dashboard;