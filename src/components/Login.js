import React from 'react'
import { Stack, TextField, Button, Paper } from "@mui/material";

function Login() {
    return (
        <Paper sx={{
            width:500,
            display:"flex",
            justifyContent:"center"
        }}>
            <Stack
                component="form"
                sx={{
                    width: '25ch',
                }}
            >
                <TextField
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    label="Password"
                    variant="outlined"
                />
                <Button variant="contained">Login</Button>
            </Stack>
        </Paper>
    )
}

export default Login