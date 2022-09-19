import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';

const AdminRoute = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);

  let admin = false;
  if (currentUser) {
    if (currentUser.id === 'HEk77GAAviV6I4HFtxLswsrhFiF3') {
      admin = true;
    }
  }

  return admin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
