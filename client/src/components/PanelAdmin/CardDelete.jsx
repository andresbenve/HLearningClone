import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardActionArea } from "@material-ui/core";

export default function CourseCard({
  id,
  title,
  image,
}) {
  
  return (
    <Box p={1}>
      <Card sx={{ maxWidth: 270, minWidth: 270 }} elevation={0}>
          <Typography sx={{ mb: 1 }} paddingLeft={1} variant="h6">
            {title}
          </Typography>
          <CardMedia
            title={title}
            component="img"
            height="180"
            widht="270"
            image={image}
            alt="img video"
          />    
      </Card>
    </Box>
  );
}