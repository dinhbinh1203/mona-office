import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import UserForm from '../../../features/UserForm/UserForm';

import usersApi from '../../../api/usersApi';
import { selectCurrentUserId } from '../../../store/user/user.selector';
import Button from '../../../components/Button/Button';

function UserInformationEdit() {
  const idUser = useSelector(selectCurrentUserId);
  const [user, setUser] = useState();

  useEffect(() => {
    if (!idUser) return;

    (async () => {
      try {
        const data = await usersApi.getUserById(idUser);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [idUser]);

  const handleProductFormSubmit = async (formValues) => {
    await usersApi.update(formValues);

    toast.success('Cập nhật thành công');
  };

  const initialValues = {
    id: user?.id,
    name: user?.name,
    phone: user?.phone,
    address: user?.address,
  };

  return (
    <>
      <div>
        {(!idUser || Boolean(user)) && (
          <UserForm
            initialValues={initialValues}
            onSubmit={handleProductFormSubmit}
            nameSubmit="Cập nhật"
          />
        )}
      </div>
      <a href="/">
        <Button primary>Quay về trang chủ</Button>
      </a>
    </>
  );
}

export default UserInformationEdit;
