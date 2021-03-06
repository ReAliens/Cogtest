import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import useUserInfo from "../../../../hooks/useUserInfo";

const StroopIntroduction = lazy(() => import("./introduction/index"));
const StroopTest = lazy(() => import("./test"));

const Tests = () => {
  const { userInfo } = useUserInfo();
  console.log({ userInfo });
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Route exact path="/tests/stroop" component={StroopIntroduction} />
        <Route path="/tests/stroop/:testID" component={StroopTest} />
      </Suspense>
    </>
  );
};

export default Tests;
