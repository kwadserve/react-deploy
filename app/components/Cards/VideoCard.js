import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const styles = theme => ({

  cardSocmed: {
    minWidth: 275,
  },
  media: {
    height: 0,
    position: 'relative',
    paddingTop: '56.25%', // 16:9
    [theme.breakpoints.only('sm')]: {
      paddingTop: '26.25%',
    },
  },
  playBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 64,
    height: 64,
    transform: 'translate(-50%, -50%)',
    '& svg': {
      color: theme.palette.common.white,
      fontSize: 64
    }
  },

});

class VideoCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const {
      classes,
      title,
      cover
    } = this.props;

    return (
      <Card className={classes.cardSocmed}>
        <CardMedia
          className={classes.media}
          image={cover}
          title={title}
        >
          <IconButton className={classes.playBtn}><PlayArrowIcon /></IconButton>
        </CardMedia>
      </Card>
    );
  }
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default withStyles(styles)(VideoCard);
