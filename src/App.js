import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

function App() {
  const[mode,setMode]=useState('light');//to give the mode
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
      setAlert({
          msg:message,
          type:type
}
          
      )
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  
  }







  return (
    <>
{/* <Router> */}
<Navbar title="TextUtils" aboutText="About me" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<TextForm showAlert={showAlert} mode={mode} title="Drop your thoughts here"/>
<div className="container">

{/* <Switch>
  <Route path="/about">
    <About/>
  </Route>
  <Route exact path="/">
  <TextForm showAlert={showAlert} mode={mode} title="Drop your thoughts here"/>
  </Route>
</Switch> */}

</div>
{/* </Router> */}

   </>
  );
}

export default App;

//to add style inline within the tags we write style={{}}, i.e in double bracket because we write js inside curly brackets only
//to write string inside curly brackets we use template literal ` and then we can easily treat it as js string
//for adding variable in string we use ${}
//for react router we can simly follow the above the above steps nd replace (a,href) in navbar with (Link,to){and also change to='/about'}
//react do partial matching so always recommended to use 'exact path="/"' inside Route tag 