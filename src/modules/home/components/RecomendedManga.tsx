import { Box, Typography } from '@mui/material';
import { useAppDispatch } from '../../../app/hooks';
import img1 from '../../../asset/img/img1.jpg';
import { setLoadingPreview } from '../../shared/slice/uiSlice';

const RecomendedManga = () => {
  const dispatch = useAppDispatch();
  return (
    <Box ml={2} mr={2} display="flex">
      <Box mr={2}>
        <img
          style={{
            width: '100%',
            borderRadius: 10,
            boxShadow: '0px 0px 30px -21px rgba(0,0,0,0.69)',
            WebkitBoxShadow: '0px 0px 30px -21px rgba(0,0,0,0.69)',
          }}
          src={img1}
          alt="img1"
          onMouseEnter={() => dispatch( setLoadingPreview( true ))}
          onMouseLeave={() => dispatch( setLoadingPreview( false ))}
        />
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          className="titleBreaker"
        >
          A Cute Girl with a Nasty Look A Cute Girl with a Nasty Look
        </Typography>
        <Typography
          variant="caption"
          className="descriptionBreaker"
        >
          This delinquent is stupid cute!

          High schooler Tanaka-kun believes that scary girls are actually cute. Thus, sitting next to the delinquent Mizuno-san he strives to get closer to her. However, in addition to having a scary expression, she the subject of many rumors and feared by her classmates!!

          Although getting the cold shoulder at first, Tanaka feverish offensive opens Mizuno heart up bit by bit. But Tanaka plan to help her fit in with their classmates during the school festival is threatened when disaster strikes!

          (Translation of the Volume 1 synopsis on Amazon by KasketBox)

          A twitter short by @hamita1220
        </Typography>
      </Box>
    </Box>
  );
};

export default RecomendedManga;
