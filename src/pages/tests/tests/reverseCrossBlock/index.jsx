import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../../../../components/Loader";

const ReverseCrossBlockIntroduction = lazy(() =>
  import("./introduction/index")
);
const ReverseCrossBlockTest = lazy(() => import("./test"));
const ReverseCrossBlockTrial = lazy(() => import("./trial"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            exact
            path="/tests/reverse-corsi"
            component={ReverseCrossBlockIntroduction}
          />
          <Route
            exact
            path="/tests/reverse-corsi/trial"
            component={ReverseCrossBlockTrial}
          />
          <Route
            path="/tests/reverse-corsi/:testID"
            component={ReverseCrossBlockTest}
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default Tests;
