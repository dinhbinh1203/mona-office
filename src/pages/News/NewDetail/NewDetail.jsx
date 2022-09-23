import { useParams } from 'react-router';
import styles from './NewDetail.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Socials from '../../../components/Socials/Socials';

import Loading from '../../../components/Loading/Loading';
import newsApi from '../../../api/newsApi';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function NewDetail() {
  const { id } = useParams();

  const [newItem, setNewItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataNewItem = await newsApi.getNewById(id);
        const dataListNews = await newsApi.getAllNews();
        setNewItem(dataNewItem);
        setListNews(dataListNews);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const stringToArray = (string) => {
    const myArray = string.split('\n');
    return myArray;
  };

  return (
    <div className="grid wide">
      {loading ? (
        <div className={cx('new-detail', 'row')}>
          <div className={cx('detail-sidebar', 'col', 'c-12', 'l-3', 'm-4')}>
            <div className={cx('detail-sidebar--content')}>
              <div className={cx('sidebar-content--title')}>BÀI VIẾT MỚI</div>
              <div className={cx('sidebar-content--list')}>
                {listNews.map((item) => (
                  <a href={`/news/${item.id}`} key={item.id}>
                    <div className={cx('sidebar-content--item')}>
                      <div className={cx('sidebar-item--image')}>
                        <img src={item.imageUrl} alt="book"></img>
                      </div>
                      <div className={cx('sidebar-item--name')}>
                        {item.name}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={cx('detail-container', 'col', 'c-12', 'l-9', 'm-8')}>
            <Link className={cx('container-title')} to="/news">
              Tin tức
            </Link>
            <div className={cx('detail-item')} key={newItem.id}>
              <div className={cx('detail-item--title')}>
                <div className={cx('item-title--content')}>{newItem.name}</div>
                <div className={cx('item-title--divider')}></div>
              </div>
              <div className={cx('detail-item--container')}>
                <div className={cx('detail-image')}>
                  <img src={newItem.imageUrl} alt="book"></img>
                </div>
                {stringToArray(newItem?.description).map((item, index) => (
                  <div className={cx('item-paragraph')} key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Socials />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default NewDetail;
