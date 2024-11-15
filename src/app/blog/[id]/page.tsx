import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Divider,
} from '@mui/material'

interface BlogProps {
  params: {
    id: string
  }
}

export default function BlogId({ params }: BlogProps) {
  const { id } = params
  return (
    <>
      <Box sx={{ bgcolor: 'darkblue', color: 'white', padding: 3 }}>
        {/* Header Section */}
        <Box
          sx={{
            position: 'relative',
            height: 400,
            backgroundImage: 'url(/path-to-image.jpg)',
            backgroundSize: 'cover',
          }}
        >
          <Box
            sx={{ position: 'absolute', bottom: 20, left: 20, color: 'white' }}
          >
            <Typography variant="h4">Lorem ipsum dolor sit amet</Typography>
            <Typography variant="body2">
              by Author Name | Date |{' '}
              <span role="img" aria-label="like">
                ❤️
              </span>
            </Typography>
          </Box>
        </Box>

        {/* Content Section */}
        <Box sx={{ padding: 3 }}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </Typography>
          <Typography paragraph>
            Cras vehicula ipsum a arcu cursus vitae congue mauris. Integer vel
            urna eu orci euismod posuere non eu justo.
          </Typography>
          {/* Add more paragraphs as needed */}
        </Box>

        {/* Comments Section */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h6">Comments</Typography>
          {[1, 2, 3].map((comment) => (
            <Card key={comment} sx={{ bgcolor: 'darkslategray', marginY: 2 }}>
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="User" src="/path-to-avatar.jpg" />
                  <Box>
                    <Typography variant="body1">User Name</Typography>
                    <Typography variant="body2">
                      Comment text goes here. Lorem ipsum dolor sit amet...
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
              <Divider />
            </Card>
          ))}
        </Box>

        {/* Leave a Reply Form */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h6">Leave a Reply</Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
              <TextField fullWidth label="Name" variant="outlined" />
              <TextField fullWidth label="Email" variant="outlined" />
            </Stack>
            <TextField fullWidth label="Subject" variant="outlined" />
            <TextField
              fullWidth
              label="Comment"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary">
              Submit Comment
            </Button>
          </Stack>
        </Box>

        {/* Related Topics Section */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h6">Related Topics</Typography>
          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
                <Card sx={{ bgcolor: 'darkslategray' }}>
                  <CardContent>
                    <Typography variant="h6">Related Topic Title</Typography>
                    <Typography variant="body2">
                      Brief description of the related topic...
                    </Typography>
                    <Button variant="text" color="primary">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}
