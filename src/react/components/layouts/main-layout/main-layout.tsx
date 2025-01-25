import { Outlet } from 'react-router-dom';

import { MainLayoutStyle } from './main-layout.style';

import { PageTransition } from '@components/animations';
import { Navbar, LyricCopy } from '@components/ui';

export const MainLayout = () => {
  return (
    <PageTransition>
      <MainLayoutStyle>
        <section>
          <Navbar />
          <Outlet />
        </section>
        <LyricCopy />
      </MainLayoutStyle>
    </PageTransition>
  );
};
