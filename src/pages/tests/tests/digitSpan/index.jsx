import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

const DigitSpanIntroduction = lazy(() => import("./introduction/index"));
const DigitSpanTest = lazy(() => import("./test"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Switch>
          <Route
            exact
            path="/tests/digit-span"
            component={DigitSpanIntroduction}
          />
          <Route path="/tests/digit-span/:testID" component={DigitSpanTest} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Tests;
