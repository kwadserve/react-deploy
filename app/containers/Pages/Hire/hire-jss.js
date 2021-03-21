const rootWraper = {
  display: 'flex',
  width: '100%',
  zIndex: 1,
  position: 'relative'
};

const styles = theme => ({
  rootFull: {
    ...rootWraper,
    height: '100%',
  },
  stepContent: {
    flexGrow: '1',
    order: '1'
  },
  stepContentWrap: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  topNav: {
    padding: '30px 20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 48,
    [theme.breakpoints.up('md')]: {
      padding: '40px 40px 0'
    },
    '& a': {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '40px',
        minHeight: '48px',
      },
    }
  },
  mobileViewLogo: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
      marginRight: '40px'
    },
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '48px',
  },
  navRight: {
    display: 'flex',
    minHeight: '48px',
    flexGrow: '0',
    justifyContent: 'flex-end',
  },
  navigationBtn: {
    background: '#f2f2f2',
    color: '#6e6d7a',
    minWidth: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'center'
  },
  mainContentContainer: {
    padding: 40,
    maxWidth: '728px',
    flexGrow: '1',
    boxSizing: 'border-box',
  },
  topHeader: {
    marginBottom: 35,
    [theme.breakpoints.up('md')]: {
      marginBottom: 50
    },
    '& h1': {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: '1.25em',
      [theme.breakpoints.up('lg')]: {
        fontSize: 36
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 'calc(24px + 12 * ((100vw - 800px) / 640))'
      },
    },
    '& p': {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#6e6d7a',
      marginTop: '17px',
    }
  },
  stepViewContent: {
    marginBottom: 30,
    [theme.breakpoints.up('md')]: {
      marginBottom: 50
    },
  },
  stepViewNavigation: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'left',
  },
  navigationNext: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 215
    },
  },
  navigationNextBtn: {
    width: '100%',
    background: '#3f51b5',
    color: '#fff !important',
    textTransform: 'none',
    '&:hover': {
      background: '#5667c1'
    }
  },
  // sidebar
  sideBar: {
    display: 'flex',
    order: '2',
    [theme.breakpoints.up('lg')]: {
      width: 390
    },
    [theme.breakpoints.down('md')]: {
      width: 200
    },
  },
  stepViewSideBar: {
    position: 'sticky',
    top: 0,
    width: '100%',
    height: '100vh',
  },
  sideBarBG: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url("https://cdn.dribbble.com/assets/onboarding/hire-sidebar-80edfbe69592aff6b1fbe071b4600179d665e6f775221e99ac5555eaa5c59880.png")',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: '1',
  },
  sideBarArtBy: {
    color: '#fff',
    opacity: 0.7,
    position: 'absolute',
    left: '20px',
    bottom: '20px',
    fontSize: '14px',
    lineHeight: '17px',
    zIndex: '10'
  },
  // hire step -one
  chooseBox: {
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      // padding: '72px 0 0',
      justifyContent: 'space-between'
    }
  },
  // step 3 form field
  formFieldLabel: {
    display: 'block',
    marginBottom: '20px',
    fontSize: 18,
    lineHeight: '22px',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  },
  formFieldInputV2: {
    width: '100%',
    letterSpacing: '0.03em',
    borderRadius: '0',
    '& input': {
      fontSize: 17
    },
    '& textarea': {
      fontSize: 14
    }
  },
  // ppreview
  ppreview: {
    width: '100%',
    position: 'relative',
    border: '1px solid #f2f2f2',
    borderRadius: 12,
    padding: '26px 47px 32px',
    '& h3': {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#dbdbde',
      marginBottom: '10px',
    },
    '& p': {
      fontSize: 14,
      color: '#9e9ea7'
    }
  },
  ppAvatar: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 27,
    left: -25,
  },
  navigationSkip: {
    marginLeft: 24,
    width: '100%',
    maxWidth: 100
  },
  navigationSkipBtn: {
    width: '100%',
  }
});

export default styles;
