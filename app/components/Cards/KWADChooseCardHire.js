import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
// import CheckCircle from '@material-ui/icons/CheckCircle';


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
    margin: '0 auto 30px',
    border: '1px solid #e7e7e9',
    padding: '0 0 30px',
    userSelect: 'none',
    [theme.breakpoints.up('sm')]: {
      // width: '49%',
      margin: '0 24px 0 0'
    },
    '&.selected': {
      background: '#fff !important',
      boxShadow: 'inset 0 0 0 2px #3f51b5',
    },
    '&:hover': {
      cursor: 'pointer',
      background: '#fafafa',
    },
    '& p': {
      // lineHeight: '20px',
      color: '#757575'
    }
  },
  media: {
    width: '100%',
    maxWidth: 120,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 150,
      marginBottom: 10
    }
  },
  content: {
    padding: '0 28px',
    '& p': {
      fontSize: 14
    }
  },
  cardHeader: {
    textAlign: 'center',
    '& h3': {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '24px'
    }
  },
  actions: {
    justifyContent: 'center'
  }
});
class KWADChooseCardHire extends React.Component {
    state = { isSelected: false };

    handleSelectClick = () => {
      console.log('working cli ');
      const { isSelected } = this.state;
      this.setState({ isSelected: !isSelected });
    };

    render() {
      const { classes, WTitle, description } = this.props;
      const { isSelected } = this.state;
      const selected = isSelected ? ' selected' : '';
      const classNameSelect = 'selectable' + selected;
      return (
        <Card className={classNames(classes.card, classNameSelect)}>
          <div onClick={this.handleSelectClick} aria-hidden="true">
            <div>
              <img className={classes.media} src="https://dribbble.com/assets/packs/media/onboarding/project-cd0102cc.png" alt="img here" />
            </div>
            <div className={classes.content}>
              <div className={classes.cardHeader}>
                <Typography variant="h3">
                  { WTitle }
                </Typography>
              </div>
              <CardContent style={{ padding: 0 }}>
                <Typography component="p">
                  { description }
                </Typography>
              </CardContent>
            </div>
            {/* <CardActions className={classes.actions}>
              {!isSelected ? <RadioButtonUnchecked /> : <CheckCircle style={{ color: '#3f51b5' }} />}
            </CardActions> */}
          </div>
        </Card>
      );
    }
}

KWADChooseCardHire.propTypes = {
  classes: PropTypes.object.isRequired,
  WTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default withStyles(styles)(KWADChooseCardHire);
