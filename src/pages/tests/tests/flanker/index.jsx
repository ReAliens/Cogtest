import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route } from "react-router-dom";

const FlankerIntroduction = lazy(() => import("./introduction/index"));
const FlankerTest = lazy(() => import("./test"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Route exact path="/tests/flanker" component={FlankerIntroduction} />
        <Route path="/tests/flanker/:testID" component={FlankerTest} />
      </Suspense>
    </>
  );
};

export default Tests;
