import { Icon, Typography } from 'polpo/ui';
import { useState } from 'react';

import { LyricCopyStyle } from './lyric-copy.style';

export const LyricCopy = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <LyricCopyStyle>
      <section className='copy-header'>
        <Typography variant='header4' weight='bold' className='copy-title'>
          Welcome to Lyric Music
        </Typography>

        <Icon name='cross' className='copy-header--close' onClick={() => setIsOpen(false)} />
      </section>

      <section className='copy-content'>
        <Typography>
          We’re thrilled to have you join us on this musical journey! Lyric Music is your gateway to a fresh and
          immersive way to enjoy the bands and artists you love. Whether you&#39;re searching for your all-time favorite
          tracks, exploring curated playlists crafted to fit every mood, or discovering new songs that will soon become
          your go-to anthems, Lyric Music is here to elevate your listening experience.
        </Typography>

        <Typography>
          Imagine having the perfect soundtrack for every moment of your life, from energizing workouts to peaceful
          evenings under the stars. With an intuitive interface designed to make finding music effortless and enjoyable,
          you’ll spend less time searching and more time grooving. Best of all, it’s completely free—because we believe
          that great music should be accessible to everyone.
        </Typography>

        <Typography>
          At Lyric Music, we’re passionate about creating a community where music lovers like you can explore, connect,
          and celebrate the power of sound. So dive in, press play, and let the music move you. Welcome to your new
          favorite way to listen.
        </Typography>
      </section>

      <section className='copy-footer'>
        <Icon name='crossed-flag' className='copy-footer--icon' />
        <section className='copy-footer--content'>
          <Typography variant='header4' weight='bold' noPadding className='copy-title'>
            Comming soon
          </Typography>
          <Typography noPadding variant='small'>
            Check out whats new for 2025 from the Lyric team.
          </Typography>
        </section>
      </section>
    </LyricCopyStyle>
  );
};
