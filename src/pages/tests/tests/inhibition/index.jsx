import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

const InhibitionIntroduction = lazy(() => import("./introduction/index"));
const InhibitionTest = lazy(() => import("./test"));
const InhibitionTrialTest = lazy(() => import("./trial"));


const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Switch>
          <Route
            exact
            path="/tests/inhibition"
            component={InhibitionIntroduction}
          />
          <Route
            exact
            path="/tests/inhibition/trial"
            component={InhibitionTrialTest}
          />

          <Route path="/tests/inhibition/:testID" component={InhibitionTest} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Tests;
