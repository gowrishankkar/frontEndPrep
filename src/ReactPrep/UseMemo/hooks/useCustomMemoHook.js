import { useEffect, useRef } from "react";

const useCustomMemo = (cb, deps) => {
  //Variable to store -> cached value

  const memoisedRef = useRef();

  // Check changes in deps

  const checkIsEqual = (prevDeps, nextDeps) => {
    if (prevDeps === null) return false;
    if (prevDeps.length !== nextDeps.length) return false;
    for (let i = 0; i < prevDeps.length; i++) {
      if (prevDeps[i] !== nextDeps[i]) {
        return false;
      }
    }
    return true;
  };
  if (!memoisedRef.current || !checkIsEqual(memoisedRef.current.deps, deps)) {
    memoisedRef.current = {
      value: cb(),
      deps,
    };
  }
  // Clean up logic

  useEffect(() => {
    return () => {
      memoisedRef.current = null;
    };
  }, []);

  // return the memoised value if existing
  return memoisedRef.current.value;
};

export default useCustomMemo;
