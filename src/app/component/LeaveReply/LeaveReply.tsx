import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
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
          width: '55%',
          my: 5,
          mx: 'auto',
          padding: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" sx={{ my: 3 }}>
          Leave a Reply
        </Typography>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <WhiteBorderTextField fullWidth label="Name" variant="outlined" />
            <WhiteBorderTextField
              fullWidth
              label="Email"
              variant="outlined"
            />
          </Stack>
          <WhiteBorderTextField
            fullWidth
            label="Subject"
            variant="outlined"
          />
          <WhiteBorderTextField
            fullWidth
            label="Comment"
            variant="outlined"
            multiline
            rows={4}
          />
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
        </Stack>
      </Box>
    </>
  )
}
