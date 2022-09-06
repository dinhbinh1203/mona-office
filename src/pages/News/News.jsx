import { Routes, Route, useParams } from 'react-router-dom';

import NewsContainer from '../../components/NewsContainer/NewsContainer';
import { NEWS } from '../../News';
import NewDetail from './NewDetail/NewDetail';
function News() {
  return (
    <Routes>
      <Route index element={<NewsContainer />} />
      <Route path=":name" element={<NewDetail data={NEWS} />} />
    </Routes>
  );
}

export default News;
