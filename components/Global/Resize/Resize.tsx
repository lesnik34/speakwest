import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { isRetina, isDesktopWidth, isTabletWidth } from "@utils/scales";
import {
  setDesktop,
  setTablet,
  setMobile,
  setRetina,
} from "@store/slices/global";

const Resize = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
    // eslint-disable-next-line
  }, []);

  const resizeHandler = () => {
    if (isDesktopWidth()) {
      dispatch(setDesktop());
    } else if (isTabletWidth()) {
      dispatch(setTablet());
    } else {
      dispatch(setMobile());
    }

    if (isRetina()) {
      dispatch(setRetina(true));
    } else {
      dispatch(setRetina(false));
    }
  };

  return null;
};

export default Resize;
