import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Pages/SignUp';
import DashboardTest from './components/Pages/DashboardTest';
import SheetJSReactAoO from './components/Pages/SheetJSReactAoO';

function App() {
  return (
    <div className="App">

      <SheetJSReactAoO/>
      {/* <SignUp/> */}
      {/* <Router>
      <Navbar />
      {/* <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
      </Routes> }
    </Router> */}
    </div>
  );
}

export default App;
