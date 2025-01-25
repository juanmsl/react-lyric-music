import { useDimensions } from 'juanmsl/hooks';
import { Icon, IconNameT, Tooltip, Input } from 'juanmsl/ui';
import { useRef } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

import { FilterButton, NavbarContainerStyle, NavbarStyle } from './navbar.style';

import { LyricLogo } from '@components/ui';
import { BandFilter, useBandFilters } from '@contexts';
import { PATHS } from '@core/constants';

const filters = [
  {
    label: 'All',
    value: BandFilter.All,
  },
  {
    label: 'Country',
    value: BandFilter.Country,
  },
  {
    label: 'Rock',
    value: BandFilter.Rock,
  },
  {
    label: 'Pop',
    value: BandFilter.Pop,
  },
];

const actions = [
  {
    icon: 'bell' as IconNameT,
    path: PATHS.NOTIFICATIONS_URL,
    label: 'Notifications',
  },
  {
    icon: 'gear' as IconNameT,
    path: PATHS.CONFIGURATION_URL,
    label: 'Configuration',
  },
  {
    icon: 'message' as IconNameT,
    path: PATHS.MESSAGES_URL,
    label: 'Messages',
  },
];

export const Navbar = () => {
  const { category, setCategory, searchValue, setSearchValue } = useBandFilters();
  const navbarRef = useRef(null);
  const { width } = useDimensions(navbarRef);

  return (
    <NavbarContainerStyle ref={navbarRef}>
      <NavbarStyle>
        <Link to={PATHS.HOME_URL}>
          <LyricLogo />
        </Link>

        <Routes>
          <Route
            path={PATHS.HOME_URL}
            element={
              <section className={`navbar-filters ${width < 1000 ? 'navbar-hidden' : ''}`}>
                <section className='navbar-filters--categories'>
                  {filters.map(({ label, value }) => (
                    <FilterButton
                      key={value}
                      noPadding
                      className={value === category ? 'active' : ''}
                      onClick={() => setCategory(value)}
                    >
                      {label}
                    </FilterButton>
                  ))}
                </section>

                <section className='navbar-filters--input'>
                  <Input
                    name='search'
                    value={searchValue}
                    setValue={setSearchValue}
                    leftIcon='magnifying-glass'
                    className='navbar-input'
                  />
                </section>
              </section>
            }
            index
          />
          <Route path='*' element={<span />} />
        </Routes>

        <section className='navbar-actions'>
          {actions.map(({ icon, path, label }) => (
            <Tooltip content={label} position='bottom' offset={10} key={label}>
              <NavLink to={path} className='navbar-actions--link'>
                <Icon name={icon} />
              </NavLink>
            </Tooltip>
          ))}
        </section>
      </NavbarStyle>
    </NavbarContainerStyle>
  );
};
