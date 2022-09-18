import purchasesApi from '../../../api/purchasesApi';
import { useEffect, useState } from 'react';
import Loading from '../../../components/Loading/Loading';

function AdminPurchases() {
  const [listPurchases, setListPurchases] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await purchasesApi.getAll();
        setListPurchases(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="grid wide">
      <div>
        {listPurchases.length ? (
          listPurchases.map((user) => (
            <div key={user.id}>
              <div>name: {user.id}</div>
              <div>
                {user.cartItems.map((item) => (
                  <div>
                    <div>Tên sản phẩm {item.name}</div>
                    <div>Số lượng {item.quantity}</div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>Chưa có đơn hàng nào </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPurchases;
