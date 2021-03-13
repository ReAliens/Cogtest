import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../../../../components/Loader";

const ReverseCrossBlockIntroduction = lazy(() =>
  import("./introduction/index")
);
const ReverseCrossBlockTest = lazy(() => import("./test"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Route
          exact
          path="/tests/reverse-corsi"
          component={ReverseCrossBlockIntroduction}
        />
        <Route
          path="/tests/reverse-corsi/:testID"
          component={ReverseCrossBlockTest}
        />
      </Suspense>
    </>
  );
};

export default Tests;
