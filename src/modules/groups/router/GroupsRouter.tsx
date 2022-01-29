import { Route, Routes } from 'react-router-dom';
import NotFound404 from '../../shared/errors/NotFound404';
import GroupConfiguration from '../pages/GroupConfiguration';

const GroupsRouter = () => (
  <Routes>
    <Route path="/" element={<GroupConfiguration title="Lista de Órdenes" />} />
    <Route
      path="*"
      element={(
        <NotFound404 /> )}
    />
  </Routes>
);

export default GroupsRouter;
