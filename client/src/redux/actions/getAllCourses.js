import axios from "axios";

export function getAllCourses() {
  return async function (dispatch) {
    try {
      var json = await axios(`http://localhost:9000/courses`);
      return dispatch({
        type: "GET_ALL_COURSES",
        payload: { allCourses: json.data, name: "Filter By" },
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}
