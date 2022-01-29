import { Route, Routes } from 'react-router-dom';
import ConfigurationAll from '../pages/ConfigurationAll';

const ConfigurationRouter = () => (
  <Routes>
    <Route path="/" element={<ConfigurationAll />} />
  </Routes>
);

export default ConfigurationRouter;
