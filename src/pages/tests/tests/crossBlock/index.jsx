import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../../../../components/Loader";

const CrossBlockIntroduction = lazy(() => import("./introduction/index"));
const CrossBlockTest = lazy(() => import("./test"));
const CrossBlockTrial = lazy(() => import("./trial"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/tests/corsi" component={CrossBlockIntroduction} />
          <Route exact path="/tests/corsi/trial" component={CrossBlockTrial} />
          <Route path="/tests/corsi/:testID" component={CrossBlockTest} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Tests;
