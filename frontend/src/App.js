//import logo from './logo.svg';
//import './App.css';
//import './components/Navbar';
//import './components/Footer',
import {Footer} from './components/Footer.jsx'
import {Navbar} from './components/Navbar.jsx'
import {TestModelComponent} from './testfront.js'

function App() {
  return (
    <>
      
      <Navbar />
      
      <div>
        <p> The body is here</p>
      </div>

      <Footer />

      <TestModelComponent />  

    </>
  );
}

export default App;
