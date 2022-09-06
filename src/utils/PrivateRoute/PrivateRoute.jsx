import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const PrivateRoute = ({ children, ...rest }) => {
  const currentUser = useSelector(selectCurrentUser);
  return currentUser ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoute;
