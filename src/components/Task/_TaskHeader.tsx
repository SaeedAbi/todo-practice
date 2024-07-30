import React, {FC, ReactElement} from 'react';
import {Box, Chip, Typography} from "@mui/material";
import {ITaskHeader} from "./interfaces/ITaskHeader";
import {format} from "date-fns";
import PropTypes from "prop-types";

const TaskHeader:FC<ITaskHeader> = ({title='Default title',date=new Date()}):ReactElement => {
    return (
        <Box
        display='flex'
        width='100%'
        justifyContent='space-between'
        mb={4}
        >
            <Box>
                <Typography variant='h6'>{title}</Typography>
            </Box>
            <Box>
                <Chip variant='outlined' label={format(date,'ppp')}/>
            </Box>
        </Box>
    );
};

TaskHeader.propTypes={
    title:PropTypes.string,
    date:PropTypes.instanceOf(Date)
}

export default TaskHeader;