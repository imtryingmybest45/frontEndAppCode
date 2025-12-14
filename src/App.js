import Home from './pages/Home';
import Admin from './pages/Admin';
import SubmissionPage from './pages/SubmissionPage';
import OptionsPage from './pages/OptionsPage';
import DeletePage from './pages/DeletePage';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';
import './App.css'

function usePersistedState(key, defaultValue) {
  // Initialize state with value from localStorage if available
  const [state, setState] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

function App(){
  const [ranVar, settfVar] = useState(true);

  const [links, setLinks] = usePersistedState('linkNames',[{id: "hello"},{id: "goodbye"}]);

  const userData = {name: ranVar, age: settfVar};

  const homeClick = () => {
    settfVar(true)
  }

  const handlePageLoad = () => {
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
        <Route path="*" element={<Home {...userData} linksStuff={setLinks}/>} />
        <Route path ="/Admin" element={<Admin />}/>
        <Route path ="/SubmissionPage" element={<SubmissionPage />}/>
        <Route path ="/DeletePage" element={<DeletePage linksData={links}/>}/>
        <Route path ="/OptionsPage" element={<OptionsPage />}/>
      </Routes>
    </div>
  );
}

export default App