import React, {FC, ReactElement} from 'react';
import {Box, Typography} from "@mui/material";
import {ITaskDescription} from "./interfaces/ITaskDescription";
import PropTypes from "prop-types";

const TaskDescription:FC<ITaskDescription> = ({description='Default Description'}):ReactElement => {
    return (
       <Box>
           <Typography>
               {description}
           </Typography>
       </Box>
    );
};

TaskDescription.propTypes={
    description:PropTypes.string
}

export default TaskDescription;