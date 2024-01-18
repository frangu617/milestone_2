import {useState } from 'react';
import React from 'react';
import { Button } from '@mui/material';

export default function WorkOut() {

    return (
        <div>
            <h2>Here is a list of your workouts</h2>
            <p>Workouts will be added here as they are created</p>
            <p>For now, this is just an empty page</p>

            <p>Try creating a new workout</p>

            <Button variant="contained">Create New Workout</Button>
        </div>
    )
}