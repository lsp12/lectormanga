import { Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import MangaInfoContent from './MangaInfoContent';

const MangaInfoLgDown = () => (
  <Grid container>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log( 'slide change' )}
      onSwiper={( swiper ) => console.log( swiper )}
    >
      <SwiperSlide>
        <Grid item xs={12}>
          <MangaInfoContent />
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid item xs={12}>
          <MangaInfoContent />
        </Grid>
      </SwiperSlide>

    </Swiper>
  </Grid>
);

export default MangaInfoLgDown;
