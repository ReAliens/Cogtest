import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route } from "react-router-dom";

const DigitSymbolIntroduction = lazy(() => import("./introduction/index"));
const DigitSymbolTest = lazy(() => import("./test"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Route
          exact
          path="/tests/digit-symbol"
          component={DigitSymbolIntroduction}
        />
        <Route path="/tests/digit-symbol/:testID" component={DigitSymbolTest} />
      </Suspense>
    </>
  );
};

export default Tests;
