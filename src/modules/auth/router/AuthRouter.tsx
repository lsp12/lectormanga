import { Route, Routes } from 'react-router-dom';
import NotFound404 from '../../shared/errors/NotFound404';
import Authentication from '../pages/Authentication';

const AuthRouter = () => (
  <Routes>
    <Route path="/login" element={<Authentication title="Login into your account" />} />
    <Route
      path="*"
      element={(
        <NotFound404 /> )}
    />
  </Routes>
);

export default AuthRouter;
