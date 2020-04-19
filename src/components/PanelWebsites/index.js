import React from 'react';
import WebsiteProvider from './context/WebsiteContext';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import WebsiteList from './components/WebsiteList';
import RightPanel from './components/RightPanel';

export default function PanelTasks() {
  const useStyles = makeStyles(theme => ({
    root: {
      height: 650,
      marginTop: 10,
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  return (
    <WebsiteProvider>
      <Grid container>
        <Grid item sm={3}>
          <Paper className={classes.root}>
            <WebsiteList />
          </Paper>
        </Grid>
        <Grid item sm={9}>
          <Paper className={classes.root}>
            <RightPanel />
          </Paper>
        </Grid>
      </Grid>
    </WebsiteProvider>
  );
}