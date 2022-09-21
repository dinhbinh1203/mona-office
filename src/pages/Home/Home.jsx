import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import SlickSlider from '../../components/SlickSlider/SlickSlider';
import Introduce from '../../components/Introduce/Introduce';
import usersApi from '../../api/usersApi';
import ordersApi from '../../api/ordersApi';
import purchasesApi from '../../api/purchasesApi';
import Select from '../../components/Select/Select';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
const INTRODUCE = [
  {
    id: 1,
    title: 'Chất lượng tốt nhất',
    icon: 'verified',
    description: 'Chuyên bán lẻ các dụng cụ, thiết bị văn phòng.',
  },
  {
    id: 2,
    title: 'Giá cả phù hợp',
    icon: 'paid',
    description: 'Chuyên bán lẻ các dụng cụ, thiết bị văn phòng.',
  },
  {
    id: 3,
    title: 'Sản phẩm đa dạng',
    icon: 'edit_note',
    description: 'Chuyên bán lẻ các dụng cụ, thiết bị văn phòng.',
  },
  {
    id: 4,
    title: 'Thân thiện môi trường',
    icon: 'nature',
    description: 'Chuyên bán lẻ các dụng cụ, thiết bị văn phòng.',
  },
];

function Home() {
  // const data = ordersApi.remove('1zVoXJb8iLeb0MqxRmjRTMgNRc83');

  const cartItemne = [
    {
      name: 'Phân trang nhựa',
      imageUrl:
        'https://raw.githubusercontent.com/binhdinhbinh57kt/data-mona-main/main/assets/image/biahoso/biahoso-san-pham-3.jpg',
      price: 13000,
      prevPrice: 20000,
      description:
        '- Dạng bìa nhựa, dọc thân bấm lổ, hiển thị số thứ tự (1-10)\n- Chức năng: phân nhóm nội dung chứng từ, sử dụng cùng với bìa còng hồ sơ\n- Đáp ứng tiêu chuẩn sức khỏe người dùng văn phòng\n- Nsx: Nhật Bản\n- Quy cách: 5 bộ / bịch\n- Tiết kiệm hơn khi chọn mua theo nhóm\n- Chương trình khuyến mãi chỉ áp dụng cho các đơn hàng trực tuyến\n- Vận chuyển miễn phí dựa trên giá trị đơn hàng\n- Mẫu mã và thông tin sản phẩm có thể thay đổi theo chính sách nhà sản xuất\n- Đơn vị tính: Bộ (10 tờ)',
      categoryId: 1,
      id: 3,
      quantity: 1,
    },
  ];

  // usersApi
  // purchasesApi
  // ordersApi

  return (
    <div>
      <div className="grid ">
        <SlickSlider />
      </div>
      <div className="grid wide">{/* <Select /> */}</div>
      <div className={cx('grid', 'home-introduce')}>
        <div className={cx('grid', 'wide')}>
          <div className={cx('row')}>
            {INTRODUCE.map((item) => (
              <div
                className={cx('col', 'c-6', 'm-3', 'l-3', 'introduce-item')}
                key={item.id}
              >
                <Introduce item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
