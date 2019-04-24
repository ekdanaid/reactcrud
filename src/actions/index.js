export const actionA = () => {
  return function(dispatch) {
    dispatch({
      type: 'USER_SELECT',
      payload: 'got it from Action A'
    });
  };
};
