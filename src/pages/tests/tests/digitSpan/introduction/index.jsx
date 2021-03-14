import React from "react";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";

const DigitSpanIntroduction = () => {
  const { tests, testLoading } = useTests();
  const fifthTest = tests && tests.payload ? tests.payload[4] : null;

  return (
    <>
      {testLoading || !tests ? (
        <Loader />
      ) : (
        <Introduction
          testName={fifthTest?.name}
          testDesc={fifthTest?.desc}
          testLink={`/tests/digit-span/trial`}
        />
      )}
    </>
  );
};

export default DigitSpanIntroduction;
