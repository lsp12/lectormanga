import { Route, Routes } from 'react-router-dom';
import NotFound404 from '../../shared/errors/NotFound404';
import MangaView from '../pages/MangaView';

const MangaRouter = () => (
  <Routes>
    <Route path="/" element={<MangaView title="Nombre del manga" />} />
    <Route
      path="*"
      element={(
        <NotFound404 /> )}
    />
  </Routes>
);

export default MangaRouter;
