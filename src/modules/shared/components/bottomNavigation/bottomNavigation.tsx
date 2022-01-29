import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AccountCircle } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LabelBottomNavigation = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [value, setValue] = React.useState( 'recents' );

  const handleChange = ( event: React.SyntheticEvent, newValue: string ) => {
    setValue( newValue );
    navigate( newValue );
  };

  return (
    <BottomNavigation
      sx={{
        position: 'fixed',
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: `3px solid ${theme.palette.primary.main}`,
        zIndex: 4,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      <BottomNavigationAction
        label="Auth"
        value="auth/login"
        icon={<AccountCircle />}
      />
    </BottomNavigation>
  );
};

export default LabelBottomNavigation;
