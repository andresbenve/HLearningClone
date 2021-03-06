import {

  GET_USER,
  GET_ALL_USERS,
  GET_USER_DETAIL,
  DELETE_USER

} from "../actions/constants.js";

const initialState = {

  getAllUsers: [],
  getUserId: {},
  userDetail: {}

};

const getUser = (state = initialState, action) => {

  switch (action.type) {

    case GET_ALL_USERS: {
      return {
        ...state,
        getAllUsers: action.payload,
      };
    }

    case GET_USER_DETAIL: {
      return {
        ...state,
        userDetail: action.payload
      }
    }

    case GET_USER: {
      return {
        ...state,
        getUserId: action.payload
      }
    }

    case DELETE_USER:
      return {
        ...state,
      };

    default: return state;
  }
}

export default getUser;