const rootWraper = {
  display: 'flex',
  width: '100%',
  zIndex: 1,
  position: 'relative'
};

const wrapper = theme => ({
  padding: theme.spacing(3),
  // backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  [theme.breakpoints.up('lg')]: {
    padding: `${theme.spacing(6)}px ${theme.spacing(20)}px`,
  },
});

const styles = theme => ({
  root: {
    ...rootWraper
  },
  rootFull: {
    ...rootWraper,
    height: '100%',
  },
  sideWrap: {
    ...wrapper(theme),
    height: '100%',
    borderRadius: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    // [theme.breakpoints.up('md')]: { // old
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // }
  },
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
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
  subTitle: {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#6e6d7a',
    marginTop: '17px'
  },
  stepViewContent: {
    marginBottom: 30,
    [theme.breakpoints.up('md')]: {
      marginBottom: 50
    },
  },
  avatarUploadContainer: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  avatarUpload: {
    marginBottom: 30,
    [theme.breakpoints.up('md')]: {
      marginBottom: 40
    }
  },
  dAvatar: {
    width: 45,
    height: 45,
    marginRight: 10,
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0 0 0 2px #e7e7e9, 0 0 0 4px #e7e7e9'
    }
  },
  formFieldLabel: {
    display: 'block',
    marginBottom: '26px',
    fontSize: 18,
    lineHeight: '22px',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  },
  avatarUploadDropzone: {
    paddingRight: 30,
    [theme.breakpoints.up('md')]: {
      paddingRight: 40
    }
  },
  dropArea: {
    boxSizing: 'border-box',
    width: 114,
    border: '3px dashed #dbdbde',
    borderRadius: '50%',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      width: 170
    }
  },
  dropAreaHelp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:before': {
      content: "''",
      display: 'block',
      paddingTop: '100%',
    },
    '& svg': {
      color: '#9e9ea7',
      fill: 'currentColor'
    }
  },
  inputHidden: {
    width: '0.1px',
    height: '0.1px',
    opacity: '0',
    overflow: 'hidden',
    position: 'absolute',
    zIndex: '-1',
  },
  avatarUploadActions: {
    marginTop: 20,
    [theme.breakpoints.up('md')]: {
      marginTop: 16
    },
  },
  avatarUploaderButton: {
    position: 'absolute',
    top: '35px',
    left: '132px',
    [theme.breakpoints.up('md')]: {
      position: 'static',
      marginBottom: 24
    }
  },
  avatarSelectTrigger: {
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    [theme.breakpoints.down('sm')]: {
      position: 'static',
      marginBottom: 24
    }
  },
  dATriggerIcon: {
    transition: 'transform 0.3s ease, -webkit-transform 0.3s ease'
  },
  dATriggerIconActive: {
    transform: 'rotate(90deg)'
  },
  avatarSelectTriggerText: {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#6e6d7a',
    [theme.breakpoints.up('sm')]: {
      fontSize: '15px',
      lineHeight: '18px',
      color: '#9e9ea7',
    },
    '&:hover': {
      cursor: 'pointer',
      color: '#6e6d7a'
    }
  },
  formFieldInput: {
    marginTop: '10px',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #e0e0e0',
    boxSizing: 'border-box',
    color: '#000',
    height: 40,
    fontWeight: '500',
    fontSize: '17px',
    lineHeight: '28px',
    padding: '23px 0',
    width: '100%',
    letterSpacing: '0.03em',
    borderRadius: '0',
  },
  formFieldInputV2: {
    width: '100%',
    letterSpacing: '0.03em',
    borderRadius: '0'
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
  // welcome page
  chooseBox: {
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      padding: '72px 0 0',
      justifyContent: 'space-between'
    }
  },
  opening: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative',
    '&:before': {
      content: "''",
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: 0.1,
      // background: `url(${deco}) no-repeat 230px 480px`
    },
    '& h1': {
      color: theme.palette.common.white,
      lineHeight: '3.6rem',
      display: 'block',
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      }
    },
    '& p': {
      color: theme.palette.common.white,
    }
  },
  openingWrap: {
    padding: theme.spacing(6)
  },
  // below - > work perfectly
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
});

export default styles;
