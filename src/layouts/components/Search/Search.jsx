import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faXmark,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';

import { useState, useRef, useEffect } from 'react';
import productsApi from '../../../api/productsApi';
import useOutsideClick from '../../../utils/hooks/useOutsideClick';
import removeVietnameseTones from '../../../utils/hooks/removeVietnameseTones';

const cx = classNames.bind(styles);

function Search() {
  const formatMoney = (n) => {
    return (Math.round(n * 100) / 100).toLocaleString();
  };

  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const handleClearInput = () => {
    setSearchValue('');
    inputRef.current.focus();
    setShowResult(false);
  };

  const changeValueInput = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === '') {
      setShowResult(false);
    } else {
      setShowResult(true);
    }
  };

  const handleClickOutside = () => {
    setShowResult(false);
  };

  const refCheck = useOutsideClick(handleClickOutside);

  useEffect(() => {
    (async () => {
      try {
        const data = await productsApi.search({
          nameEng_like: removeVietnameseTones(searchValue),
        });

        setSearchResult(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchValue]);

  return (
    <div className={cx('search')} ref={refCheck}>
      <div className={cx('search__input')}>
        <div className={cx('wrapper__input')}>
          <input
            value={searchValue}
            type="text"
            className={cx('input')}
            placeholder="Tìm kiếm "
            onChange={changeValueInput}
            ref={inputRef}
          ></input>
          {!!searchValue && !loading && (
            <div
              className={cx('input__icon', 'input__icon--clear')}
              onClick={handleClearInput}
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
          )}
          {loading && (
            <div className={cx('input__icon', 'input__icon--loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </div>
          )}
        </div>
        <button className={cx('search__input--btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div
        className={cx(
          'search__result',
          showResult ? 'show__result' : 'close__result',
        )}
      >
        <div className={cx('search__result--title')}>Sản phẩm</div>
        <div className={cx('search__result--container')}>
          {searchResult.map((product) => (
            <a
              href={`/shop/product/${product.id}`}
              className={cx('result__item')}
              key={product.id}
            >
              <div className={cx('result__item--image')}>
                <img alt="result" src={product.imageUrl} />
                <div className={cx('result__item--name')}>{product.name}</div>
              </div>
              <div className={cx('result__item--price')}>
                <div className={cx('item__prevPrice')}>
                  {`${formatMoney(product.prevPrice)}`}đ
                </div>
                <div className={cx('item__Price')}>
                  {`${formatMoney(product.price)}`}đ
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
