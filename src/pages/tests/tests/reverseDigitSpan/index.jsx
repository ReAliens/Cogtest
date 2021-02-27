import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route } from "react-router-dom";

const CrossBlockIntroduction = lazy(() => import("./introduction/index"));
const CrossBlockTest = lazy(() => import("./test"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Route exact path="/tests/corsi" component={CrossBlockIntroduction} />
        <Route path="/tests/corsi/:testID" component={CrossBlockTest} />
      </Suspense>
    </>
  );
};

export default Tests;
