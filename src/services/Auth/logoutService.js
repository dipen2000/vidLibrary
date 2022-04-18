const logoutService = ({ setIsUserLoggedIn, userDataDispatch }) => {
  setIsUserLoggedIn(false);
  localStorage.clear("token");
  localStorage.clear("user");
  userDataDispatch({ type: "LOGOUT_USER" });
};

export { logoutService };
