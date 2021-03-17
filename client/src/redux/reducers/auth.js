import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/actionTypes";

const initialState = {
  jwtToken: null,
};

export default function register(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
    // return state
    case REGISTER_FAIL:
    // return old state, do nothing
    default:
      return state;
  }
  // get back a jwt token
  // store the token in localStorage
  // user is registered
}
