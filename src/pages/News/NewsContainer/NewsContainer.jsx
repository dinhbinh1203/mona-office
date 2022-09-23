import newsApi from '../../../api/newsApi';
import { useEffect, useState } from 'react';
import Loading from '../../../components/Loading/Loading';

function NewsContainer() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await newsApi.getAllNews();
        setNews(data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="grid wide">
      <div>Tin mới nhất</div>
      {loading ? (
        <div>
          {news.map((item) => (
            <a href={`/news/${item.id}`}>
              <div key={item.id}>{item.name}</div>
            </a>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default NewsContainer;
