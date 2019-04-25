const initialState = {
  members: [{ name: 'Steve', lname: 'Jobs' }, { name: 'Elon', lname: 'Musk' }]
};

function updateUser(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      return item;
    }
    return {
      ...item,
      ...action.item
    };
  });
}

function removeUser(array, id) {
  initialState.members = array.filter((data, i) => i !== id);
  return initialState.members;
}

function selectUser(array, id) {}

const crud = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_NEW_USER':
      return [...state, Object.assign({}, action.payload)];
    case 'REMOVE_USER':
      return removeUser(state.members, action.payload.id);
    case 'UPDATE_USER':
      return updateUser(state.members, action);
    case 'SELECT_USER':
      return selectUser(state.members, action.payload.id);
    default:
      return state;
  }
};

export default crud;
