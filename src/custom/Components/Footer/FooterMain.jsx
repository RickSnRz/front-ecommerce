import { Grid, Typography, Button, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-alice-carousel'

const FooterMain = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10' 
      container
      sx={{bgcolor:"black", color:"white", py:3}}
      >
        <Grid item xs={12} sm={6} md={3} >
        <Box display="flex" flexDirection="column" alignItems="flex-start" px={3}>
            <Typography className='pb-5' variant='h6'>Índice de la Página</Typography>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom>Inicio</Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom>Productos</Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom>Servicios</Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom>Acerca de la Marca</Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom>Contacto</Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" px={3}>
            <Typography className='pb-5' variant='h6'>Redes Sociales</Typography>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom>Facebook</Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom>Instagram</Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom>Twitter</Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom>Tik Tok</Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6' gutterBottom>Contacto</Button>
            </div>
          </Box>
        </Grid>
        <Grid className='pt-20' item xs={12}>
            <Typography variant='body2' component="p" align="center">
                &copy; 2024 My Company. All rights reserved.
            </Typography>
            <Typography variant='body2' component="p" align="center">
                Made with love by Me.
            </Typography>
            <Typography variant='body2' component="p" align="center">
                Icons made by{' '}
                <Link href="https://ricksnrz.me/" title="RickSnRz">
                    RickSnRz
                </Link>{' '}
                from{' '}
                <Link href="https://ricksnrz.me/" title="RickSnRz">
                    ricksnrz.me
                </Link>
            </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default FooterMain
