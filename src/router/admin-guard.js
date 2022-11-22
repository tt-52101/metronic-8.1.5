const isAuthenticatedGuard = (to, from, next) => {
  return new Promise(() => {
    const admin = false;
    if (admin == true) {
      next();
    } else {
      console.log("bloqueado por el authenticatedGuard", admin);
    }
  });
};
export default isAuthenticatedGuard;
