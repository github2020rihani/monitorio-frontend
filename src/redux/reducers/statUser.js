import { GET_COUNT_USERS } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_USERS_PROFILE } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_USERS_REGISTER } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_USERS_VISITOR } from '../../@jumbo/constants/ActionTypes';

const INIT_STATE = {
  statUserCount: [],
  statUserProfile: [],
  statUserRegiter: [],
  statUserVisitor: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_COUNT_USERS: {
      return { ...state, statUserCount: action.payload };
    }
    case GET_COUNT_USERS_PROFILE: {
      return { ...state, statUserProfile: action.payload };
    }
    case GET_COUNT_USERS_REGISTER: {
      return { ...state, statUserRegiter: action.payload };
    }
    case GET_COUNT_USERS_VISITOR: {
      return { ...state, statUserVisitor: action.payload };
    }
    default:
      return state;
  }
};
