import axios from "axios";
import { useEffect, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useSettings = (testID) => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const settingsCallback = async () => {
      try {
        const response = await axios.get(`${API_ROOT}/settings`);
        setSettings(response.data);
      } catch (err) {
        console.log(
          "=============== REQUEST ERROR =========================== "
        );
        console.log(err);
        return null;
      }
    };
    settingsCallback();
  }, [setSettings]);

  return {
    settings,
  };
};

export default useSettings;
