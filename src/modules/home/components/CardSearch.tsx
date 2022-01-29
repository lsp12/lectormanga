import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import CustomCard from '../../shared/components/card/CustomCard';

const CardSearch = () => (
  <CustomCard title="Search" subTitle="Type a combination of words">
    <TextField
      placeholder="Type Here"
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  </CustomCard>
);

export default CardSearch;
