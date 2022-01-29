import { Route, Routes } from 'react-router-dom';
import NotFound404 from '../../shared/errors/NotFound404';
import PreviewView from '../components/PreviewView';
import Home from '../pages/Home';

const HomeRouter = () => (
  <Routes>
    <Route path="/" element={<Home title="Inicio Lector Manga" />}>
      <Route
        path="preview/:slug"
        element={(
          <PreviewView />
        )}
      />
    </Route>
    <Route
      path="*"
      element={(
        <NotFound404 /> )}
    />
  </Routes>
);

export default HomeRouter;
