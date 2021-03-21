import Loadable from 'react-loadable';
import Loading from 'enl-components/Loading';

export const DashboardPage = Loadable({
  loader: () => import('./Pages/Dashboard'),
  loading: Loading,
});
export const Table = Loadable({
  loader: () => import('./Pages/Table/BasicTable'),
  loading: Loading,
});
export const Form = Loadable({
  loader: () => import('./Pages/Forms/ReduxForm'),
  loading: Loading,
});
export const LoginFullstack = Loadable({
  loader: () => import('./Pages/UsersFullstack/Login'),
  loading: Loading,
});
export const RegisterFullstack = Loadable({
  loader: () => import('./Pages/UsersFullstack/Register'),
  loading: Loading,
});
export const ResetPasswordFullstack = Loadable({
  loader: () => import('./Pages/UsersFullstack/ResetPassword'),
  loading: Loading,
});
export const Login = Loadable({
  loader: () => import('./Pages/Users/Login'),
  loading: Loading,
});
export const Register = Loadable({
  loader: () => import('./Pages/Users/Register'),
  loading: Loading,
});
export const ResetPassword = Loadable({
  loader: () => import('./Pages/Users/ResetPassword'),
  loading: Loading,
});
export const ComingSoon = Loadable({
  loader: () => import('./Pages/ComingSoon'),
  loading: Loading,
});
export const BlankPage = Loadable({
  loader: () => import('./Pages/BlankPage'),
  loading: Loading,
});
export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});
export const Error = Loadable({
  loader: () => import('./Pages/Error'),
  loading: Loading,
});
export const Maintenance = Loadable({
  loader: () => import('./Pages/Maintenance'),
  loading: Loading,
});
export const Parent = Loadable({
  loader: () => import('./Parent'),
  loading: Loading,
});
export const NotFoundDedicated = Loadable({
  loader: () => import('./Pages/Standalone/NotFoundDedicated'),
  loading: Loading,
});

// @itsbohara
export const TermsConditions = Loadable({
  loader: () => import('./Pages/TermsConditions'),
  loading: Loading,
});
export const PrivacyPolicy = Loadable({
  loader: () => import('./Pages/PrivacyPolicy'),
  loading: Loading,
});

// welcome setup
export const WelcomeSetup = Loadable({
  loader: () => import('./Pages/Welcome'),
  loading: Loading,
});

export const WelcomeSetupChoose = Loadable({
  loader: () => import('./Pages/Welcome/welcome'),
  loading: Loading,
});

export const KWADHire = Loadable({
  loader: () => import('./Pages/Hire/hire'),
  loading: Loading,
});

export const KWADHomePage = Loadable({
  loader: () => import('./Pages/Home'),
  loading: Loading,
});
