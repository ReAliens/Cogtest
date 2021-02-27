import React, { lazy, Suspense } from "react";
import { Text } from "@chakra-ui/react";
import { Route } from "react-router-dom";

const StroopIntroduction = lazy(() => import("./tests/stroop"));
const FlankerIntroduction = lazy(() => import("./tests/flanker"));
const DigitSymbolIntroduction = lazy(() => import("./tests/digitSymbol"));
const InhibitionIntroduction = lazy(() => import("./tests/inhibition"));
const LogicalReasoningIntroduction = lazy(() => import("./tests/logicalReasoning"));

const Tests = () => {
  return (
    <>
      <Suspense fallback={<Text>Loading</Text>}>
        <Route path="/tests/stroop" component={StroopIntroduction} />
        <Route path="/tests/flanker" component={FlankerIntroduction} />
        <Route path="/tests/digit-symbol" component={DigitSymbolIntroduction} />
        <Route path="/tests/inhibition" component={InhibitionIntroduction} />
        <Route path="/tests/logical-reasoning" component={LogicalReasoningIntroduction} />
      </Suspense>
    </>
  );
};

export default Tests;
