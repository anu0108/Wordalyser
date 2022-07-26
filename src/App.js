
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
     setAlert({
        msg: message,
        type: type
     })
     setTimeout(() => {
        setAlert(null);
     }, 1500);
  }

  const toggleMode=() =>{
    if (mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor='#042743';
       showAlert("Dark mode has been enabled","success");
      //  document.title='Wordalyser - Dark Mode'  ;
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      // document.title='Wordalyser - Light Mode';
    }
  }

  return (
    <>
      {/* { <Navbar title="textUtils"  aboutText="About"/> } */}
      {/* <Router> */}
      <Navbar title="Wordalyser"  mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Try Wordalyser"  mode={mode}/>
      {/* <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            
          </Route>
          <Route exact path="/" element={ }>
           
          </Route>
        </Routes> */}
      {  }
      {/* <About/> */}
      </div>
      {/* </Router> */}
      
    </>
  );
}

export default App;
