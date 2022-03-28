import React, { useEffect } from "react";
import ViewBase from "../ViewBase/view-base";
import Carousel from "../Carousel/Carousel";
import CoursesTop from "./CoursesTop";
import CarouselStep from "../Carousel/CarouselStep";
import { getUserInfo } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <div>
      <ViewBase courses={<CoursesTop />} steps={<CarouselStep />} />
    </div>
  );
}
