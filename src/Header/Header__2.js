import './Header__2.css'

import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from './Drawer'
import Profile from './Profile'
import Toolbar from '@mui/material/Toolbar';

const pages = ['Buy Again', 'Amazon Basics', 'Prime Video','Prime','Today\'s Deals','Customers Services','Best Sellers','Browsing History','Kindle Books','New Releases','Gift Cards','Books'];




const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <Drawer/>
          <Box sx={{ flexGrow:1,flexShrink: 2, display:'flex',alignContent:'flex-start', justifyContent:"space-between",marginBottom:0,paddingLeft:0}}>
            {pages.map((page) => (
              <Button
              className="second__nav__buttons"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white',fontSize: '10px' ,display: 'flex'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Profile
          sx={{alignSelf:'flex-end'}}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
