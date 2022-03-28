import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSignOut } from "../../redux/actions/userActions";
import { getUserInfo } from "../../redux/actions/userActions";
import Paper from "@mui/material/Paper";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export default function UserProfile() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.userReducer.userDetail);
  const isAuthenticated = useSelector(
    (state) => state.userReducer.isAuthenticated
  );
  console.log(User, "user");
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const signOutHandler = (e) => {
    e.preventDefault();
    dispatch(getSignOut());
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="lg">
        <Paper elevation={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: 3,
            }}
          >
            <Typography
              textAlign="center"
              variant="h4"
              color="text.primary"
              m={3}
            >
              <b> Bienvenido a HLearning !</b>
              <br></br>
              <b> {User.name} </b>
            </Typography>
            <Box display="flex" justifyContent="flex-end" width="100%" mr={15}>
              <IconButton
                color="primary"
                aria-label="edit"
                component={Link}
                to={`/editprofile`}
              >
                Edit profile
                <EditIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Box
                sx={{
                  display: "colums",
                  width: "90%",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  m: -5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background:
                      "linear-gradient(82deg, rgba(2,0,36,1) 0%, rgba(9,73,121,0.9948354341736695) 76%, rgba(0,212,255,1) 100%)",
                    p: 10,
                    borderRadius: 3,
                    gap: 2,
                  }}
                >
                  <Avatar
                    sx={{ width: 200, height: 200, marginLeft: 3 }}
                    src={User.pictures}
                    alt={User.name}
                  />
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3, bgcolor: "white" }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Nombre: {User.name}</b>
                  </Typography>
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3, bgcolor: "white" }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b>Email: {User.email}</b>
                  </Typography>
                  {isAuthenticated ? (
                    <Button
                      variant="contained"
                      size="medium"
                      // endIcon={<AddIcon size="large" />}
                      onClick={(e) => signOutHandler(e)}
                    >
                      Cerrar sesion
                    </Button>
                  ) : null}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexWarp: "wrap",
                    flexDirection: "column",
                    gap: 5,
                    width: 450,
                  }}
                >
                  <Typography
                    textAlign="center"
                    variant="h4"
                    color="text.primary"
                  >
                    <b>Mis cursos:</b>
                  </Typography>
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={1}
                    mb={5}
                  >
                    {User.courses?.length ? (
                      User.courses.map((c, index) => (
                        <Card
                          key={index}
                          sx={{ maxWidth: 270, minWidth: 100 }}
                          elevation={6}
                          align="center"
                        >
                          <Typography
                            sx={{ mb: 1 }}
                            paddingLeft={1}
                            variant="h6"
                          >
                            {c.title}
                          </Typography>
                          <CardMedia
                            component="img"
                            height="180"
                            image={c.img}
                            alt="img video"
                          />
                          <Button
                            variant="contained"
                            size="medium"
                            component={Link}
                            to={`/mycourses/${c._id}`}
                            // endIcon={<AddIcon size="large" />}
                          >
                            VER MIS VIDEOS
                          </Button>
                        </Card>
                      ))
                    ) : (
                      <Typography
                        textAlign="center"
                        variant="h6"
                        component="div"
                        noWrap={true}
                      >
                        NO HAS COMPRANDO NINGUN CURSO
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
              <hr style={{ width: "50%" }} />
            </Box>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}
