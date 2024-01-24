import React from 'react';
import '../RoomCards/RoomCard.css';
import { Divider } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

export default function RoomCards() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='roomcard_box'>
            <p className='roomcard_title'>Deluxe Room</p>
            <Divider className='roomcard_divider' />
            <div className='roomcard_details'>
                <div className='room_number'>
                    <p className='roomcard_number'>Room Number</p>
                    <p className='roomcard_number_values'>S-19</p>
                </div>
                <div className='roomcard_amount'>
                    <div className='roomcard_select'>
                        <p className='roomcard_select_title'>Adults</p>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={age}
                                label='Age'
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='roomcard_select_child'>
                        <p className='roomcard_select_title'>Adults</p>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={age}
                                label='Age'
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='roomcard_select'>
                        <p className='roomcard_select_title'>Adults</p>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={age}
                                label='Age'
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='roomcard_select_child'>
                        <p className='roomcard_select_title'>Meal plan</p>
                        <p className='room_prize'>2000/-</p>
                    </div>
                    <div className='roomcard_select'>
                        <p className='roomcard_select_title'>Cost</p>
                        <p className='room_prize'>2000/-</p>
                    </div>
                    <div className='roomcard_select_child'>
                        <p className='roomcard_select_title'>GST</p>
                        <p className='room_prize'>2000/-</p>
                    </div>
                    <div className='roomcard_select'>
                        <p className='roomcard_select_title'>Total</p>
                        <p className='room_prize'>2000/-</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
