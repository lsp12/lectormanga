import { Box, Chip } from '@mui/material';
import CustomCard from '../../shared/components/card/CustomCard';

const CardGenres = () => (
  <CustomCard
    title="Genres"
    subTitle="Select one to see a full list"
    allowExpand
    expandChildren={(
      <Box display="flex" gap={1} flexWrap="wrap">
        <Chip label="Slice of Life" />
        <Chip label="Sci-Fy" />
        <Chip label="Drama" />
        <Chip label="Horror" />
        <Chip label="Comedy" />
        <Chip label="RomCom" />
        <Chip label="Isekai" />
        <Chip label="Sci-Fy" />
      </Box>
    )}
  >
    <Box display="flex" gap={1} flexWrap="wrap">
      <Chip label="Slice of Life" />
      <Chip label="Sci-Fy" />
      <Chip label="Drama" />
      <Chip label="Horror" />
      <Chip label="Comedy" />
      <Chip label="RomCom" />
      <Chip label="Isekai" />
      <Chip label="Sci-Fy" />
    </Box>
  </CustomCard>
);

export default CardGenres;
