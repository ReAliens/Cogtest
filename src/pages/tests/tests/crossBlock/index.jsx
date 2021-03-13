import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../../../../components/Loader";

const CrossBlockIntroduction = lazy(() => import("./introduction/index"));
const CrossBlockTest = lazy(() => import("./test"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Route exact path="/tests/corsi" component={CrossBlockIntroduction} />
        <Route path="/tests/corsi/:testID" component={CrossBlockTest} />
      </Suspense>
    </>
  );
};

export default Tests;
