export const updateUser = (name, lname, id) => {
  return function(dispatch) {
    dispatch({
      type: 'UPDATE_USER',
      payload: { name: name, lname: lname, id: id }
    });
  };
};
export const createNewUser = (name, lname) => {
  return function(dispatch) {
    dispatch({
      type: 'CREATE_NEW_USER',
      payload: { name: name, lname: lname }
    });
  };
};
export const removeUser = id => {
  return function(dispatch) {
    dispatch({
      type: 'REMOVE_USER',
      payload: { id: id }
    });
  };
};
