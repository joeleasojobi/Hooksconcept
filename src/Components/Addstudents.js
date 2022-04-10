import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const Addstudents = () => {
    const [name, setName] = useState("")
    const [rollNo, setRollno] = useState("")
    const [admissionNo, setAdmissionNo] = useState("")
    const [college, setcollege] = useState("")

    const changeValues=()=>{
    //   setName("Aravind")   
    console.log(name);
    console.log(rollNo);
    console.log(admissionNo);
    console.log(college);
    }

  return (
    <div>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {/* <Typography>Hello{name}</Typography> */}
                <Typography>Student Details</Typography>
                <TextField
                     type='text' 
                     variant='outlined' 
                     value={name} 
                     name='name' 
                     fullWidth
                     label='Name'
                     onChange={(event)=>{setName(event.target.value)} }
                />
                <TextField
                     type='text' 
                     variant='outlined' 
                     value={rollNo} 
                     name='rollNo' 
                     fullWidth
                     label='Enter Roll No'
                     onChange={(event)=>{setRollno(event.target.value)} }
                />
                <TextField
                     type='text' 
                     variant='outlined' 
                     value={admissionNo} 
                     name='admissionNo' 
                     fullWidth
                     label='Enter Admission No'
                     onChange={(event)=>{setAdmissionNo(event.target.value)} }
                />
                <TextField
                     type='text' 
                     variant='outlined' 
                     value={college} 
                     name='college' 
                     fullWidth
                     label='Enter College Name'
                     onChange={(event)=>{setcollege(event.target.value)} }
                />
                <Button fullWidth onClick={changeValues} variant='contained' color='primary'>Submit</Button>

            </Grid>
        </Grid>
    </div>
  )
}

export default Addstudents