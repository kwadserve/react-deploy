import React from 'react';

import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import HListItem from './hireListItem';

const HStepOne = (props) => {
  const { classes, currentStep, nextStep } = props;
  console.log(props);

  if (currentStep !== 1) {
    return null;
  }
  return (
    <>
      <div className={classes.topHeader}>
        <Typography variant="h1">
          Who are you looking to hire?
        </Typography>
      </div>
      <section className={classes.stepViewContent}>
        <List component="nav" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <HListItem title="Consultants" />
          <HListItem title="Psychologist" />
          <HListItem title="Lawyers" />
          <HListItem title="Mentor" />
          {/* <ListItem button className={classes.liteItemV1}>
            <ListItemText primary="Consultants" />
          </ListItem>
          <ListItem button className={classes.liteItemV1}>
            <ListItemText primary="Mentor" />
          </ListItem> */}
        </List>
      </section>

      <div className={classes.stepViewNavigation}>
        <div className={classes.navigationNext}>
          <Button type="button" className={classes.navigationNextBtn} onClick={nextStep}> Next </Button>
        </div>
      </div>
    </>
  );
};

HStepOne.propTypes = {
  classes: PropTypes.object.isRequired,
  currentStep: PropTypes.any.isRequired,
  nextStep: PropTypes.func.isRequired
};

export default HStepOne;
