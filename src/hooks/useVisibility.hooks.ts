import { useState, useCallback, useMemo } from 'react';

export function useVisibility(initialState: boolean = false) {
  const [visibility, setVisibility] = useState<boolean>(initialState);

  const handleToggleVisibility = useCallback(() => {
    setVisibility(!visibility);
  }, [visibility]);

  return useMemo(
    () => ({
      handleToggleVisibility,
      visibility
    }),
    [handleToggleVisibility, visibility]
  );
}
