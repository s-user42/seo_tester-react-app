import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import PageSpeedService from './services/PageSpeedService';

import SeoChecker from './pages/SeoCheker/SeoChecker';
import InputLinkPage from './pages/InputLinkPage/InputLinkPage';

import ReCAPTCHA from 'react-google-recaptcha';

import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './component/Header/Header';
import { useTranslation } from 'react-i18next';
import useLocalStorage from './component/helper/useLocalStorage';


function App() {

  const [capthcaIsDone, setCaptchaIsDone] = useState(false);
  const [capthcaMsg, setCaptchaMsg] = useState(false);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const link = useSelector(state => state.link);
  const [errorMsg, setErrorMsg] = useState('');
  const [pageData, setPageData] = useState({});
  const [LS_language,] = useLocalStorage('lang');

  const recaptchaRef = useRef();


  useEffect(() => {
    recaptchaRef.current.execute();
    dispatch({type: "language", payload: LS_language ? LS_language : "en"});
    i18n.changeLanguage(LS_language);
  }, [])
  
  const key = '6LfHREMoAAAAAHivq7kbBxg4MAZyFu8IXX5S6zVq';

  const PageSpeed = new PageSpeedService();

  const onSubmit = async (newLink) => {
      if (capthcaIsDone) {
        setErrorMsg(null);
        setPageData({});
        dispatch({type: "isLoading"})
        await PageSpeed.getPageData(newLink)
        .then((data) => onLoadingData(data, newLink))
        .catch(onError);
      } else {
        setCaptchaMsg(true)
      }
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

  const onChangeCaptcha = (value) => {
    if (value) {
      setCaptchaIsDone(true);
      setCaptchaMsg(false);
    }
  }

  
  const content = link && capthcaIsDone ?
  <SeoChecker 
  pageData = {pageData}/> : 
  <InputLinkPage 
  capthcaMsg={capthcaMsg}
  onSubmit={onSubmit} 
  errorMsg={capthcaMsg ? t("captcha-error") : errorMsg }/>


  return (
      <div className="App">
          <Header
          onSubmit={onSubmit}
          errorMsg={errorMsg}/>
          {content}

          <div className="captcha__container">
          <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={key}
          onChange={onChangeCaptcha}
          size="invisible"/>
          </div>
      </div>
  );
}

export default App;