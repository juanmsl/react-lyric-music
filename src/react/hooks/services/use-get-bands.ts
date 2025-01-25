import { useEffect, useState } from 'react';

import { Band } from '@domain';
import { BandsController, BandsAdapter } from '@infrastructure';

export const useGetBands = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [bands, setBands] = useState<Array<Band>>([]);

  useEffect(() => {
    const adapter = new BandsAdapter();
    const controller = new BandsController(adapter);

    controller
      .getBands()
      .then(bands => setBands(bands))
      .catch(error => {
        setError(error);
        setBands([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { bands, isLoading, error };
};
