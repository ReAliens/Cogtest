import axios from "axios";
import { useEffect, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useStaging = () => {
  const [stage, setStage] = useState({});
  const [stageLoading, setStageLoading] = useState(false);

  useEffect(() => {
    const stageCallback = async () => {
      setStageLoading(true);
      try {
        const response = await axios.get(`${API_ROOT}/stages`);
        setStage(response.data);
        setStageLoading(false);
      } catch (err) {
        console.log(err);
        setStageLoading(false);
        return null;
      }
    };
    stageCallback();
  }, [setStage]);

  return {
    stage,
    stageLoading,
  };
};

export default useStaging;
