import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import PageSpeedService from './services/PageSpeedService';

import SeoChecker from './pages/SeoCheker/SeoChecker';
import InputLinkPage from './pages/InputLinkPage/InputLinkPage';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputComponent from './component/InputComponent/InputComponent';


function App() {

  const dispatch = useDispatch();

  const [link, setLink] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [pageData, setPageData] = useState({});
  
  const PageSpeed = new PageSpeedService();

  const onSubmit = async (newLink) => {
      setErrorMsg(null);
      setPageData({});
      dispatch({type: "isLoading"})
      await PageSpeed.getPageData(newLink)
      .then((data) => onLoadingData(data))
      .catch(onError);
      setLink(newLink);
  }

  const onLoadingData = (data) => {
    setPageData(data);
    dispatch({type: "isNotLoading"})
  }

  const onError = (error) => {
    setPageData({});
    dispatch({type: "isNotLoading"})
    if (error.message === "Failed to fetch")
      setErrorMsg("Network");
    else 
      setErrorMsg("Link");
  }

  
  const content = link ?
  <SeoChecker 
  pageData = {pageData}/> : 
  <InputLinkPage 
  onSubmit = {onSubmit} 
  errorMsg={errorMsg}/>


  return (
    <div className="App">
        <InputComponent 
        onSubmit={onSubmit}
        errorMsg={errorMsg}/>
        {content}
    </div>
  );
}

export default App;
