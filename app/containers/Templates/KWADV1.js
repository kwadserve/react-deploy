import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { KWADHeader, Footer } from 'enl-components';
import styles from './appStyles-jss';

class KWADV1 extends React.Component {
  state = {
    transform: 0,
  };

  componentDidMount = () => {
    // Scroll content to top
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // const mainContent = document.getElementById('app');
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scroll = window.pageYOffset;
    this.setState({
      transform: scroll
    });
  }

  render() {
    const { classes, children } = this.props;
    const { transform } = this.state;
    return (
      <div className={classes.appFrameLanding} id="mainContent" style={{ minHeight: 'auto' }}>
        <KWADHeader turnDarker={transform > 30} />
        {children}
        <Footer />
      </div>
    );
  }
}

KWADV1.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default (withStyles(styles)(KWADV1));
