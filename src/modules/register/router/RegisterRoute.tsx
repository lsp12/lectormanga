import { Route, Routes } from 'react-router-dom';
import NotFound404 from '../../shared/errors/NotFound404';
import { Register } from '../pages/Register';

function RegisterRouter() {
  return (
    <Routes>
      <Route path="/register" element={<Register title="Create your account" />} />
      <Route
        path="*"
        element={(
          <NotFound404 /> )}
      />
    </Routes>
  );
}

export default RegisterRouter;
