import { Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'

const Counterapp = () => {
    const [counter, setCounter] = useState(0)
    const onIncrement=()=>{
        setCounter(counter+1)  
    }
    const onDecrement=()=>{
        setCounter(counter-1)  
    }

  return (
      <Grid container style={{padding:250}} >
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          
          </Grid>
          <Grid item xs-12 sm-4 md-4 lg-4 xl-4xs={12} sm={4} md={4} lg={4} xl={4}>
              <Button variant='contained' color='primary' fullWidth onClick={onIncrement}>+</Button>
              <p fullWidth>{counter}</p>
              <Button variant='contained' color='secondary' fullWidth onClick={onDecrement}>-</Button>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              
          </Grid>
      </Grid>
  )
}

export default Counterapp