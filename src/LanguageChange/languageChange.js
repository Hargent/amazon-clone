import React,{useState} from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconFlagUS } from 'material-ui-flags';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function LanguageChange() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
        <Typography
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
        >
            <IconFlagUS/><ArrowDropDownIcon/>
        </Typography>
        <Popover
            id="mouse-over-popover"
            sx={{
            pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
        >
            <Typography sx={{ p: 1 }}>I use Popover.</Typography>
        </Popover>
        </div>
    );
}

export default LanguageChange;
