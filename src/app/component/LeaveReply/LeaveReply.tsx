import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react';
import Grid from '@mui/material/Grid2'
import { styled } from '@mui/system'

const WhiteBorderTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FFF',
    },
    '&:hover fieldset': {
      borderColor: '#FFF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFF',
    },
    color: '#FFF',
  },
  '& .MuiInputLabel-root': {
    color: '#FFF',
  },
})

export default function   () {
  return (
    <>
      <Box
        sx={{
          width: '75%',
          my: 5,
          mx: 'auto',
          padding: 3,
          textAlign: 'center',
        }}
      >
        <Grid container >
          <Typography variant="h6" sx={{ my: 3 }}>
            Leave a Reply
          </Typography>
          <Grid container spacing={3} sx={{  mx: 'auto' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <WhiteBorderTextField fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <WhiteBorderTextField fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid size={{ xs: 12, md: 12}}>
              <WhiteBorderTextField fullWidth label="Subject" variant="outlined" />
            </Grid>
            <Grid size={{ xs: 12, md:12 }}>
              <WhiteBorderTextField
                fullWidth
                label="Comment"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid size={{ xs: 12, md:12 }}>
              <Button
                sx={{
                  mx: 'auto',
                  background: '#8411E6',
                  width: '170px',
                  color: '#fff',
                  '&:hover': { background: '#6A0ECC' },
                }}
              >
                Submit Comment
              </Button>

            </Grid>

          </Grid>
        </Grid>
      </Box>
    </>
  )
}
