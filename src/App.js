
import './App.css';
import Navbar from './Components/Navbar'
import MintNFT from './Components/MintNFT';
import Dashboard from './Components/Dashboard';
import MintProfile from './Components/MintProfile';

import { Footer } from './Components/Footer';


function App() {
  return (

    <div className="App">
      <Navbar title="Hey"/>

      <header className="App-header">
      </header>
      <MintNFT/>
      {/* <Poap/> */}
      <Dashboard/>
      <MintProfile/>
      <Footer/>
     
    </div>
  );
}

export default App;
