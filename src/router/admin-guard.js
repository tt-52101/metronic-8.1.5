const isAuthenticatedGuard = async (to, from, next) => {
  return new Promise(() => {
    const random = Math.random() * 100;
    if (random > 50) {
      console.log("esta autenticado");
      next();
    } else {
      console.log("bloqueado por el authenticatedGuard", random);
      //next();
    }
  });
};
export default isAuthenticatedGuard;
