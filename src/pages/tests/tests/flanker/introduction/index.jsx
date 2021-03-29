import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import FinishPage from "../../../../../components/TestFinishPage";
import useTests from "../../../../../hooks/useTests";

const FlankerIntroduction = () => {
  const { tests, testLoading } = useTests();
  const seconedTest = tests && tests.payload ? tests.payload[1] : null;
  const lastTest = tests && tests.payload ? tests.payload[0] : null;
  const history = useHistory();
  const testsFilteration = tests?.payload?.filter(
    (test) => test.is_open === true
  );
  const lastElement = testsFilteration?.slice().pop();
  return (
    <>
      {testLoading || !tests || !seconedTest ? (
        <Loader />
      ) : seconedTest?.is_open === true ? (
        <Introduction
          testName={seconedTest?.name}
          testDesc={seconedTest?.desc}
          testLink={`/tests/flanker/trial`}
        />
      ) : lastElement?.id === lastTest?.id ? (
        <FinishPage type="lastExam" />
      ) : (
        history.push("/tests/corsi")
      )}
    </>
  );
};

export default FlankerIntroduction;
