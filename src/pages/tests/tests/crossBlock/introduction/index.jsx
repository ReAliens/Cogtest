import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import FinishPage from "../../../../../components/TestFinishPage";
import useTests from "../../../../../hooks/useTests";

const CrossBlockIntroduction = () => {
  const { tests, testLoading } = useTests();
  const thirdTest = tests && tests.payload ? tests.payload[2] : null;
  const lastTest = tests && tests.payload ? tests.payload[1] : null;
  const history = useHistory();
  const testsFilteration = tests?.payload?.filter(
    (test) => test.is_open === true
  );
  const lastElement = testsFilteration?.slice().pop();
  return (
    <>
      {testLoading || !tests || !thirdTest ? (
        <Loader />
      ) : thirdTest?.is_open === true ? (
        <Introduction
          testName={thirdTest?.name}
          testDesc={thirdTest?.desc}
          testLink={`/tests/corsi/trial`}
        />
      ) : lastElement?.id === lastTest?.id ? (
        <FinishPage type="lastExam" />
      ) : (
        history.push("/tests/reverse-corsi")
      )}
    </>
  );
};

export default CrossBlockIntroduction;
