import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import FinishPage from "../../../../../components/TestFinishPage";
import useTests from "../../../../../hooks/useTests";

const ReverseDigitSpanIntroduction = () => {
  const { tests, testLoading } = useTests();
  const sixthTest = tests && tests.payload ? tests.payload[5] : null;
  const nextTest = tests && tests.payload ? tests.payload[4] : null;
  const history = useHistory();
  const testsFilteration = tests?.payload?.filter(
    (test) => test.is_open === true
  );
  const lastElement = testsFilteration?.slice().pop();

  return (
    <>
      {testLoading || !tests || !sixthTest ? (
        <Loader />
      ) : sixthTest?.is_open === true ? (
        <Introduction
          testName={sixthTest?.name}
          testDesc={sixthTest?.desc}
          testLink={`/tests/reverse-digit-span/trial`}
        />
      ) : lastElement?.id === nextTest?.id ? (
        <FinishPage type="lastExam" />
      ) : (
        history.push("/tests/digit-symbol")
      )}
    </>
  );
};

export default ReverseDigitSpanIntroduction;
