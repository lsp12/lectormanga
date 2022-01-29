import { Route, Routes } from 'react-router-dom';
import NotFound404 from '../../shared/errors/NotFound404';
import Profile from '../pages/Profile';

const ProfileRouter = () => (
  <Routes>
    <Route path="/" element={<Profile title="Lista de Órdenes" />} />
    <Route
      path="*"
      element={(
        <NotFound404 /> )}
    />
  </Routes>
);

export default ProfileRouter;
