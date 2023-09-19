import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import PageSpeedService from './services/PageSpeedService';

import SeoChecker from './pages/SeoCheker/SeoChecker';
import InputLinkPage from './pages/InputLinkPage/InputLinkPage';

import { useState } from 'react';


function App() {

  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [pageData, setPageData] = useState({});
  
  const PageSpeed = new PageSpeedService();



  const onSubmit = async (newLink) => {
      setErrorMsg(null);
      setPageData({});
      setLoading(true);
      await PageSpeed.getPageData(newLink)
      .then((data) => onLoadingData(data))
      .catch(onError);
      setLink(newLink);
  }

  const onLoadingData = (data) => {
    setPageData(data);
    setLoading(false);
  }

  const onError = (error) => {
    setPageData({});
    setLoading(false);
    if (error.message === "Failed to fetch")
      setErrorMsg("Network");
    else 
      setErrorMsg("Link");
  }

  
  const content = link ?
  <SeoChecker 
  pageData = {pageData} 
  loading={loading} 
  errorMsg={errorMsg}
  onSubmit={onSubmit}/> : 
  <InputLinkPage 
  onSubmit = {onSubmit} 
  loading={loading}
  errorMsg={errorMsg}/>


  return (
    <div className="App">
        {content}
    </div>
  );
}

export default App;
