import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loadState, saveState } from "../../localStorage";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import calculeScore from "../../utils/calculeScore";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
//  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

/*import { BsCartPlus, BsCartCheckFill } from "react-icons/bs"; */

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginRight: "70px",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CourseCard({
  id,
  title,
  image,
  description,
  score,
  price,
  course,
}) {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let cart = loadState();

  const [addCart, setAddCart] = useState(false);

  return (
    <Box p={1} width={320}>
      <Card elevation={0}>
        <CardMedia
          title={title}
          component="img"
          height="500"
          width="500"
          image={image}
          alt="img video"
        />
        <Typography sx={{ mb: 1 }} paddingLeft={1} paddingTop={2} variant="h5">
          {title}
        </Typography>
        <Typography
          textAlign="center"
          variant="h6"
          component="div"
          noWrap={true}
        >
          ${price}
        </Typography>
        {cart.includes(course) ? null : (
          <CardActions>
            <IconButton
              onClick={() => {
                saveState(course);
                setAddCart(!addCart);
                Swal.fire({
                  position: "center",
                  title: "Agregado al carrito",
                  icon: "info",
                  showConfirmButton: false,
                  timer: 1000,
                });
              }}
            >
              <AddShoppingCartIcon />
              <Typography> Agregar</Typography>
            </IconButton>
          </CardActions>
        )}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Descripción:</Typography>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
        <Button
          variant="contained"
          size="medium"
          component={Link}
          to={`/courses/${id}`}
          endIcon={<AddIcon size="large" />}
          color="secondary"
          style={{ backgroundColor: "#000" }}
        >
          VER
        </Button>
      </Card>
    </Box>
  );
}
