import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route } from "react-router-dom";

const ReverseCrossBlockIntroduction = lazy(() => import("./introduction/index"));
const ReverseCrossBlockTest = lazy(() => import("./test"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Route exact path="/tests/reverse-corsi" component={ReverseCrossBlockIntroduction} />
        <Route path="/tests/reverse-corsi/:testID" component={ReverseCrossBlockTest} />
      </Suspense>
    </>
  );
};

export default Tests;
