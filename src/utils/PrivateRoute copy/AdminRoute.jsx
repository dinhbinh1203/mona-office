import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUserId } from '../../store/user/user.selector';

const AdminRoute = ({ children, ...rest }) => {
  const currentUserId = useSelector(selectCurrentUserId);
  let admin = false;
  if (currentUserId === 'HEk77GAAviV6I4HFtxLswsrhFiF3') {
    admin = true;
  }
  return admin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
