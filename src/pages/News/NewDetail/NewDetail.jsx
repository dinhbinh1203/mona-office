import { useParams } from 'react-router';
import styles from './NewDetail.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Socials from '../../../components/Socials/Socials';

const cx = classNames.bind(styles);

function NewDetail({ data }) {
  const { name } = useParams();

  return (
    <div className="grid wide">
      <div className={cx('new-detail', 'row')}>
        <div className={cx('detail-sidebar', 'col', 'c-12', 'l-3', 'm-4')}>
          <div className={cx('detail-sidebar--input')}>
            <input
              className={cx('sidebar-input')}
              placeholder="Tìm kiếm..."
            ></input>
            <div className={cx('sidebar-input-icon')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className={cx('detail-sidebar--content')}>
            <div className={cx('sidebar-content--title')}>BÀI VIẾT MỚI</div>
            <div className={cx('sidebar-content--list')}>
              {data.map((item) => (
                <Link to={`/news/${item.name}`}>
                  <div className={cx('sidebar-content--item')} key={item.id}>
                    <div className={cx('sidebar-item--image')}>
                      <img src={item.image} alt="book"></img>
                    </div>
                    <div className={cx('sidebar-item--name')}>{item.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={cx('detail-container', 'col', 'c-12', 'l-9', 'm-8')}>
          <Link className={cx('container-title')} to="/news">
            Tin tức
          </Link>
          {data
            .filter((list) => list.name === name)
            .map((list) => (
              <div className={cx('detail-item')} key={list.id}>
                <div className={cx('detail-item--title')}>
                  <div className={cx('item-title--content')}>{list.name}</div>
                  <div className={cx('item-title--divider')}></div>
                </div>
                <div className={cx('detail-item--container')}>
                  <div className={cx('detail-image')}>
                    <img src={list.image} alt="book"></img>
                  </div>
                  {list.description.map((item, index) => (
                    <div className={cx('item-paragraph')} key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}

          <Socials />
        </div>
      </div>
    </div>
  );
}

export default NewDetail;
