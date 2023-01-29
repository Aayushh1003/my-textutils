// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const[mode,setmode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils-Dark Mode";
    }

    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils-Light Mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About/>}/>
          {/* </Route> */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyse below" mode={mode} />}/>
          {/* </Route> */}
      </Routes>
      </div>
      </Router>
    </>
  );
}

{/* <TextForm showAlert={showAlert} heading = "Enter the text to analyse below" mode={mode}/> */}
export default App;