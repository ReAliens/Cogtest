import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import FinishPage from "../../../../../components/TestFinishPage";
import useTests from "../../../../../hooks/useTests";

const DigitSymbolIntroduction = () => {
  const { tests, testLoading } = useTests();
  const seventhTest = tests && tests.payload ? tests.payload[6] : null;
  const nextTest = tests && tests.payload ? tests.payload[5] : null;
  const history = useHistory();
  const testsFilteration = tests?.payload?.filter(
    (test) => test.is_open === true
  );
  const lastElement = testsFilteration?.slice().pop();
  return (
    <>
      {testLoading || !tests || !seventhTest ? (
        <Loader />
      ) : seventhTest?.is_open === true ? (
        <Introduction
          testName={seventhTest?.name}
          testDesc={seventhTest?.desc}
          testLink={`/tests/digit-symbol/trial`}
        />
      ) : lastElement?.id === nextTest?.id ? (
        <FinishPage type="lastExam" />
      ) : (
        history.push("/tests/inhibition")
      )}
    </>
  );
};

export default DigitSymbolIntroduction;
