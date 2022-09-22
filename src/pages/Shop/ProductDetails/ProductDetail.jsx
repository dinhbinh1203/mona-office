import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Loading from '../../../components/Loading/Loading';
import DescriptionProduct from '../../../components/DescriptionProduct/DescriptionProduct';
import Rate from '../../../components/Rate/Rate';
import Button from '../../../components/Button/Button';
import Rules from '../../../components/Rules/Rules';

import { addItemToCart } from '../../../store/cart/cart.action';
import { selectCurrentUser } from '../../../store/user/user.selector';

import productsApi from '../../../api/productsApi';
import ordersApi from '../../../api/ordersApi';

import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const isLoading = Boolean(id);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await productsApi.getProductById(id);
        const listItem = await ordersApi.getOrderById(currentUser.id);
        setCartItems(listItem);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  const [activeTab, setActiveTab] = useState('tab1');
  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };

  const stringToArray = (string) => {
    const myArray = string.split('\n');
    return myArray;
  };

  const addItemHandler = async () => {
    if (!currentUser) {
      navigate('/login');
    } else {
      const orderUser = await ordersApi.getOrderById(currentUser.id);
      const listCartItem = await orderUser.cartItems;
      await dispatch(addItemToCart(currentUser.id, listCartItem, product));
    }
  };

  const addBuyNow = async () => {
    if (!currentUser) {
      navigate('/login');
    } else {
      const orderUser = await ordersApi.getOrderById(currentUser.id);
      const listCartItem = await orderUser.cartItems;
      await dispatch(addItemToCart(currentUser.id, listCartItem, product));
      await navigate('/account/cart');
    }
  };

  return (
    <div>
      {(!isLoading || Boolean(product)) && (
        <div className="grid wide">
          <div className={cx('container', 'row')}>
            <div className={cx('product__image', 'col', 'l-6', 'm-12', 'c-12')}>
              <img src={product.imageUrl} alt="product"></img>
            </div>
            <div
              className={cx('product__content', 'col', 'l-6', 'm-12', 'c-12')}
            >
              <div className={cx('content__title')}>{product.name}</div>
              <div className={cx('content_-divider')}></div>
              {product.price && (
                <div className={cx('content__price')}>
                  {product.prevPrice && (
                    <div className={cx('content__price--prev')}>
                      {`${formatMoney(product.prevPrice)}`}₫
                    </div>
                  )}
                  <div className={cx('content__price--now')}>
                    {`${formatMoney(product.price)}`}₫
                  </div>
                </div>
              )}
              <div className={cx('content__description')}>
                {stringToArray(product.description)
                  .filter((_, idx) => idx < 3)
                  .map((detailDescription, index) => (
                    <div className={cx('detail__description')} key={index}>
                      {detailDescription}
                    </div>
                  ))}
              </div>
              <div className={cx('content__selector')}>
                <div className={cx('selector__quantity')}>
                  <span className={cx('quantity__btn')}>-</span>
                  <input
                    type="button"
                    value="1"
                    min="1"
                    className={cx('quantity__number')}
                  />
                  <span className={cx('quantity__btn')}>+</span>
                </div>
                <div></div>

                <Button
                  primary
                  className={cx('selector__add')}
                  onClick={addItemHandler}
                >
                  THÊM VÀO GIỎ
                </Button>
                <Button red className={cx('selector__add')} onClick={addBuyNow}>
                  MUA NGAY
                </Button>
              </div>
              <Rules />
            </div>
          </div>
          <div className={cx('table', 'row')}>
            <div className={cx('table__choose', 'col', 'c-12', 'l-12', 'm-12')}>
              <div className={cx('choose__title')}>
                <div
                  className={cx(
                    'choose__title--item',
                    activeTab === 'tab1' ? 'active' : '',
                  )}
                  onClick={handleTab1}
                >
                  Mô tả
                </div>
                <div
                  className={cx(
                    'choose__title--item',
                    activeTab === 'tab2' ? 'active' : '',
                  )}
                  onClick={handleTab2}
                >
                  Đánh giá (0)
                </div>
              </div>
              <div className={cx('choose__container')}>
                {activeTab === 'tab1' ? (
                  <DescriptionProduct
                    name={product.name}
                    list={stringToArray(product.description)}
                  />
                ) : (
                  <Rate name={product.name} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
