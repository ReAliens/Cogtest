import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

const FlankerIntroduction = lazy(() => import("./introduction/index"));
const FlankerTest = lazy(() => import("./test"));
const FlankerTrial = lazy(() => import("./trial"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
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
