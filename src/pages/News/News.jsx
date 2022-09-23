import { Routes, Route } from 'react-router-dom';

import NewDetail from './NewDetail/NewDetail';
import NewsContainer from './NewsContainer/NewsContainer';

function News() {
  return (
    <Routes>
      <Route index element={<NewsContainer />} />
      <Route path=":id" element={<NewDetail />} />
    </Routes>
  );
}

export default News;
