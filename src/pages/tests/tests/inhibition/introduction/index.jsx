import React from "react";
import { useHistory } from "react-router";
import Introduction from "../../../../../components/Introduction";
import Loader from "../../../../../components/Loader";
import useTests from "../../../../../hooks/useTests";

const InhibitionIntroduction = () => {
  const { tests, testLoading } = useTests();
  const eightsTest = tests && tests.payload ? tests.payload[7] : null;
  const history = useHistory();

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
      ) : (
        history.push("/tests/logical-reasoning")
      )}
    </>
  );
};

export default InhibitionIntroduction;
