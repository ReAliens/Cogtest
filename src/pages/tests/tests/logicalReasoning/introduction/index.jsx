import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";

const LogicalReasoningIntroduction = () => {
  const { tests, testLoading } = useTests();
  const ninthTest = tests && tests.payload ? tests.payload[8] : null;
  const history = useHistory();
  return (
    <>
      {testLoading || !tests || !ninthTest ? (
        <Loader />
      ) : ninthTest?.is_open === true ? (
        <Introduction
          testName={ninthTest?.name}
          testDesc={ninthTest?.desc}
          testLink={`/tests/logical-reasoning/trial`}
        />
      ) : (
        history.push("/")
      )}
    </>
  );
};

export default LogicalReasoningIntroduction;
