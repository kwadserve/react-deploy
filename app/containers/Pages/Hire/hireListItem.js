import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircle from '@material-ui/icons/CheckCircle';
const styles = theme => ({

  // list
  liteItemV1: {
    background: '#f7f7f7',
    marginBottom: 20,
    padding: 20,
    borderRadius: 8,
    '&:hover': {
      cursor: 'pointer',
      // background: '#fff',
      boxShadow: '0 0 0 2px #e8e8e8',
    },
    [theme.breakpoints.up('sm')]: {
      flex: '0 48%',
    },
    '&.selected': {
      background: '#fff',
      boxShadow: 'inset 0 0 0 2px #3f51b5',
    }
  },
  title: {
    '& span': {
      // fontStyle: normal;
      fontWeight: 'bold',
      fontSize: 16
    }
  }
});
class HListItem extends React.Component {
    state = { isSelected: false };

    handleSelectClick = () => {
      const { isSelected } = this.state;
      this.setState({ isSelected: !isSelected });
    };

    render() {
      const { classes, title } = this.props;
      const { isSelected } = this.state;
      const selected = isSelected ? ' selected' : '';

      return (
        <ListItem button className={classNames(classes.liteItemV1, selected)} onClick={this.handleSelectClick}>
          <ListItemText primary={title} className={classes.title} />
          {isSelected && <CheckCircle style={{ color: '#3f51b5' }} />}
        </ListItem>
      );
    }
}
HListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(HListItem);
