import PropTypes from 'prop-types';
import styles from './Nav.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

Nav.propTypes = {
  categories: PropTypes.node.isRequired,
};

function Nav({ categories }) {
  return (
    <ul className={cx('categories__list')}>
      {categories.map((category) => (
        <li key={category.id} className={cx('category')}>
          <a href={category.href} className={cx('category__title')}>
            {category.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
