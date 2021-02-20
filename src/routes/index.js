const routes = {
  home: {
    index: () => "/",
  },
  auth: {
    index: () => "/auth",
    login: () => "/auth/login",
    register: () => "/auth/register",
  },
  tests: {
    index: () => "/tests",
    testPage: (testID = "testID") => `/tests/${testID}`,
  },
};

export default routes;
