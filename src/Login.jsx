import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Login() {
  return (
    <Paper elevation={2} sx={{ padding: '20px', margin: '20px' }}>
      <Typography variant='h3' component={'h3'}>Login Page</Typography>
      <br />
      <TextField variant='outlined' label='Username' type='text' />
      <br />
      <br />
      <TextField variant='outlined' label='Password' type='password' />
      <br />
      <br />
      <Button variant='contained'>Login</Button>
    </Paper>
  )
}
