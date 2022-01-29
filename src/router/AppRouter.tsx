import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRouter from '../modules/auth/router/AuthRouter';
import HomeRouter from '../modules/home/router/HomeRouter';
import MangaRouter from '../modules/Manga/router/MangaRouter';
import Layout from '../modules/shared/components/layout/Layout';

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route
          path="/auth/*"
          element={(
            <AuthRouter />
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
