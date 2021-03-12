import axios from "axios";
import { useCallback, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useUserInfo = () => {
  const [submitUserInfoLoading, setSubmitUserInfoLoading] = useState(false);

  const submitUserInfo = useCallback(
    async (userInfo) => {
      setSubmitUserInfoLoading(true);
      try {
        const res = await axios.post(`${API_ROOT}/add-user`, userInfo);
        setSubmitUserInfoLoading(false);
        return res.data;
      } catch (err) {
        console.log(err);
        setSubmitUserInfoLoading(false);
        throw err;
      }
    },
    [setSubmitUserInfoLoading]
  );

  return {
    submitUserInfo,
    submitUserInfoLoading,
  };
};

export default useUserInfo;
