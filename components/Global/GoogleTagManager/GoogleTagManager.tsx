import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

import { TAG_MANAGER_ARGS } from "@variables/global";

const GoogleTagManager = () => {
  useEffect(() => {
    TagManager.initialize(TAG_MANAGER_ARGS);
  }, []);

  return null;
};

export default GoogleTagManager;
