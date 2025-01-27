import { HoverCard, Image, Ripple, Typography } from 'juanmsl/ui';
import { useState } from 'react';
import { useTheme } from 'styled-components';

import { BandCardStyle } from './band-card.style';

import { Band } from '@domain';
import { useGetBandDetails } from '@hooks';

const defaultDescription =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus et fugit id ipsa iusto libero modi, nobis nostrum nulla odit possimus quod ratione, reprehenderit, totam. Assumenda atque eaque earum ex exercitationem illum iste laudantium maxime nulla officiis, repellendus sunt? A alias assumenda deleniti ipsum omnis recusandae, repellat saepe vero?';

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
          onError={() => setImageName('default.png')}
        />
        <section className='band-data-content'>
          <Typography variant='header4' className='band-name' noPadding>
            {band.band_name}
          </Typography>
          <Typography className='band-album' variant='small' noPadding>
            {band.album} - {band.genre}
          </Typography>
          <Typography className='band-description' variant='label' noPadding>
            {description || defaultDescription}
          </Typography>
        </section>
        <Ripple color={theme.colors.text.main} />
      </BandCardStyle>
    </HoverCard>
  );
};
