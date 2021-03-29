import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import FinishPage from "../../../../../components/TestFinishPage";
import useTests from "../../../../../hooks/useTests";

const ReversCrossBlockIntroduction = () => {
  const { tests, testLoading } = useTests();
  const fourthTest = tests && tests.payload ? tests.payload[3] : null;
  const lastTest = tests && tests.payload ? tests.payload[2] : null;
  const history = useHistory();
  const testsFilteration = tests?.payload?.filter(
    (test) => test.is_open === true
  );
  const lastElement = testsFilteration?.slice().pop();
  return (
    <>
      {testLoading || !tests || !fourthTest ? (
        <Loader />
      ) : fourthTest?.is_open === true ? (
        <Introduction
          testName={fourthTest?.name}
          testDesc={fourthTest?.desc}
          testLink={`/tests/reverse-corsi/trial`}
        />
      ) : lastElement?.id === lastTest?.id ? (
        <FinishPage type="lastExam" />
      ) : (
        history.push("/tests/digit-span")
      )}
    </>
  );
};

export default ReversCrossBlockIntroduction;
