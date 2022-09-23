import { Routes, Route, useParams } from 'react-router-dom';
import { NEWS } from '../../News';
import NewDetail from './NewDetail/NewDetail';
import { useEffect, useState } from 'react';
import newsApi from '../../api/newsApi';
import Loading from '../../components/Loading/Loading';

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
