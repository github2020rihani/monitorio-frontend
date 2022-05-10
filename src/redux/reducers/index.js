import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Common from './Common';
import Auth from './Auth';
import ProfileApp from './ProfileApp';
import statUser from './statUser';
import StatProjet from './StatProjet';

export default history =>
  combineReducers({
    router: connectRouter(history),
    common: Common,
    auth: Auth,
    profileApp: ProfileApp,
    statUser: statUser,
    statProjet: StatProjet,
  });
