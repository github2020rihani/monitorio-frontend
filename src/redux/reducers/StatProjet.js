import { GET_COUNT_PROJET_INPROGRESS } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_PROJET_FINISH } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_PROJET_CREATED } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_PROJET_BY_LOCALISATION } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_PROJET_BY_ETAT } from '../../@jumbo/constants/ActionTypes';
import { GET_COUNT_PROJET_BY_SECTEUR } from '../../@jumbo/constants/ActionTypes';

const INIT_STATE = {
  projetsInProgress: 0,
  projetFinish: 0,
  projetCreated: [],
  projetByLoc: [],
  projetByEtat: [],
  projetBySecteur: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_COUNT_PROJET_INPROGRESS: {
      return { ...state, projetsInProgress: action.payload };
    }
    case GET_COUNT_PROJET_FINISH: {
      return { ...state, projetFinish: action.payload };
    }
    case GET_COUNT_PROJET_CREATED: {
      return { ...state, projetCreated: action.payload };
    }
    case GET_COUNT_PROJET_BY_LOCALISATION: {
        return { ...state, projetByLoc: action.payload };
      }
      case GET_COUNT_PROJET_BY_ETAT: {
        return { ...state, projetByEtat: action.payload };
      }
      case GET_COUNT_PROJET_BY_SECTEUR: {
        return { ...state, projetBySecteur: action.payload };
      }
    default:
      return state;
  }
};
