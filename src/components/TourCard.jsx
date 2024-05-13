import React from "react";
import {
  Grid,
  Box,
  Typography,
  Rating,
  Paper,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import "./tourCard.css";
import { Link } from "react-router-dom";


const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "caption",
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});

function TourCard({place}) {
  return (
    <Grid item xs={4}>
      <ThemeProvider theme={theme}>
        <Paper elevation={2} className="card">
          <img src={place.image} alt={place.name} className="cardImg" />
          <Box padding={1} width={"100%"}>
            <Box>
              <Typography variant="subtitle2" component={"h2"}>
               <Link to={`/${place.id}`} className="link">{place.name}</Link>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: "14px", marginTop: "-1px" }} />
              <Typography variant="caption" component={"p"} marginLeft={0.5}>
                {place.duration} Hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Rating
                name="half-rating-read"
                defaultValue={place.rating}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography
                variant="caption"
                component={"p"}
                marginLeft={0.5}
                marginTop={0.5}
              >
                {place.rating}
              </Typography>
              <Typography
                variant="caption"
                component={"p"}
                marginLeft={0.5}
                marginTop={0.5}
              >
                ({place.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Typography
              variant="h6"
              component={"h3"}
              sx={{
                textAlign: "right",
                color: "darkred",
              }}
            >
              {place.price} $
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourCard;
