import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";

const DigitSpanIntroduction = () => {
  const { tests, testLoading } = useTests();
  const fifthTest = tests && tests.payload ? tests.payload[4] : null;
  const history = useHistory();

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
      ) : (
        history.push("/tests/reverse-digit-span")
      )}
    </>
  );
};

export default DigitSpanIntroduction;
