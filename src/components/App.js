import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import AppBarComp from './AppBar/AppBar';
import PrivateRoute from './PrivateRoute';
import PablicRoute from './PublicRoute';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import('../pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import('../pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser);
  }, [dispatch]);

  return (
    <>
      <AppBarComp />
      <Suspense fallback={<p>Wait...</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PablicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterPage}
          />
          <PablicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginPage}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsPage}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   render() {
//     return (
//       <>
//         <AppBarComp />
//         <Suspense fallback={<p>Wait...</p>}>
//           <Switch>
//             <Route exact path="/" component={HomePage} />
//             <PablicRoute
//               path="/register"
//               restricted
//               redirectTo="/contacts"
//               component={RegisterPage}
//             />
//             <PablicRoute
//               path="/login"
//               restricted
//               redirectTo="/contacts"
//               component={LoginPage}
//             />
//             <PrivateRoute
//               path="/contacts"
//               redirectTo="/login"
//               component={ContactsPage}
//             />
//             <Redirect to="/" />
//           </Switch>
//         </Suspense>
//       </>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
