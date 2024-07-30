import React, {FC, ReactElement} from 'react';
import {Box, Button, FormControlLabel, Switch} from "@mui/material";
import {ITaskFooter} from "./interfaces/ITaskFooter";
import PropTypes from "prop-types";

const TaskFooter:FC<ITaskFooter> = ({onStatusChange=e=>console.log(e),onClick=e=>console.log(e)}):ReactElement => {
    return (
        <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mt={4}
        >
            <FormControlLabel control={<Switch onChange={e=>onStatusChange(e)} color='warning'/>} label='in Progress'/>

            <Button
            variant='contained'
            color='success'
            size='small'
            sx={{
                color:'#ffffff'
            }}
            onClick={e=>onClick(e)}
            >Mark Complete</Button>
        </Box>
    );
};

TaskFooter.propTypes={
    onClick:PropTypes.func,
    onStatusChange:PropTypes.func
}

export default TaskFooter;