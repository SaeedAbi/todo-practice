import React, {FC, ReactElement} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {ISelect} from "./Interfaces/ISelect";
import PropTypes from "prop-types";

const TaskSelect:FC<ISelect> = (props):ReactElement => {
    const {
        value='',
        onChange=(e)=>console.log(e),
        name='selectBox',
        label='Select Box',
        items=[{value: '', label: 'Add Items'}],
        disabled=false,
    }=props
    return (
       <FormControl fullWidth size='small'>
           <InputLabel id={`${name}-id`}>
               {label}
           </InputLabel>
           <Select labelId={`${name}-id`} id={`${name}-id-select`} value={value} label={label} name={name}
                   onChange={onChange} disabled={disabled}
           >
               {
                   items.map((item,index)=>(
                       <MenuItem key={item.value+index} value={item.value}>{item.label}</MenuItem>
                   ))
               }
           </Select>
       </FormControl>
    );
};

TaskSelect.propTypes={
    onChange:PropTypes.func,
    label:PropTypes.string,
    name:PropTypes.string,
    disabled:PropTypes.bool,
    items:PropTypes.arrayOf(PropTypes.shape({
        value:PropTypes.string.isRequired,
        label:PropTypes.string.isRequired,
    }))
}

export default TaskSelect;