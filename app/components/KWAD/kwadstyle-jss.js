import { darken } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  homeWrap: {
    backgroundImage:
      `linear-gradient(${theme.palette.background.paper} 0%, ${theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.75) : theme.palette.primary.light} 80%);`,
  },
  container: {
    padding: `0 ${theme.spacing(2)}px`,
    position: 'relative',
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      width: 1140,
      padding: 0,
    },
  },
  spaceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    '& nav': {
      display: 'flex',
      alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center'
    },
  },
  button: {
    marginRight: theme.spacing(1),
    padding: `6px ${theme.spacing(2)}px`
  },
  header: {
    position: 'fixed',
    background: 'none',
    height: 56,
    justifyContent: 'center',
    '& nav': {
      '& li': {
        display: 'inline-block',
        position: 'relative',
        margin: `0 ${theme.spacing(1)}px`,
        '&[class*="active"]': {
          '& a': {
            color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
          },
          '&:before': {
            content: '""',
            width: '100%',
            height: 4,
            position: 'absolute',
            top: -10,
            borderRadius: '0 0 8px 8px',
            background: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
          },
        },
        '& a': {
          color: theme.palette.text.secondary
        }
      }
    },
  },
  darker: {
    backgroundAttachment: 'fixed',
    boxShadow: theme.shadows[3],
    background: theme.palette.background.default
  },
  menuButton: {
    position: 'absolute',
    left: 8,
    top: 4
  },
  brand: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 500,
    marginRight: theme.spacing(3),
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '& img': {
      height: 30,
      marginRight: 10
    },
  },
  footer: {
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.75) : theme.palette.primary.light,
    paddingTop: theme.spacing(10),
    position: 'absolute',
    bottom: -240,
    minHeight: 240,
    width: '100%',
    '& $brand': {
      color: theme.palette.text.primary
    },
    '& nav': {
      '& li': {
        display: 'inline-block',
        margin: `0 ${theme.spacing(3)}`,
        '& a': {
          fontSize: 11,
          textTransform: 'capitalize',
          fontWeight: theme.typography.fontWeightRegular
        }
      }
    },
    '& $spaceContainer': {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        '& ul': {
          textAlign: 'center',
          marginTop: theme.spacing(3)
        }
      }
    },
    '& $container': {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      }
    }
  },
  copyright: {
    '& p': {
      flex: 1,
      fontSize: 12,
      marginTop: theme.spacing(1),
      color: theme.palette.text.secondary,
      padding: `0 ${theme.spacing(1)}px`
    },
    '& $container': {
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(1),
      marginTop: theme.spacing(1),
      display: 'flex'
    },
    '& span': {
      '& a': {
        width: 'auto',
        height: 'auto',
        '& svg': {
          fill: theme.palette.primary.main
        }
      }
    }
  },
  vShowcase: {
    [theme.breakpoints.up('md')]: {
    //   height: 840,
      // paddingTop: theme.spacing(20),
      paddingTop: '0 !important',
    },
    top: 0,
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(15),
    }
    // paddingTop: '56px !important'
  }
});

export default styles;
