import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../../../../components/Loader";

const FlankerIntroduction = lazy(() => import("./introduction/index"));
const FlankerTest = lazy(() => import("./test"));
const FlankerTrial = lazy(() => import("./trial"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/tests/flanker" component={FlankerIntroduction} />
          <Route exact path="/tests/flanker/trial" component={FlankerTrial} />
          <Route path="/tests/flanker/:testID" component={FlankerTest} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Tests;
