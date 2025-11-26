import Sinister from './pages/Sinister';
import TheAutopsyofJaneDoe from './pages/TheAutopsyofJaneDoe';
import TheConjuring4 from './pages/TheConjuring4';
import TheConjuring from './pages/TheConjuring';
import TheConjuring3 from './pages/TheConjuring3';
import TheConjuring2 from './pages/TheConjuring2';
import Weapons from './pages/Weapons';
import Home from './pages/Home';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {useState} from 'react';
//import axios from 'axios';
import {Link} from 'react-router-dom';
import './App.css'

function App(){
  const [stvar, setMess] = useState('');
  const [tfvar, setTF] = useState(true);
  const [tfvarhome, setTFHome] = useState(false);
  const handleClick = (paramm) => {
    //axios.post('http://localhost:8080/genericEndpoint',paramm)
    //.then(response => setMess(response.data))
    setMess("Welcome squidward welcome squidward welcome squidward123");
    setTF(tfvar=>!tfvar);
    setTFHome(tfvarhome => !tfvarhome);
  }
  const homeClick = () => {
    setTF(tfvar=>!tfvar);
    setTFHome(tfvarhome => !tfvarhome);
  }
  const linksData = [
    { id: 1, text: 'Weapons', to: '/Weapons' },
    { id: 2, text: 'The Conjuring 2', to: '/TheConjuring2' },
    { id: 3, text: 'The Conjuring 3', to: '/TheConjuring3' },
    { id: 4, text: 'The Conjuring', to: '/TheConjuring' },
    { id: 5, text: 'The Conjuring 4', to: '/TheConjuring4' },
    { id: 6, text: 'The Autopsy of Jane Doe', to: '/TheAutopsyofJaneDoe' },
    { id: 7, text: 'Sinister', to: '/Sinister' },
    ];
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Weapons" element={<Weapons name = {stvar}/>} />
        <Route path="/TheConjuring2" element={<TheConjuring2 name = {stvar}/>} />
        <Route path="/TheConjuring3" element={<TheConjuring3 name = {stvar}/>} />
        <Route path="/TheConjuring" element={<TheConjuring name = {stvar}/>} />
        <Route path="/TheConjuring4" element={<TheConjuring4 name = {stvar}/>} />
        <Route path="/TheAutopsyofJaneDoe" element={<TheAutopsyofJaneDoe name = {stvar}/>} />
        <Route path="/Sinister" element={<Sinister name = {stvar}/>} />
      </Routes>
      <nav>
        <ul style={{listStyleType: 'none'}}>
              {tfvarhome && <li>
                <Link to='/' onClick={homeClick} class="top-right-div">Home</Link>
              </li>}
              {linksData.map((link) => (
              <li key={link.id}>
                  {tfvar &&<Link to={link.to} onClick = {()=>handleClick(link.to)}>{link.text}</Link>}
              </li>
              ))}
        </ul>
      </nav>
    </div>
  );
}

export default App