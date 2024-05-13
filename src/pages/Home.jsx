import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import data from "../data.json";
import { Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <>
      <Container sx={{ marginY: 5 }}>
        <Typography
          variant="h4"
          component={"h2"}
          sx={{ marginTop: 5, marginBottom: 2, fontWeight: "bold" }}
        >
          Top Egypt Tours
        </Typography>
        <Grid container spacing={2}>
          {data.map((place, index) => {
            return <TourCard place={place} key={index} />;
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
