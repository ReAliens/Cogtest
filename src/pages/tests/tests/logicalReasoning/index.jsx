import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

const LogicalReasoningIntroduction = lazy(() => import("./introduction/index"));
const LogicalReasoningTest = lazy(() => import("./test"));
const LogicalReasoningTrial = lazy(() => import("./trial"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Switch>
          <Route
            exact
            path="/tests/logical-reasoning"
            component={LogicalReasoningIntroduction}
          />
          <Route
            exact
            path="/tests/logical-reasoning/trial"
            component={LogicalReasoningTrial}
          />
          <Route
            path="/tests/logical-reasoning/:testID"
            component={LogicalReasoningTest}
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default Tests;
