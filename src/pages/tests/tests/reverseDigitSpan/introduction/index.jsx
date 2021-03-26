import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";

const ReverseDigitSpanIntroduction = () => {
  const { tests, testLoading } = useTests();
  const sixthTest = tests && tests.payload ? tests.payload[5] : null;
  const history = useHistory();

  return (
    <>
      {testLoading || !tests || !sixthTest ? (
        <Loader />
      ) : sixthTest?.is_open === true ? (
        <Introduction
          testName={sixthTest?.name}
          testDesc={sixthTest?.desc}
          testLink={`/tests/reverse-digit-span/trial`}
        />
      ) : (
        history.push("/tests/digit-symbol")
      )}
    </>
  );
};

export default ReverseDigitSpanIntroduction;
