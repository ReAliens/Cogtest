import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route } from "react-router-dom";

const Introduction = lazy(() => import("./tests/colorTest"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Route path="/tests" component={Introduction} />
      </Suspense>
    </>
  );
};

export default Tests;
