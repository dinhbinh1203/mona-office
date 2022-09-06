import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

function InformationUser() {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div>
      <h1>InformationUser page</h1>
      {currentUser.displayName === null ? (
        <div>
          <div>{`Tên user:  thanh binh`}</div>
        </div>
      ) : (
        <div>Khong co thong tin</div>
      )}
    </div>
  );
}

export default InformationUser;
