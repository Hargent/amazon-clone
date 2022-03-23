import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

export default function TemporaryDrawer() {
  const toggleList1 = ["Inbox", "Starred", "Send email", "Drafts"];
  const toggleList2 = ["All mail", "Trash", "Spam"]
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 ,padding:'10px',background:'#131921',color:'#fff',height:'100%',backgroundSize:'cover'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {toggleList1.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon sx={{color:'#fff'}}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon sx={{color:'#fff'}}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {toggleList2.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon sx={{color:'#fff'}}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button 
          sx={{ my: 2, color: 'white', display: 'flex', padding:'2px' }}
          onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
            ALL
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
