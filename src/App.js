import Home from './pages/Home';
import Admin from './pages/Admin';
import SubmissionPage from './pages/SubmissionPage';
import OptionsPage from './pages/OptionsPage';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';
import './App.css'

function App(){
  const [ranVar, settfVar] = useState(true);
  const userData = {name: ranVar, age: settfVar};
  const homeClick = () => {
    settfVar(true)
  }

  const handlePageLoad = () => {
    console.log(window.location.pathname);
    if (window.location.pathname === "/" || window.location.pathname === "/*"){
      settfVar(true);
    }
    else{
      settfVar(false);
    }
  };

  useEffect(() => {
    handlePageLoad();
  },[]); // The empty dependency array ensures this runs only once

  return (
    <div>
      <nav className="top-left-div">
        <Link to='*' onClick={homeClick}>Home</Link>
        <Link to='/Admin'>Admin</Link>
      </nav>
      <Routes>
        <Route path="*" element={<Home {...userData}/>} />
        <Route path ="/Admin" element={<Admin />}/>
        <Route path ="/SubmissionPage" element={<SubmissionPage />}/>
        <Route path ="/OptionsPage" element={<OptionsPage />}/>
      </Routes>
    </div>
  );
}

export default App