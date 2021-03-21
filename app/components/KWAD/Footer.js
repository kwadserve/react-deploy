import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from 'enl-images/logo.svg';
import brand from 'enl-api/dummy/brand';
import link from 'enl-api/ui/link';
// import messages from './messages';
import styles from './kwadstyle-jss';

let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

class Footer extends React.Component {
  state = {
    menuList: [
      createData('menu 1', '#menu1'),
      createData('item 2', '#menu2'),
      createData('item 3', '#menu3'),
      createData('item 4', '#menu4'),
    ]
  }

  render() {
    const { menuList } = this.state;
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.spaceContainer}>
            <div className={classes.brand}>
              <img src={logo} alt={brand.name} />
              {/* {brand.name} */}
            </div>
            <nav>
              <ul>
                { menuList.map(item => (
                  <li key={item.id.toString()}>
                    <Button size="small" href={item.url}>{ item.name }</Button>
                  </li>
                )) }
              </ul>
            </nav>
          </div>
        </div>
        <div className={classes.copyright}>
          <div className={classes.container}>
            <p>
              &copy; 2021&nbsp;
              {brand.name}
              {' '}
              All Right Reserved
              {' '}
            </p>
            <span>
              <IconButton color="primary" className={classes.button} href={link.twitter} target="_blank">
                <i className="ion-social-google" />
              </IconButton>
              <IconButton color="primary" className={classes.button} href={link.pinterest} target="_blank">
                <i className="ion-social-pinterest" />
              </IconButton>
              <IconButton color="primary" className={classes.button} href={link.github} target="_blank">
                <i className="ion-social-github" />
              </IconButton>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
