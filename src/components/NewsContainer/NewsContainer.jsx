import { Routes, Route, Link } from 'react-router-dom';
import { NEWS } from '../../News';

function NewsContainer() {
  return (
    <div className="grid wide">
      <div>Tin mới nhất</div>
      {NEWS.map((item) => (
        <Link to={`/news/${item.name}`}>
          <div key={item.id}>{item.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default NewsContainer;
