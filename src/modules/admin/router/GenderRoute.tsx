import { Route, Routes } from 'react-router-dom';
import NotFound404 from '../../shared/errors/NotFound404';
import { Category } from '../pages/Category';
import { Genders } from '../pages/Genders';
import { Lenguaje } from '../pages/Lenguaje';

function AdminRoute() {
  return (
    <Routes>
      <Route path="/gender" element={<Genders title="Register Genders" />} />
      <Route path="/category" element={<Category title="Register Category" />} />
      <Route path="/lengauje" element={<Lenguaje title="Register Lengauje" />} />
      <Route
        path="*"
        element={(
          <NotFound404 /> )}
      />
    </Routes>
  );
}

export default AdminRoute;
