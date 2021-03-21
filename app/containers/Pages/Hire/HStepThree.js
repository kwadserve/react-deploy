import React from 'react';

import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {
  KWADChooseCardHire
} from 'enl-components';

const HStepThree = (props) => {
  const { classes, currentStep, nextStep } = props;

  if (currentStep !== 3) {
    return null;
  }
  return (
    <>
      <div className={classes.topHeader}>
        <Typography variant="h1">
                    Are you hiring as yourself or for a company?
        </Typography>
      </div>
      <section className={classes.stepViewContent}>
        <div className={classes.chooseBox}>
          <KWADChooseCardHire WTitle="As myself" description="I need some help for a personal project" />
          <KWADChooseCardHire WTitle="As a company" description="I need some help for my business or agency" />
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

HStepThree.propTypes = {
  classes: PropTypes.object.isRequired,
  currentStep: PropTypes.any.isRequired,
  nextStep: PropTypes.func.isRequired
};

export default HStepThree;
