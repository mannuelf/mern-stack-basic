import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/actionTypes";

const initialState = {
  jwtToken: null,
  isRegistered: false,
};

export default function register(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        jwtToken: payload.jwtToken,
        isRegistered: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        jwtToken: null,
        isRegistered: false,
      };
    default:
      return state;
  }
  // user is registered
}
