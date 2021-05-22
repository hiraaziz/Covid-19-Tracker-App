import React, {useState} from 'react';
import NavBar from './Components/NavBar'
import InfoPanel from './Components/InfoPanel'
import Footer from './Components/Footer'
import './App.css';

function App() {

  const screenConfig = useState(0);
  return (
   
    <div className="banner">
      <NavBar/>
      <InfoPanel currentScreen={screenConfig[0]}/>
      <Footer screenConfig={screenConfig}/>
    </div>
  
  );
}

export default App;
