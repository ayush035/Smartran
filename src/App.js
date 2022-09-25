
import './App.css';
import Navbar from './Components/Navbar'
import MintNFT from './Components/MintNFT';
import Poap from './Components/Poap';
import Dashboard from './Components/Dashboard';
import MintProfile from './Components/MintProfile';
import { BrowserRouter as Router, Routes, 
  Route, Redirect, Link} from "react-router-dom";
import Admin from './Pages/Admin';
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
      <Router>
        <Routes>
          <Route exact path ="/" element={Admin}  />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
