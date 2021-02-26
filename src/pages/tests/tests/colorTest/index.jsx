import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route } from "react-router-dom";

const Introduction = lazy(() => import("./introduction/index"));
const StroopTest = lazy(() => import("./test"));

const Tests = () => {
  //   const testID = "stroopTest";
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Route exact path="/tests" component={Introduction} />
        <Route path="/tests/:testID" component={StroopTest} />
      </Suspense>
    </>
  );
};

export default Tests;
