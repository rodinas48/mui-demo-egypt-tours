import {
  Box,
  Container,
  Typography,
  Paper,
  BottomNavigation,
} from "@mui/material";
import React from "react";
import QuiltedImageList from "../components/imgsList";
import CustomizedAccordions from "../components/Accordion";
import BasicModal from "../components/modal";
import { useParams } from "react-router-dom";
import data from "../data.json";
const Tour = () => {
  const { tourId } = useParams();
  const tour = data.find((item) => item.id == tourId);
  return (
    <Container sx={{ marginY: 5, width: 900 }}>
      <Typography
        variant="h4"
        component={"h2"}
        sx={{ marginTop: 5, marginBottom: 2 }}
      >
        {tour.name}
      </Typography>
      <Box sx={{ display: "flex" }}>
        <img width={550} src={tour.image} alt={tour.name} />
        <QuiltedImageList />
      </Box>
      <Box>
        <Typography variant="h6" component={"h4"} marginTop={3}>
          About this Ticket
        </Typography>
        <Typography variant="paragraph" component={"p"} marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          voluptates vel facere odit nesciunt ipsum quo dignissimos inventore
          natus, alias labore at quas deserunt reiciendis architecto laudantium
          pariatur? Optio, sunt.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component={"h4"} marginY={3}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
