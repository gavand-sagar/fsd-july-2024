import { Button, Paper, TextField } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form'

export default function HookForms() {
    //you dont need seporate states for all inputs,
    // even if there are 10 fields , only one single state is enough

    // re-rendering is also taken care here

    const { register, handleSubmit, formState: { errors } } = useForm();

    function mySubmit(obj) {
        //api call
        //
        console.log(obj)
    }

    return (
        <Paper sx={{ padding: '20px', margin: '20px' }}>
            <TextField type='text' variant='outlined' label="username"
                {...register("username", {
                    required: {
                        value: true,
                        message: "There must be a username"
                    },
                    minLength:{
                        value:3,
                        message:"Username must be atlease 3 letter long"
                    },
                    maxLength:{
                        value:30,
                        message:"Username cannot be longer than 30 letters"
                    }
                })} 
                error={errors?.username} helperText={errors?.username?.message} 
                />

            <br />
            <br />
            <TextField type='number' variant='outlined' label="age"
                error={errors?.age} helperText={errors?.age?.message} 
                {...register("age",{
                    required:{
                        value:true,
                        message:"Age is required"
                    },
                    min:{
                        value:18,
                        message:"Age must be atleast 18"
                    }
                })} />
            <br />
            <br />
            <Button variant='contained' onClick={handleSubmit(mySubmit)}>Submit</Button>
        </Paper>
    )
}
