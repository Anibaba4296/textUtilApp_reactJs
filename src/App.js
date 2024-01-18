import { useState } from 'react';
import './App.css';

// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [alert, setAlert] = useState(null);
const showAlert = (message,type)=>{
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}
  const [mode, setMode] = useState('light'); // set mode
const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#130541';
    showAlert("Dark mode enabled",'success');
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode enabled",'success');
  }
}

  return (
    <>
    {/* this will pass page title as props i.e, proprties */}
      <NavBar title="textUtils" aboutText="About textUtils" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container my-4" >
      <TextForm alertMsg={showAlert} heading="Enter the text to analyze" mode={mode}/> 
      {/* <About/>  */}
      </div>
    </>
  );
}

export default App;
