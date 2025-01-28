import { HoverCard, Image, Ripple, Typography } from 'polpo/ui';
import { useState } from 'react';
import { useTheme } from 'styled-components';

import { BandCardStyle } from './band-card.style';

import { DEFAULT_BAND_DESCRIPTION, DEFAULT_BAND_IMAGE } from '@core/constants';
import { Band } from '@domain';
import { useGetBandDetails } from '@hooks';

type BandCardProps = {
  band: Band;
};

export const BandCard = ({ band }: BandCardProps) => {
  const [imageName, setImageName] = useState(`im${band.id}.png`);
  const theme = useTheme();
  const {
    band: { description },
  } = useGetBandDetails(band.id);

  return (
    <HoverCard>
      <BandCardStyle>
        <Image
          className='band-image'
          src={`/images/${imageName}`}
          alt={band.band_name}
          onError={() => setImageName(DEFAULT_BAND_IMAGE)}
        />
        <section className='band-data-content'>
          <Typography variant='header4' className='band-name' noPadding>
            {band.band_name}
          </Typography>
          <Typography className='band-album' variant='small' noPadding>
            {band.album} - {band.genre}
          </Typography>
          <Typography className='band-description' variant='label' noPadding>
            {description || DEFAULT_BAND_DESCRIPTION}
          </Typography>
        </section>
        <Ripple color={theme.colors.text.main} />
      </BandCardStyle>
    </HoverCard>
  );
};
