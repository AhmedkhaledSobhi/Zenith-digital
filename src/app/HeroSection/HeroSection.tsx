import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Grid from "@mui/material/Grid2";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {createDirectus, graphql} from '@directus/sdk';

interface Video {
  languages_code: { code: string };
  headline: string;
  text: string;
  sub_headline: string;
  button_text: string;
}

interface Schema {
  home_page: { video: Video[]; video_url: string }
}

const BASE_URL = process.env.NEXT_APP_API_BASE_URL as string
const client = createDirectus<Schema>(BASE_URL).with(graphql());

async function HomeData(){
  return await client.query<Schema>(`
    query{
      home_page {
        video_url
        video(filter: {languages_code: {code: {_eq: "ar"}}}) {
          languages_code {
            code
          }
          button_text
          headline
          text
          sub_headline
        }
      }
    }
  `);
}

export default async function HeroSection() {
  // console.log("ahmed", JSON.stringify(await HomeData(), null,2) );
  let data = await HomeData()
  return (
    <Box sx={{ padding: { xs: '50px 20px', md: '50px 100px' } }}>
      <Grid
        container
        sx={{ mx: 'auto' }}
        columnSpacing={12}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ px: 2 }}>
          <Box
            display="flex"
            alignItems="center"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29 0C29.4371 15.8316 42.1684 28.5629 58 29C42.1684 29.4371 29.4371 42.1684 29 58C28.5629 42.1684 15.8316 29.4371 0 29C15.8316 28.5629 28.5629 15.8316 29 0Z"
                fill="#0000FE"
              />
            </svg>
            <Typography
              variant="h4"
              gutterBottom
              fontWeight="bold"
              style={{ paddingLeft: '10px' }}
            >
              {data?.home_page?.video?.[0]?.headline ?? ''}
            </Typography>
          </Box>
          <Typography sx={{ my: 3 }}>
            {data?.home_page?.video?.[0]?.text ?? ""}
          </Typography>
          <Typography variant="h5" component="h5">
            {data?.home_page?.video?.[0]?.sub_headline ?? ''}
          </Typography>
          <Button
            endIcon={<ArrowRightAltIcon />}
            variant="text"
            sx={{ py: 2 }}
            href="#contact"
          >
            {data?.home_page?.video?.[0]?.button_text?? ""}
          </Button>
        </Grid>

        <Grid size={{ sm: 6, md: 5 }}>
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="grey.300"
            sx={{ height: { xs: 300, md: 500 }, width: { xs: 300, md: 500 } }}
          >
            <iframe
              width="100%"
              height="100%"
              src={data?.home_page?.video_url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}