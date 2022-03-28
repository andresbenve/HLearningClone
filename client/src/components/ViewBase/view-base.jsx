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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
}));

export default function ViewBase({ carousel, steps }) {
  const dispatch = useDispatch();
  let courses2 = useSelector((state) => state.getCourses.getAllCourses);
  let courses = courses2.slice(0, 4);
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
        {carousel && <div className="carousel-container">{carousel}</div>}
      </div>
      <div className="title">
        <h2>⇩ VESTIDOS DESTACADOS ⇩</h2>
      </div>
      <div className="Separador">
        {courses?.map((c, i) => (
          <Grid key={i} item xs={12} sm={6} md={3} lg={3}>
            <Item sx={{ minWidth: 270, maxWidth: 280 }}>
              <Card
                id={c._id}
                title={c.title}
                image={c.img}
                score={c.score}
                price={c.price}
                course={c}
              />
            </Item>
          </Grid>
        ))}
      </div>
      <div className="title">
        <h2>⬇ ¿VENI A VISITARNOS? ⬇</h2>
      </div>
      <div align="center">
        <div className="prueba">{steps}</div>
      </div>
      <div className="prueba2">
        <br />
        <div className="title2">
          <h2> EMPRESAS ASOCIADAS </h2>
        </div>
        <div className="icons">
          <DiGithubFull /> <DiDotnet /> <DiWindows /> <DiStackoverflow />{" "}
          <DiNetmagazine />
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
