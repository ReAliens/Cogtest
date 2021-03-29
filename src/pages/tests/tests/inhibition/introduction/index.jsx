import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import FinishPage from "../../../../../components/TestFinishPage";
import useTests from "../../../../../hooks/useTests";

const InhibitionIntroduction = () => {
  const { tests, testLoading } = useTests();
  const eightsTest = tests && tests.payload ? tests.payload[7] : null;
  const nextTest = tests && tests.payload ? tests.payload[6] : null;
  const history = useHistory();
  const testsFilteration = tests?.payload?.filter(
    (test) => test.is_open === true
  );
  const lastElement = testsFilteration?.slice().pop();

  return (
    <>
      {testLoading || !tests || !eightsTest ? (
        <Loader />
      ) : eightsTest?.is_open === true ? (
        <Introduction
          testName={eightsTest?.name}
          testDesc={eightsTest?.desc}
          testLink={`/tests/inhibition/trial`}
        />
      ) : lastElement?.id === nextTest?.id ? (
        <FinishPage type="lastExam" />
      ) : (
        history.push("/tests/logical-reasoning")
      )}
    </>
  );
};

export default InhibitionIntroduction;
