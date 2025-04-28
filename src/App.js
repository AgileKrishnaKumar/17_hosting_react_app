
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const[mode, setMode]= useState("light");// whether dark mode is enabled or not.
  const[alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#02324c";
      showAlert("DarkMode has been enabled", "success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("LightMode has been enabled", "success")
    }
  }

  return (
    <>
        <Navbar title="TextUtils" aboutTitle="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm textAreaTitle="Enter Text to Analyse below" mode={mode} showAlert={showAlert}/>
        
    </>
  );
}

export default App;
