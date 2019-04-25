const initialState = {
  members: [{ name: 'Steve', lname: 'Jobs' }, { name: 'Elon', lname: 'Musk' }]
};

const updateUser = (array, action) => {
  return array.map((item, index) => {
    if (index !== action.index) {
      return item;
    }
    return {
      ...item,
      ...action.item
    };
  });
};

const crud = (state = initialState, action) => {
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case 'CREATE_NEW_USER':
      nextState.members = [
        ...nextState.members,
        Object.assign({}, action.payload)
      ];
      return nextState;
    case 'REMOVE_USER':
      nextState.members = nextState.members.filter((data, i) => {
        return i !== action.payload.id;
      });
      return nextState;
    case 'UPDATE_USER':
      return updateUser(state.members, action.payload);
    case 'SELECT_USER':
      return nextState.members[action.payload.id];
    default:
      return state;
  }
};

export default crud;
