import axios from "axios";
import { useCallback, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useUserInfo = () => {
  const [submitUserInfoLoading, setSubmitUserInfoLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const submitUserInfo = useCallback(
    async (userInfo) => {
      setSubmitUserInfoLoading(true);
      try {
        const res = await axios.post(`${API_ROOT}/add-user`, userInfo);
        setSubmitUserInfoLoading(false);
        setUserInfo(res.data.payload);
        return res.data;
      } catch (err) {
        console.dev(err);
        setSubmitUserInfoLoading(false);
        throw err;
      }
    },
    [setSubmitUserInfoLoading, setUserInfo]
  );

  return {
    submitUserInfo,
    submitUserInfoLoading,
    userInfo,
  };
};

export default useUserInfo;
