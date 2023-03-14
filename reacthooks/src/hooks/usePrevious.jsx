import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef;
  useDebugValue("-- CUSTOM HOOK USEDEBUGVALUE --");
  useDebugValue("O número anterio é:" + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
