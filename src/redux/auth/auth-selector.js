/* eslint-disable import/no-anonymous-default-export */

const getIsAuthenticated = state => state.auth.isLogIn;
const getUserName = state => state.auth.user.name;

export default { getIsAuthenticated, getUserName };
