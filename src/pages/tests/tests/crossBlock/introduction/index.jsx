import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";

const CrossBlockIntroduction = () => {
  const { tests, testLoading } = useTests();
  const thirdTest = tests && tests.payload ? tests.payload[2] : null;
  const history = useHistory();

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
      ) : (
        history.push("/tests/reverse-corsi")
      )}
    </>
  );
};

export default CrossBlockIntroduction;
