import { Icon, Typography } from 'juanmsl/ui';
import { useMemo } from 'react';

import { MainPageMessageStyle, MainPageStyle } from './main.style';

import { LoaderComponent } from '@components/loaders';
import { BandCard } from '@components/ui';
import { BandFilter, useBandFilters } from '@contexts';
import { useGetBands } from '@hooks';

export const MainPage = () => {
  const { category, searchValue } = useBandFilters();
  const { bands = [], isLoading, error } = useGetBands();

  const filteredBands = useMemo(() => {
    if (category === BandFilter.All && searchValue === '') {
      return bands;
    }

    if (category === BandFilter.All && searchValue !== '') {
      return bands.filter(band => band.band_name.toLowerCase().includes(searchValue.toLowerCase()));
    }

    if (category !== BandFilter.All && searchValue === '') {
      return bands.filter(band => band.genre === category);
    }

    return bands.filter(
      band => band.genre === category && band.band_name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [bands, category, searchValue]);

  if (error) {
    return (
      <MainPageMessageStyle>
        <Icon className='message-icon' name='exclamation-close' inCircle size={90} />
        <Typography className='message-title' variant='header3'>
          Something went wrong
        </Typography>
        <Typography noPadding>{error.message}</Typography>
      </MainPageMessageStyle>
    );
  }

  if (filteredBands.length === 0 && !isLoading) {
    return (
      <MainPageMessageStyle>
        <Icon className='message-icon' name='exclamation-close' inCircle size={90} />
        <Typography className='message-title' variant='header3'>
          No bands found
        </Typography>
        <Typography noPadding>Any band match your parameters</Typography>
      </MainPageMessageStyle>
    );
  }

  return (
    <LoaderComponent isPending={isLoading}>
      <MainPageStyle>
        {filteredBands.map(band => (
          <BandCard band={band} key={band.id} />
        ))}
      </MainPageStyle>
    </LoaderComponent>
  );
};
