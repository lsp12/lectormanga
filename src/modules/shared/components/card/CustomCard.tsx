import {
  Card, CardContent, CardHeader, styled, Typography, Button, ButtonProps, Collapse, Box,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';

interface ICustomCardProps {
  title: string;
  subTitle?: string;
  children: JSX.Element | JSX.Element[];
  expandChildren?: JSX.Element | JSX.Element[];
  allowExpand?: boolean;
}

const ExpandMore = styled(( props: ButtonProps ) => {
  const { ...other } = props;
  return <Button sx={{ p: 0 }} fullWidth {...other} />;
})(({ theme }) => ({
  transition: theme.transitions.create( 'transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CustomCard = ({
  title, subTitle, children, expandChildren, allowExpand,
}: ICustomCardProps ) => {
  const [expanded, setExpanded] = useState( false );

  const handleExpandClick = () => {
    setExpanded( !expanded );
  };

  return (
    <Card>
      <CardHeader
        title={(
          <Typography fontStyle="Medium 500" variant="h6" fontWeight="bold" color={grey[900]}>
            {title}
          </Typography>
        )}
        subheader={subTitle}
      />
      <CardContent>
        {children}
        {allowExpand && (
          <Box mt={1}>
            <Collapse
              in={expanded}
              timeout="auto"
              unmountOnExit
            >
              <Box mb={1}>
                {expandChildren}
              </Box>
            </Collapse>
            <ExpandMore
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {expanded ? 'Show less' : 'Show more'}
            </ExpandMore>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
