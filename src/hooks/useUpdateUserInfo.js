import axios from "axios";
import { useCallback, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useUpdateUserInfo = () => {
  const [
    submitUpdateUserInfoLoading,
    setSubmitUpdateUserInfoLoading,
  ] = useState(false);

  const submitUpdateUserInfo = useCallback(
    async (userInfo) => {
      setSubmitUpdateUserInfoLoading(true);
      try {
        const res = await axios.post(`${API_ROOT}/update-user`, userInfo);
        setSubmitUpdateUserInfoLoading(false);
        return res.data;
      } catch (err) {
        console.log(err);
        setSubmitUpdateUserInfoLoading(false);
        throw err;
      }
    },
    [setSubmitUpdateUserInfoLoading]
  );

  return {
    submitUpdateUserInfo,
    submitUpdateUserInfoLoading,
  };
};

export default useUpdateUserInfo;
