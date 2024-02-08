export const headers = () => async (dispatch, getState) => {
  const {
    usersignin: { userInfo },
  } = getState;
  return userInfo;
};

export const errorMessage = (err) => {
  return err.response?.data.message ? err.response.data.message : err.message;
};
