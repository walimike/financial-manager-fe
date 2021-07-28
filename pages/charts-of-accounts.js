import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  }
}))

export default function chartsOfAccounts() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <h1>Charts of accounts</h1>
    </div>
  )
}