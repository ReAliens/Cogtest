import React from "react";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";

const ReverseDigitSpanIntroduction = () => {
  const { tests, testLoading } = useTests();
  const sixthTest = tests && tests.payload ? tests.payload[5] : null;

  return (
    <>
      {testLoading || !tests ? (
        <Loader />
      ) : (
        <Introduction
          testName={sixthTest?.name}
          testDesc={sixthTest?.desc}
          testLink={`/tests/reverse-digit-span/trial`}
        />
      )}
    </>
  );
};

export default ReverseDigitSpanIntroduction;
