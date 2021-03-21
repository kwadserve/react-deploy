import React from 'react';

import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {
  KWADChooseCardHire
} from 'enl-components';

const HStepTwo = (props) => {
  const { classes, currentStep, nextStep } = props;

  if (currentStep !== 2) {
    return null;
  }
  return (
    <>
      <div className={classes.topHeader}>
        <Typography variant="h1">
                    Great! What type of work are you hiring for?
        </Typography>
      </div>
      <section className={classes.stepViewContent}>
        <div className={classes.chooseBox}>
          <KWADChooseCardHire WTitle="A short-term project" description="Perfect for hiring freelancers & design agencies." />
          <KWADChooseCardHire WTitle="A full time role" description="A full time team member to join your team" />
        </div>
      </section>

      <div className={classes.stepViewNavigation}>
        <div className={classes.navigationNext}>
          <Button type="button" className={classes.navigationNextBtn} onClick={nextStep}> Next </Button>
        </div>
      </div>
    </>
  );
};

HStepTwo.propTypes = {
  classes: PropTypes.object.isRequired,
  currentStep: PropTypes.any.isRequired,
  nextStep: PropTypes.func.isRequired
};

export default HStepTwo;
