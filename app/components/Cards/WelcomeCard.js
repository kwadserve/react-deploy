import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircle from '@material-ui/icons/CheckCircle';


const styles = theme => ({
  divider: {
    display: 'block',
    margin: `${theme.spacing(3)}px 0`
  },
  card: {
    textAlign: 'center',
    position: 'relative',
    width: '100%',
    maxWidth: '320px',
    marginTop: 100,
    padding: '20px 0',
    borderRadius: 18,
    margin: '0 auto 30px',
    overflow: 'unset !important',
    [theme.breakpoints.up('sm')]: {
      maxHeight: 280,
      width: '32%',
      margin: 0
    },
    '&.selected': {
      boxShadow: 'inset 0 0 0 2px #3f51b5'
    },
    '&:hover, &.selected': {
      cursor: 'pointer',
      background: '#fafafa',
      '& img, h3, p': {
        [theme.breakpoints.up('sm')]: {
          transform: 'translateY(-95px)',
          transitionDelay: '0s',
        }
      },
      '& p': {
        opacity: 1
      }
    },
    '& p': {
      lineHeight: '20px',
      color: '#757575'
    }
  },
  media: {
    width: '100%',
    maxWidth: 300,
    margin: '-100px auto 0',
    [theme.breakpoints.up('sm')]: {
      // animation
      marginTop: '0',
      transition: 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),-webkit-transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
      transitionDelay: '0.15s'
    }
  },
  cardHeader: {
    padding: '0 28px',
    textAlign: 'center',
    '& h3': {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '24px',
      [theme.breakpoints.up('sm')]: {
        transition: 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),-webkit-transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
      }
    }
  },
  cardDescription: {
    lineHeight: 20,
    '& p': {
      [theme.breakpoints.up('sm')]: {
        opacity: '0',
        transition: 'opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),-webkit-transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
        transitionDelay: '0s'
      }
    }
  },
  action: {
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      bottom: '26px',
      left: '50%',
      margin: '0 0 0 -12px'
    }
  }
});
class WelcomeCard extends React.Component {
    state = { isSelected: false };

    handleSelectClick = () => {
      console.log('working cli ');
      const { isSelected } = this.state;
      this.setState({ isSelected: !isSelected });
    };

    render() {
      const { classes, WTitle } = this.props;
      const { isSelected } = this.state;
      const selected = isSelected ? ' selected' : '';
      const classNameSelect = 'selectable' + selected;
      return (
        <Card className={classNames(classes.card, classNameSelect)}>
          <div onClick={this.handleSelectClick} aria-hidden="true">
            <div>
              <img className={classes.media} src="https://dribbble.com/assets/packs/media/onboarding/inspiration-ea0515b2.png" alt="img here" />
            </div>
            <div className={classes.cardHeader}>
              <Typography variant="h3">
                { WTitle }
              </Typography>
            </div>
            <CardContent className={classes.cardDescription}>
              <Typography component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with
                        your guests.
              </Typography>
            </CardContent>
            <CardActions className={classes.action}>
              {!isSelected ? <RadioButtonUnchecked /> : <CheckCircle style={{ color: '#3f51b5' }} />}
            </CardActions>
          </div>
        </Card>
      );
    }
}

WelcomeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  WTitle: PropTypes.string.isRequired
};

export default withStyles(styles)(WelcomeCard);
