import "./styleViewBase.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { getAllCourses } from "../../redux/actions/getAllCourses";
import { useDispatch, useSelector } from "react-redux";
import {
  DiGithubFull,
  DiDotnet,
  DiWindows,
  DiStackoverflow,
  DiNetmagazine,
} from "react-icons/di";
import { useEffect } from "react";
import Card from "../Card/Card";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@material-ui/core";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
}));

export default function ViewBase({ carousel, steps }) {
  const dispatch = useDispatch();
  let courses2 = useSelector((state) => state.getCourses.getAllCourses);
  let courses = courses2.slice(0, 10);
  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  return (
    <div className="base-container">
      <div
        className={
          carousel ? "header-container with-carousel" : "header-container"
        }
      >
        <div className="navBar-container">
          <NavBar />
        </div>
        <h1>VIDEO</h1>
        {carousel && <div className="carousel-container">{carousel}</div>}
      </div>
      <div className="title">
        <h2>⇩ ULTIMOS VESTIDOS ⇩</h2>
      </div>
      <div className="container-slider">
        <br />
        <Grid container align="center">
          {courses?.length >= 0 ? (
            <>
              {courses?.map((c, i) => (
                <Grid key={i} item xs={12} sm={6} md={3} lg={3}>
                  <Item sx={{ minWidth: 270, maxWidth: 280 }}>
                    <Card
                      id={c._id}
                      title={c.title}
                      image={c.img}
                      description={c.description}
                      score={c.score}
                      price={c.price}
                      course={c}
                    />
                  </Item>
                </Grid>
              ))}
            </>
          ) : (
            <h1>Loading</h1>
          )}
        </Grid>
        <br />
      </div>
      <div className="title">
        <h2>⇩ ¿VENI A VISITARNOS? ⇩</h2>
      </div>
      <div align="center">
        <Button
          variant="contained"
          type="submit"
          style={{ backgroundColor: "#000" }}
        >
          AGENDA TU CITA EN EL CALENDARIO BENVE
        </Button>
      </div>
      <hr />
      <div className="prueba2"></div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
