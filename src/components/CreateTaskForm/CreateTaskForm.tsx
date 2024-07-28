import React, {FC, ReactElement} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import TaskTitle from "./_TaskTitle";
import TaskDescription from "./_TaskDescription";
import TaskDate from "./_TaskDate";
import TaskSelect from "./_TaskSelect";

const CreateTaskForm:FC = ():ReactElement => {
    return (
       <Box display='flex' flexDirection='column' alignItems='flex-start' width='100%' px={4} my={6}>
           <Typography component='h2' variant='h6' mb={2}>Create A Task</Typography>
           <Stack spacing={2} sx={{width:'100%'}}>
            <TaskTitle/>
           <TaskDescription/>
               <TaskDate/>
               <Stack direction='row' spacing={2} sx={{width:'100%'}}>
               <TaskSelect />
               <TaskSelect/>
               </Stack>
           </Stack>
       </Box>
    );
};

export default CreateTaskForm;