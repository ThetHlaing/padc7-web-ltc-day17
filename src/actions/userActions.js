import {retrieveData,storeData} from "../utilies/localStorage";

export const fetchUsers = () => dispatch => {
  const users = retrieveData('users');
  dispatch({
    type: 'FETCH_USERS',
    payload : users
  });
};

