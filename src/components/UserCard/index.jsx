import { CardMedia, Grid } from '@mui/material'
import React from 'react'
import Description from '../Description'
import MainInfo from '../MainInfo'

const UserCard = ({userState,userState : {avatar_url}}) => {



  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardMedia component="img" image={avatar_url} alt="GitHub User Avatar" />
      </Grid>
      <Grid item xs={9}>

      < MainInfo userState={userState}/>

      </Grid>
      <Description userState={userState} />
    </Grid>
  )
}

export default UserCard