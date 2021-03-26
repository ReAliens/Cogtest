import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";

const ReversCrossBlockIntroduction = () => {
  const { tests, testLoading } = useTests();
  const fourthTest = tests && tests.payload ? tests.payload[3] : null;
  const history = useHistory();

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
      ) : (
        history.push("/tests/digit-span")
      )}
    </>
  );
};

export default ReversCrossBlockIntroduction;
