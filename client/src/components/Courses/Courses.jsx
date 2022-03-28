import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/getAllCourses";
import { clearFilters } from "../../redux/actions/clearFilters";
import { getUserInfo } from "../../redux/actions/userActions";
import { Grid, Typography } from "@material-ui/core";
import { experimentalStyled as styled } from "@mui/material/styles";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import Orders from "../Orders/Orders";
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
}));

export default function Courses() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.getCourses.getAllCourses);
  const filteredCourses = useSelector(
    (state) => state.getCourses.setAllCourses
  );
  const filterName = useSelector((state) => state.getCourses.filteredString);
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const auth = useSelector((state) => state.userReducer.isAuthenticated);
  console.log("userdetail", userDetail);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getAllCourses());
    dispatch(clearFilters());
  }, [dispatch]);

  let Courses;

  filterName === "Filter By"
    ? (Courses = allCourses)
    : (Courses = filteredCourses);
  console.log("COURSES", allCourses);
  //Paginado:
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage /* setCoursesPerPage */] = useState(4);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses =
    Courses.length >= 0
      ? Courses.slice(indexOfFirstCourse, indexOfLastCourse)
      : Courses;

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <br />
      <div>
        <Grid container direction="column" alignItems="center">
          <SearchBar courses={allCourses} />
          <br />
          <div>
            <Grid container direction="row" spacing={3}>
              <Grid item>
                <Orders
                  setCurrentPage={setCurrentPage}
                  filtered={filteredCourses}
                />
              </Grid>
              <Grid item>
                <Filters setCurrentPage={setCurrentPage} />
              </Grid>
            </Grid>
          </div>
          <div>
            <Paginate
              coursesPerPage={coursesPerPage}
              allCourses={Courses.length}
              paginate={paginate}
            />
          </div>

          <Grid container align="center">
            {currentCourses.length >= 0 ? (
              <>
                {currentCourses?.map((c, i) => (
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
              <Grid item>
                {/* <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br /> */}
                <Typography variant="h2" color="initial">
                  No se encontraron cursos con esa busqueda
                </Typography>
                {/* <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br /> */}
              </Grid>
            )}
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
