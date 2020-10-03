import { useCallback, useState, useMemo } from 'react';

export function useErrorImage(initialState = false) {
  const [errorImage, setErrorImage] = useState<boolean>(initialState);

  const handleErrorImage = useCallback(() => {
    setErrorImage(!errorImage);
  }, [errorImage]);

  return useMemo(
    () => ({
      handleErrorImage,
      errorImage
    }),
    [handleErrorImage, errorImage]
  );
}
