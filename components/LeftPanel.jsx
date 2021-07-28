import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CardTravelIcon from '@material-ui/icons/CardTravel';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    paddingLeft: '10%',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


export default function LeftPanel() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.root}>
          <Accordion className={classes.root} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            ><DashboardIcon /><Typography className={classes.heading}>
            Dashboard
          </Typography></AccordionSummary>
            
              <List>
                <ListItem button key='Income'>
                  <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                  <ListItemText primary='Income' />
                </ListItem>
                <ListItem button key='Income'>
                  <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                  <ListItemText primary='Income' />
                </ListItem>
              </List>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            ><AttachMoneyIcon /><Typography className={classes.heading}>
            Income
          </Typography></AccordionSummary>
            
              <List>
                <ListItem button key='Income'>
                  <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                  <ListItemText primary='Income' />
                </ListItem>
                <ListItem button key='Income'>
                  <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                  <ListItemText primary='Income' />
                </ListItem>
              </List>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            ><AccountBalanceWalletIcon /><Typography className={classes.heading}>
            Expenses
          </Typography></AccordionSummary>
            
              <List>
                <ListItem button key='Income'>
                  <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                  <ListItemText primary='Income' />
                </ListItem>
                <ListItem button key='Income'>
                  <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                  <ListItemText primary='Income' />
                </ListItem>
              </List>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            ><CardTravelIcon /><Typography className={classes.heading}>
            Accounting
          </Typography></AccordionSummary>
            
              <List>
                <ListItem button key='Accounting'>
                  <ListItemIcon><CardTravelIcon /></ListItemIcon>
                  <ListItemText primary='Income' />
                </ListItem>
                <ListItem button key='Income'>
                  <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                  <ListItemText primary='Income' />
                </ListItem>
              </List>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            ><PaymentIcon /><Typography className={classes.heading}>
            Payroll
          </Typography></AccordionSummary>
            
              <List>
                <ListItem button key='Income'>
                  <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                  <ListItemText primary='Income' />
                </ListItem>
                <ListItem button key='Income'>
                  <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                  <ListItemText primary='Income' />
                </ListItem>
              </List>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                ><SettingsIcon /><Typography className={classes.heading}>
                Settings
              </Typography></AccordionSummary>
                
                  <List>
                    <ListItem button key='Income'>
                      <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                      <ListItemText primary='Income' />
                    </ListItem>
                    <ListItem button key='Income'>
                      <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                      <ListItemText primary='Income' />
                    </ListItem>
                  </List>
              </Accordion>
        </div>
      </Drawer>
    </div>
  );
}