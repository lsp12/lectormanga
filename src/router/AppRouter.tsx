import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRoute from '../modules/admin/router/GenderRoute';
import AuthRouter from '../modules/auth/router/AuthRouter';
import HomeRouter from '../modules/home/router/HomeRouter';
import MangaRouter from '../modules/Manga/router/MangaRouter';
import RegisterRouter from '../modules/register/router/RegisterRoute';
import Layout from '../modules/shared/components/layout/Layout';

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route
          path="/auth/*"
          element={(
            <>
              <AuthRouter />
              <RegisterRouter />
            </>
          )}
        />
        <Route
          path="/home/*"
          element={(
            <HomeRouter />
          )}
        />
        <Route
          path="/manga/:slug"
          element={(
            <MangaRouter />
          )}
        />
        <Route
          path="/admin/*"
          element={(
            <AdminRoute />
          )}
        />
        <Route
          path="/troleado"
          element={(
            <div>
              troleado puto
            </div>
          )}
        />
        {/*
      <Route
          path="/"
          element={(
            <PublicGuard>
              <Authentication title="Iniciar Sesión" />
            </PublicGuard>
          )}
        />
      */}
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRouter;
