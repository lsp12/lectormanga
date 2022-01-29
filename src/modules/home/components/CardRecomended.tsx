import CustomCard from '../../shared/components/card/CustomCard';
import RecomendedManga from './RecomendedManga';

const CardRecomended = () => (
  <CustomCard title="Today We Recomended" subTitle="Most popular in the week">
    <RecomendedManga />
  </CustomCard>
);

export default CardRecomended;
