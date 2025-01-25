import { Outlet } from 'react-router-dom';

import { MainLayoutStyle } from './main-layout.style';

import { PageTransition } from '@components/animations';
import { Navbar, LyricCopy } from '@components/ui';

export const MainLayout = () => {
  return (
    <PageTransition>
      <MainLayoutStyle>
        <section className='navbar-container'>
          <Navbar />
        </section>
        <section className='content-container'>
          <Outlet />
        </section>
        <section className='copy-container'>
          <LyricCopy />
        </section>
      </MainLayoutStyle>
    </PageTransition>
  );
};
