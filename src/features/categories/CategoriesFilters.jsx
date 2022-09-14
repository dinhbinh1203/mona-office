import { Select } from '@mui/material';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import styles from './CategoriesFilters.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CategoriesFilters({ filter, categories, onChange, total }) {
  const handleCategoriesChange = (e) => {
    if (!onChange) return;

    const newFilter = {
      ...filter,
      _page: 1,
      categoryId: e.target.value || undefined,
    };
    onChange(newFilter);

    const newTotal = {
      categoryId: e.target.value || undefined,
    };
    total(newTotal);
  };

  const handleTotal = (e) => {
    if (!total) return;

    const newTotal = {
      categoryId: e.target.value || undefined,
    };
    total(newTotal);
  };

  const handleSortChange = (e) => {
    if (!onChange) return;

    const value = e.target.value || undefined;
    const [_sort, _order] = value.split('.');
    const newFilter = {
      ...filter,
      _sort: _sort || undefined,
      _order: _order || undefined,
    };
    onChange(newFilter);
  };

  return (
    <div className={cx('categories__filters')}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">DANH MỤC</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={filter.categoryId || ''}
          label="DANH MỤC"
          onChange={handleCategoriesChange}
          total={handleTotal}
        >
          <MenuItem value="">
            <em>Tất cả sản phẩm</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem value={category.id} key={category.id}>
              {category.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" fullWidth>
        <InputLabel id="sortBy">SẮP XẾP</InputLabel>
        <Select
          labelId="sortBy"
          value={filter._sort ? `${filter._sort}.${filter._order}` : ''}
          onChange={handleSortChange}
          label="SẮP XẾP"
        >
          <MenuItem value="">Mặc định</MenuItem>
          <MenuItem value="name.asc">Sản phẩm theo A -> Z</MenuItem>
          <MenuItem value="name.desc">Sản phẩm theo Z -> A</MenuItem>
          <MenuItem value="name.desc">Giá tăng dần</MenuItem>
          <MenuItem value="price.desc">Giá giảm dần</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default CategoriesFilters;
