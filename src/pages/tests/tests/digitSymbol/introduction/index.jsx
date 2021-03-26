import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";

const DigitSymbolIntroduction = () => {
  const { tests, testLoading } = useTests();
  const seventhTest = tests && tests.payload ? tests.payload[6] : null;
  const history = useHistory();

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
      ) : (
        history.push("/tests/inhibition")
      )}
    </>
  );
};

export default DigitSymbolIntroduction;
