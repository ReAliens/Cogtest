const routes = {
  home: {
    index: () => "/",
  },
  auth: {
    register: () => "/register",
  },
  tests: {
    index: () => "/tests",
    testPage: (testID = "testID") => `/tests/${testID}`,
  },
};

export default routes;
