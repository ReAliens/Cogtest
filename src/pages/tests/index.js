import React, { lazy, Suspense, useContext } from "react";
import { Route, useHistory } from "react-router-dom";
import { UserInfoContext } from "../../contexts/userContext";
import Loader from "../../components/Loader";

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

const DigitSpanIntroduction = lazy(() => import("./tests/digitSpan"));
const ReverseDigitSpanIntroduction = lazy(() =>
  import("./tests/reverseDigitSpan")
);

const Tests = () => {
  const { userInfo } = useContext(UserInfoContext);
  const history = useHistory();
  return (
    <>
      <Suspense fallback={<Loader />}>
        {userInfo ? (
          <>
            <Route path="/tests/stroop" component={StroopIntroduction} />
            <Route path="/tests/flanker" component={FlankerIntroduction} />
            <Route path="/tests/corsi" component={CrossBlockIntroduction} />
            <Route
              path="/tests/reverse-corsi"
              component={ReverseCrossBlockIntroduction}
            />
            <Route path="/tests/digit-span" component={DigitSpanIntroduction} />
            <Route
              path="/tests/reverse-digit-span"
              component={ReverseDigitSpanIntroduction}
            />
            <Route
              path="/tests/digit-symbol"
              component={DigitSymbolIntroduction}
            />
            <Route
              path="/tests/inhibition"
              component={InhibitionIntroduction}
            />
            <Route
              path="/tests/logical-reasoning"
              component={LogicalReasoningIntroduction}
            />
          </>
        ) : (
          history.push("/")
        )}
      </Suspense>
    </>
  );
};

export default Tests;
