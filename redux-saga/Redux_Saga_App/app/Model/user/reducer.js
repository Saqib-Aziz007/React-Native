import {GET_USERS_INFO_FAILURE, GET_USERS_INFO_SUCCESS} from './actions';

initialState = {
  loading: true,
  users: [],
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_INFO_SUCCESS: {
      console.log('success_action', action);
      state.loading = false;
      state.users = action.payload;
      console.log('success ended:');
      break;
    }
    case GET_USERS_INFO_FAILURE: {
      console.log('Failure_action', action);
      state.loading = false;
      state.error = action.payload;
      state.users = null;
      break;
    }
    default: {
      return state;
    }
  }
};
