import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import FinishPage from "../../../../../components/TestFinishPage";
import useTests from "../../../../../hooks/useTests";

const DigitSpanIntroduction = () => {
  const { tests, testLoading } = useTests();
  const fifthTest = tests && tests.payload ? tests.payload[4] : null;
  const nextTest = tests && tests.payload ? tests.payload[3] : null;
  const history = useHistory();
  const testsFilteration = tests?.payload?.filter(
    (test) => test.is_open === true
  );
  const lastElement = testsFilteration?.slice().pop();
  return (
    <>
      {testLoading || !tests || !fifthTest ? (
        <Loader />
      ) : fifthTest?.is_open === true ? (
        <Introduction
          testName={fifthTest?.name}
          testDesc={fifthTest?.desc}
          testLink={`/tests/digit-span/trial`}
        />
      ) : lastElement?.id === nextTest?.id ? (
        <FinishPage type="lastExam" />
      ) : (
        history.push("/tests/reverse-digit-span")
      )}
    </>
  );
};

export default DigitSpanIntroduction;
