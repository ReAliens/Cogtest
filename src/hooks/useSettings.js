import axios from "axios";
import { useEffect, useState } from "react";
import { API_ROOT } from "../shared/constants";

const useSettings = (testID) => {
  const [settingsLoading, setSettingsLoading] = useState(false);

  const [settings, setSettings] = useState({});

  useEffect(() => {
    const settingsCallback = async () => {
      setSettingsLoading(true);
      try {
        const response = await axios.get(`${API_ROOT}/settings`);
        setSettingsLoading(false);
        setSettings(response.data);
      } catch (err) {
        console.log(
          "=============== REQUEST ERROR =========================== "
        );
        console.log(err);
        setSettingsLoading(false);
        return null;
      }
    };
    settingsCallback();
  }, [setSettings]);

  return {
    settings,
    settingsLoading,
  };
};

export default useSettings;
