import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../../../../components/Loader";

const DigitSpanIntroduction = lazy(() => import("./introduction/index"));
const DigitSpanTest = lazy(() => import("./test"));
const DigitSpanTrial = lazy(() => import("./trial"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            exact
            path="/tests/digit-span"
            component={DigitSpanIntroduction}
          />
          <Route
            exact
            path="/tests/digit-span/trial"
            component={DigitSpanTrial}
          />
          <Route path="/tests/digit-span/:testID" component={DigitSpanTest} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Tests;
