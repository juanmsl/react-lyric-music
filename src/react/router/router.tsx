import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { MainLayout } from '@components/layouts';
import { CustomCursor } from '@components/ui';
import { PATHS } from '@core/constants';
import { ConfigurationPage, MainPage, MessagesPage, NotificationsPage } from '@pages';

export const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <CustomCursor />
      <Routes location={location} key={location.key}>
        <Route path='/' element={<MainLayout />}>
          <Route path={PATHS.HOME_URL} element={<MainPage />} index />
          <Route path={PATHS.CONFIGURATION_URL} element={<ConfigurationPage />} />
          <Route path={PATHS.NOTIFICATIONS_URL} element={<NotificationsPage />} />
          <Route path={PATHS.MESSAGES_URL} element={<MessagesPage />} />
          <Route path='*' element={<Navigate to={PATHS.HOME_URL} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
