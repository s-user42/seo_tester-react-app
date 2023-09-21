import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import PageSpeedService from './services/PageSpeedService';

import SeoChecker from './pages/SeoCheker/SeoChecker';
import InputLinkPage from './pages/InputLinkPage/InputLinkPage';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './component/Header/Header';
import { useTranslation } from 'react-i18next';


function App() {

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const link = useSelector(state => state.link);

  const [errorMsg, setErrorMsg] = useState('');
  const [pageData, setPageData] = useState({});
  
  const PageSpeed = new PageSpeedService();

  const onSubmit = async (newLink) => {
      setErrorMsg(null);
      setPageData({});
      dispatch({type: "isLoading"})
      await PageSpeed.getPageData(newLink)
      .then((data) => onLoadingData(data, newLink))
      .catch(onError);
  }

  const onLoadingData = (data, newLink) => {
    setPageData(data);
    dispatch({type: "isNotLoading"})
    dispatch({type: "link", payload: newLink});
  }

  const onError = (error) => {
    setPageData({});
    dispatch({type: "isNotLoading"})
    if (error.message === "Failed to fetch")
      setErrorMsg(t("network-error"));
    else 
      setErrorMsg(t("link-error"));
  }

  
  const content = link ?
  <SeoChecker 
  pageData = {pageData}/> : 
  <InputLinkPage 
  onSubmit = {onSubmit} 
  errorMsg={errorMsg}/>


  return (
    <div className="App">
        <Header
        onSubmit={onSubmit}
        errorMsg={errorMsg}/>
        {content}
    </div>
  );
}

export default App;
