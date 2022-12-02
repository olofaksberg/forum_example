/** @format */

import { createContext, useContext } from "react";

export const SmallScreenContext = createContext({
  isSmallScreen: null,
});
export const useSmallScreen = () => useContext(SmallScreenContext);
