import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route } from "react-router-dom";

const LogicalReasoningIntroduction = lazy(() => import("./introduction/index"));
const LogicalReasoningTest = lazy(() => import("./test"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Route
          exact
          path="/tests/logical-reasoning"
          component={LogicalReasoningIntroduction}
        />
        <Route path="/tests/logical-reasoning/:testID" component={LogicalReasoningTest} />
      </Suspense>
    </>
  );
};

export default Tests;
