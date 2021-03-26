import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";

const StrropIntroduction = () => {
  const { tests, testLoading } = useTests();
  const firstTest = tests && tests.payload ? tests.payload[0] : null;
  const history = useHistory();
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
      ) : (
        history.push("/tests/flanker")
      )}
    </>
  );
};

export default StrropIntroduction;
