import React from 'react';
// import { Helmet } from 'react-helmet';
// import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { VideoCard } from 'enl-components';
// import messages from './messages';
import styles from 'enl-components/KWAD/kwadStyle-jss';

class KWADHomePage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      // <div className={classes.homeWrap}>
      <div>
        <section className={classes.vShowcase}>
          <div className={classes.container}>
            <VideoCard
              title="Live From Space"
              cover="https://res.cloudinary.com/walden-global-services/image/upload/v1544584608/dandelion/42.jpg"
            />
          </div>
        </section>
      </div>
    );
  }
}

KWADHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(KWADHomePage));
