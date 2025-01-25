import { Image, Typography } from 'juanmsl/ui';

import { LyricLogoStyles } from './lyric-logo.style';

type LyricLogoProps = {
  size?: number | `${number}`;
};

export const LyricLogo = ({ size = 163 }: LyricLogoProps) => {
  return (
    <LyricLogoStyles size={size}>
      <Image className='logo-image' src='/images/lyric_lg_rgb_mnt_wht.png' alt='Lyric Logo' />
      <Typography weight='bold' noPadding className='logo-title'>
        Music
      </Typography>
    </LyricLogoStyles>
  );
};
