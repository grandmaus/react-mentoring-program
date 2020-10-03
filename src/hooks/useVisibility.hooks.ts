import { useState, useCallback, useMemo } from 'react';

export function useVisibility(initialState = false) {
  const [visibility, setVisibility] = useState<boolean>(initialState);

  const handleToggleVisibility = useCallback(() => {
    setVisibility(!visibility);
  }, [visibility]);

  const addVisibility = useCallback(() => {
    setVisibility(true);
  }, []);

  return useMemo(
    () => ({
      handleToggleVisibility,
      addVisibility,
      visibility
    }),
    [handleToggleVisibility, addVisibility, visibility]
  );
}
