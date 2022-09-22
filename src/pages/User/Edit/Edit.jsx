import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import UserForm from '../../../features/UserForm/UserForm';
import usersApi from '../../../api/usersApi';
import Title from '../../../components/Title/Title';

import { selectCurrentUserId } from '../../../store/user/user.selector';

import styles from './Edit.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Edit() {
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
    <div className="grid wide">
      <div className="row">
        <Title>Chỉnh sửa thông tin</Title>
      </div>
      <div className={cx('row', 'edit')}>
        <div className="col c-1 m-3 l-3"></div>
        <div className="col c-10 m-6 l-6">
          {(!idUser || Boolean(user)) && (
            <UserForm
              initialValues={initialValues}
              onSubmit={handleProductFormSubmit}
              nameSubmit="Cập nhật"
            />
          )}
        </div>
        <div className="col c-1 m-3 l-3"></div>
      </div>
    </div>
  );
}

export default Edit;
