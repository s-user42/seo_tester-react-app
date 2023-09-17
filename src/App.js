import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import PageSpeedService from './services/PageSpeedService';

import SeoChecker from './pages/SeoCheker/SeoChecker';
import InputLinkPage from './component/InputLinkPage/InputLinkPage';

import { useState } from 'react';

function App() {

  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const PageSpeed = new PageSpeedService();

  const [pageData, setPageData] = useState(null);

  const onSubmit = async (newLink) => {
    
      setLink(newLink)
      setError(false);
      setLoading(true);
      await PageSpeed.getPageData(newLink)
      .then((data) => onLoadingData(data))
      .catch(onError);
  }

  const onLoadingData = (data) => {
    setPageData(data);
    setLoading(false);
  }

  const onError = () => {
    setLoading(false);
    setError(true);
  }

  const content = pageData ?
  <SeoChecker pageData = {pageData}/> : 
  <InputLinkPage onSubmit = {onSubmit} />


  return (
    <div className="App">
        {content}
        {loading ? <>loading</> : null}
        {error ? <>error</> : null}
    </div>
  );
}

export default App;
