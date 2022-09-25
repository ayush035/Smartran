
import './App.css';
import Navbar from './Components/Navbar'
import MintNFT from './Components/MintNFT';
import Dashboard from './Components/Dashboard';
import MintProfile from './Components/MintProfile';

import { Footer } from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar title="Hey" />
      <font color="white" face="verdana">
        <div className="">
          <h2 >🔗 Defi </h2>
          <p >
            Our project aims to make transactions (mainly payment of salaries
            <br />
            and deals) completely decentralized and transparent along with
            <br />
            solving a problem that is suffered by most of the employees/partners
            <br />
            or everyone receiving payment for their work as a job.
            <br />
          </p>
        </div>
        <div>
          <h2 >⚓️ The problem </h2>
          <p>
            In the current and recurring payoff system we are paid once in month
            <br />
            and then have to wait for another month to get paid . This arises
            <br />
            many day to day problem in ones life which can create problems at
            <br />
            the time of any serious issues. Also, there are many delays in the
            <br />
            pay in any organization that occurs due to various reasons, people
            <br />
            get very uncertain about their pay as organizations starts cutting
            <br />
            off their pay at the time of financial loss. Which harms public in
            <br />
            many ways.
          </p>
        </div>
        <div>
          <h2>🛠 Solution</h2>
          <p>
            Our Application provides live time streaming of money that flows
            <br />
            into the account of clients continuously with every second of time
            <br />
            which can be easily withdrawn or transferred to any other wallet at
            <br />
            any point of time. Providing transparency and security of payments.
            <br />
            The payment that is to be made to the clients will be locked in the
            <br />
            smart contract signed by both admin and client. Then the money will
            <br />
            flow into the account of clients every second. You'll receive your
            <br />
            entire payment by the end of the certain and predefined time but
            <br />
            won't have to wait for you term to get over to receive your pay
            <br />
            again . Thus making it much more convenient for the clients to
            <br />
            receive their payment with transparency and with easy and convenient
            <br />
            way.
          </p>
        </div>
        <div>
          
          <h2>🎯 Goal</h2>
          <p>
            Our ultimate goal is to make transactions and payouts much more
            <br />
            convenient, transparent and Totally Decentralized. Solving issues
            <br />
            faced by almost everyone in today's world. We Aim at resolving
            <br />
            financial issues faced by common people
            <br />
         </p>
        </div>
      </font>

      <Footer />
    </div>
  );
}

export default App;
