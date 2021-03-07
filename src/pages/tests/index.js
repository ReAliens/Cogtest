import React, { lazy, Suspense, useContext } from "react";
import { Text } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import { UserInfoContext } from "../../contexts/userContext";

const StroopIntroduction = lazy(() => import("./tests/stroop"));
const FlankerIntroduction = lazy(() => import("./tests/flanker"));
const CrossBlockIntroduction = lazy(() => import("./tests/crossBlock"));
const ReverseCrossBlockIntroduction = lazy(() =>
  import("./tests/reverseCrossBlock")
);
const DigitSymbolIntroduction = lazy(() => import("./tests/digitSymbol"));
const InhibitionIntroduction = lazy(() => import("./tests/inhibition"));
const LogicalReasoningIntroduction = lazy(() =>
  import("./tests/logicalReasoning")
);

const Tests = () => {
  const { userInfo } = useContext(UserInfoContext);
  return (
    
    <Suspense fallback={<Text>Loading</Text>}>
      <Route path="/tests/stroop" component={StroopIntroduction} />
      <Route path="/tests/flanker" component={FlankerIntroduction} />
      <Route path="/tests/corsi" component={CrossBlockIntroduction} />
      <Route
        path="/tests/reverse-corsi"
        component={ReverseCrossBlockIntroduction}
      />
      <Route path="/tests/digit-symbol" component={DigitSymbolIntroduction} />
      <Route path="/tests/inhibition" component={InhibitionIntroduction} />
      <Route
        path="/tests/logical-reasoning"
        component={LogicalReasoningIntroduction}
      />
    </Suspense>
  );
};

export default Tests;
