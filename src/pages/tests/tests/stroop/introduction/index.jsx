import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import FinishPage from "../../../../../components/TestFinishPage";
import useTests from "../../../../../hooks/useTests";

const StrropIntroduction = () => {
  const { tests, testLoading } = useTests();
  const firstTest = tests && tests.payload ? tests.payload[0] : null;
  const history = useHistory();
  const testsFilteration = tests?.payload?.filter(
    (test) => test.is_open === true
  );
  const lastElement = testsFilteration?.slice().pop();
  return (
    <>
      {testLoading || !tests || !firstTest ? (
        <Loader />
      ) : firstTest?.is_open === true ? (
        <Introduction
          testName={firstTest?.name}
          testDesc={firstTest?.desc}
          testLink={`/tests/stroop/trial`}
        />
      ) : lastElement?.id === firstTest?.id ? (
        <FinishPage type="lastExam" />
      ) : (
        history.push("/tests/flanker")
      )}
    </>
  );
};

export default StrropIntroduction;
