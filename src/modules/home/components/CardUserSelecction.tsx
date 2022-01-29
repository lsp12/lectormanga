import { Favorite } from '@mui/icons-material';
import { Button, ButtonGroup, Grid } from '@mui/material';
import CustomCard from '../../shared/components/card/CustomCard';

const CardUserSelecction = () => {
  const buttons = [
    <Button key="one"><Favorite /></Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];
  return (
    <CustomCard title="Your Selecctions" subTitle="Choose the manga type that you want to see">
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            {buttons}
          </ButtonGroup>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default CardUserSelecction;
