import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';

//
import { green } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const HStepFour = (props) => {
  const { classes, currentStep } = props;

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  if (currentStep !== 4) {
    return null;
  }
  return (
    <>
      <div className={classes.topHeader}>
        <Typography variant="h1">
          {"Let's find you a {choosed option} by creating your first project listing"}
        </Typography>
        <Typography component="p">
          description
        </Typography>
      </div>
      <section className={classes.stepViewContent}>
        <div className={classes.formFieldLabel}>Enter a project title</div>
        <div className="theme-underlined form-field" componenttype="textInputBox" required="required" style={{ marginBottom: 40 }}>
          <ThemeProvider theme={theme}>
            <TextField
              className={classes.formFieldInputV2}
              placeholder="e.g. I am looking for a .... "
              id="p-title"
              value={title}
              onChange={handleTitleChange}
            />
          </ThemeProvider>
        </div>
        <div className={classes.formFieldLabel}>Briefly describe your project</div>
        <div className="theme-underlined form-field" componenttype="textInputBox" required="required" style={{ marginBottom: 40 }}>
          <ThemeProvider theme={theme}>
            <TextField
              className={classes.formFieldInputV2}
              placeholder="e.g. I am looking for a .... to "
              id="p-description"
              multiline
              rows={4}
              value={description}
              onChange={handleDescriptionChange}
            />
          </ThemeProvider>
        </div>
        <div>
          <h3 style={{ color: '#9e9ea7', fontSize: 15, fontWeight: 'bold' }}>Post Preview</h3>
          <div className={classes.ppreview}>
            <Typography variant="h3">
              { title || 'e.g. I’m looking for a ...' }
            </Typography>
            <Typography component="p">
              { description || 'e.g. I’m looking for a ... to...' }
            </Typography>
            <Avatar className={classes.ppAvatar}>
              <Person />
            </Avatar>
          </div>
        </div>
      </section>

      <div className={classes.stepViewNavigation}>
        <div className={classes.navigationNext}>
          <Button type="button" className={classes.navigationNextBtn} disabled={!title || !description}> Post project </Button>
        </div>
        <div className={classes.navigationSkip}>
          <Button type="button" variant="outlined" className={classes.navigationSkipBtn}> Skip </Button>
        </div>
      </div>
    </>
  );
};

HStepFour.propTypes = {
  classes: PropTypes.object.isRequired,
  currentStep: PropTypes.any.isRequired
};

export default HStepFour;
