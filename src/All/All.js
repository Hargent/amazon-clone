import React,{useState} from 'react';
import './All.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function All() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div id="search_categories__container">
      <Button 
        id="search_categories__btn"
        sx={{backgroundColor:'white', color:'black',borderTopRightRadius:0,borderBottomRightRadius:0,height: '35px',width:'10px'}} 
        aria-describedby={id} 
        variant="contained" 
        onClick={handleClick}>
            <span id="search_categories" >Amazon Devices</span><ArrowDropDownIcon/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}

export default  All;