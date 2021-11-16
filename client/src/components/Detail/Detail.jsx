import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "./detail.module.css";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { getDetailCourses } from '../../redux/actions/getDetailCourses';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Loading from '../Loading/Loading'
import Button from '@mui/material/Button';
import calculeScore from '../../utils/calculeScore';


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function CourseDetail(props) {

  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const courseDetailed = useSelector((state) => state.getDetails.getCourseDetail)
  console.log(courseDetailed)


  useEffect(() => {
    dispatch(getDetailCourses(id)) // eslint-disable-next-line
  }, [dispatch]);


    // useEffect(()=>{
    //   const script = document.createElement('script');
    //   const attr_data_preference = document.createAttribute('data-preference-id')
    //   //const attr_nonce = document.createAttribute('nonce')
    
    //   attr_data_preference.value = data.id
    //   //attr_nonce.value = 'abcdefg'
    //   script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    //   script.setAttributeNode(attr_data_preference)
    //  // script.setAttributeNode(attr_nonce)
    // console.log(data)
    //   document.getElementById('form1').appendChild(script)
    //   return () =>{
    //     document.getElementById('form1').removeChild(script);
    //   }
    //  },[data])


  const handleBuy = () => history.push("/checkout");

  return (
    <div>
      <div className={styles.bkg}>
        <div>
          <NavBar />
          <br />
          <br />
          <br />
        </div>
        {Object.keys(courseDetailed).length ? (
          <div>
            <Paper
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 1200,
                elevation: 24,
                flexGrow: 50,
                bottom: 0,
              }}
            >
              <Grid container spacing={1}>
                <Grid>
                  <ButtonBase>
                    <Img
                      alt="complex"
                      src={courseDetailed.img}
                      width="450px"
                      height="300px"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Rating name="read-only" readOnly value={calculeScore(courseDetailed.score)} />
                      <Typography gutterBottom variant="h4" component="div">
                        {courseDetailed.title}
                      </Typography>
                      <Typography variant="body2" align='left' color="text.secondary">
                        {courseDetailed.categories.map(el => el.name + (' '))}
                      </Typography><br />
                      <Typography variant="h6" gutterBottom>
                        {courseDetailed.description}
                      </Typography>
                      <Typography variant="body2" align='left' color="text.secondary">
                        Duracion:{" " + courseDetailed.duration}
                      </Typography>
                      <br />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="left"
                      >
                      </Typography>
                    </Grid>
                    <Grid item align="left">
                      <Typography sx={{ cursor: "pointer" }} variant="body2">
                        <Button variant="contained" size="medium" onClick={handleBuy}>
                          Comprar ahora!
                        </Button>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" component="div">
                      ${courseDetailed.price}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <br />
            <br />
            <br />
            <br />
          </div>) : <Loading />
        }
        <Footer />
      </div>
    </div>
  );
}

// sx={{ width: 128, height: 128 }}
