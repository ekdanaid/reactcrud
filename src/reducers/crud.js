const initialState = {
  member: [
    { id: '1', name: 'Steve', lname: 'Jobs' },
    { id: '2', name: 'Elon', lname: 'Musk' }
  ]
};

const crud = (state = initialState, action) => {
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case 'USER_SELECT':
      nextState.valueA = action.payload;
      return nextState;
    case 'USER_INITIAL':
      return initialState;
    default:
      return state;
  }
};

export default crud;