import React from 'react';
import {Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

export const mainListItems = (
  <div>
    <Link to ="/enrollment">
    <ListItem button>
      <ListItemIcon>
      <PeopleIcon style={{color:" cornflowerblue"}} />
      </ListItemIcon>
      <ListItemText primary="Enrollment" />
    </ListItem>
    </Link>

<Link to="/event">
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={{color:" cornflowerblue"}} />
      </ListItemIcon>
      <ListItemText primary="Event" />
    </ListItem>
    </Link>

    <Link to="/reimburse">
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon style={{color:" cornflowerblue"}} />
      </ListItemIcon>
      <ListItemText primary="Reimbursement" />
    </ListItem>
    </Link>

    <Link to="/assignment">
    <ListItem button>
      <ListItemIcon>
      <AssignmentIcon style={{color:" cornflowerblue"}} />
      </ListItemIcon>
      <ListItemText primary="Assignment" />
    </ListItem>
    </Link>

    <Link to="/lecture">
    <ListItem button>
      <ListItemIcon>
        <LayersIcon  style={{color:" cornflowerblue"}}/>
      </ListItemIcon>
      <ListItemText primary="Lecture" />
    </ListItem>
    </Link>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);