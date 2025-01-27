import { useEffect, useState } from 'react';

import { BandDetails } from '@domain';
import { BandsController, BandsAdapter } from '@infrastructure';

export const useGetBandDetails = (bandId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [band, setBand] = useState<BandDetails>({} as BandDetails);

  useEffect(() => {
    const adapter = new BandsAdapter();
    const controller = new BandsController(adapter);

    controller
      .getBandDetails(bandId)
      .then(bands => setBand(bands))
      .catch(error => {
        setError(error);
        setBand({} as BandDetails);
      })
      .finally(() => setIsLoading(false));
  }, [bandId]);

  return { band, isLoading, error };
};
