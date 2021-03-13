import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../../../../components/Loader";

const DigitSymbolIntroduction = lazy(() => import("./introduction/index"));
const DigitSymbolTest = lazy(() => import("./test"));
const DigitSymbolTrial = lazy(() => import("./trial"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            exact
            path="/tests/digit-symbol"
            component={DigitSymbolIntroduction}
          />
          <Route
            exact
            path="/tests/digit-symbol/trial"
            component={DigitSymbolTrial}
          />

          <Route
            path="/tests/digit-symbol/:testID"
            component={DigitSymbolTest}
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default Tests;
