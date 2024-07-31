import React, { FC, ReactElement, useState } from 'react';
import {Box, Stack, Typography} from "@mui/material";
import TaskTitle from "./_TaskTitle";
import TaskDescription from "./_TaskDescription";
import TaskDate from "./_TaskDate";
import TaskSelect from "./_TaskSelect";
import {Status} from "./enums/Status";
import {Priority} from "./enums/Priority";

const CreateTaskForm:FC = ():ReactElement => {
    const [title,setTitle]=useState<string|undefined>(undefined)
    const [description,setDescription]=useState<string|undefined>(undefined)
    const [date,setDate]=useState<Date|null>(new Date())
    const [status,setStatus]=useState<string>(Status.todo)
    const [priority,setPriority]=useState<string>(Priority.normal)

    return (
       <Box display='flex' flexDirection='column' alignItems='flex-start' width='100%' px={4} my={6}>
           <Typography component='h2' variant='h6' mb={2}>Create A Task</Typography>
           <Stack spacing={2} sx={{width:'100%'}}>
            <TaskTitle onChange={(e)=>setTitle(e.target.value)}/>
           <TaskDescription onChange={e=>setDescription(e.target.value)}/>
               <TaskDate onChange={date=>setDate(date)} value={date}/>
               <Stack direction='row' spacing={2} sx={{width:'100%'}}>
               <TaskSelect label='Status' name='status'
                           value={status}
                           onChange={e=>setStatus(e.target.value as string)}
                           items={[
                   {value:Status.todo,
                   label:Status.todo.toUpperCase(),
                   },
                   {value:Status.inProgress,
                   label:Status.inProgress.toUpperCase(),
                   },
                   {value:Status.completed,
                    label:Status.completed.toUpperCase(),
                   },
               ]} />
               <TaskSelect label='Priority' name='priority'
                           value={priority}
                           onChange={e=>setPriority(e.target.value as string)}
                           items={[
                   {
                       value:Priority.low,
                       label:Priority.low.toUpperCase(),
                   },
                   {
                       value:Priority.normal,
                       label:Priority.normal.toUpperCase(),
                   },
                   {
                       value:Priority.high,
                       label:Priority.high.toUpperCase(),
                   },
               ]}/>
               </Stack>
           </Stack>
       </Box>
    );
};

export default CreateTaskForm;