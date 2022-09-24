import './GlobalStyles.scss';
import './Grid.scss';
import PropTypes from 'prop-types';

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

function GlobalStyles({ children }) {
  return children;
}

export default GlobalStyles;
