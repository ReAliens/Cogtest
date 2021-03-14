import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../../../../components/Loader";

const ReverseDigitSpanIntroduction = lazy(() => import("./introduction/index"));
const ReverseDigitSpanTest = lazy(() => import("./test"));
const ReverseDigitSpanTrial = lazy(() => import("./trial"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            exact
            path="/tests/reverse-digit-span"
            component={ReverseDigitSpanIntroduction}
          />
          <Route
            exact
            path="/tests/reverse-digit-span/trial"
            component={ReverseDigitSpanTrial}
          />
          <Route
            path="/tests/reverse-digit-span/:testID"
            component={ReverseDigitSpanTest}
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default Tests;
