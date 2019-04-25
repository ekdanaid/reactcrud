const initialState = {
  members: [{ name: 'Steve', lname: 'Jobs' }, { name: 'Elon', lname: 'Musk' }]
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
      nextState.members = Object.assign([], nextState.members, {
        [action.payload.id]: {
          name: action.payload.name,
          lname: action.payload.lname
        }
      });
      return nextState;
    default:
      return state;
  }
};

export default crud;
