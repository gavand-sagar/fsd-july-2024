import { Avatar, Button, Paper, Rating, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

export default function UsersApi() {

    let [userObj, setUserObj] = useState(null)

    function apiCall() {
        axios.get("https://randomuser.me/api/")
            .then(response => {
                // success
                setUserObj(response.data.results[0])
            })
            .catch(error => {
                //failure
            })
    }
    return (
        <div>
            <Typography variant='h1' component={'h1'}>UsersApi</Typography>
            <Button color='primary' onClick={() => apiCall()} variant="contained">Call API</Button>
            <hr />
            {
                userObj != null &&
                <Paper elevation={3} sx={{ margin: '10px' }} className='my-flex'>
                    <Avatar sx={{ width: 100, height: 100 }} src={userObj.picture.large} alt='User' />
                    <div>
                        <Typography variant='h4'>
                            {userObj.name.title} {userObj.name.first} {userObj.name.last}
                        </Typography>
                        <Typography variant='body1'>
                            {userObj.location.city},{userObj.location.state},{userObj.location.country}
                        </Typography>
                        <Typography variant='body2'>
                            {userObj.phone},{userObj.cell}
                        </Typography>
                        <Typography variant='body2'>
                            {userObj.email}
                        </Typography>
                    </div>
                </Paper>
            }
        </div>
    )
}
