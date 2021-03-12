import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

const StroopIntroduction = lazy(() => import("./introduction/index"));
const StroopTest = lazy(() => import("./test"));
const StroopTrialTest = lazy(() => import("./trial"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Switch>
          <Route exact path="/tests/stroop" component={StroopIntroduction} />
          <Route exact path="/tests/stroop/trial" component={StroopTrialTest} />
          <Route exact path="/tests/stroop/:testID" component={StroopTest} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Tests;
