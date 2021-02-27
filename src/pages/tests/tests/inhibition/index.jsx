import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route } from "react-router-dom";

const InhibitionIntroduction = lazy(() => import("./introduction/index"));
const InhibitionTest = lazy(() => import("./test"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Route
          exact
          path="/tests/inhibition"
          component={InhibitionIntroduction}
        />
        <Route path="/tests/inhibition/:testID" component={InhibitionTest} />
      </Suspense>
    </>
  );
};

export default Tests;
