import Sinister from './pages/Sinister';
import The_Autopsy_of_Jane_Doe from './pages/The_Autopsy_of_Jane_Doe';
import The_Conjuring_4 from './pages/The_Conjuring_4';
import The_Conjuring from './pages/The_Conjuring';
import The_Conjuring_3 from './pages/The_Conjuring_3';
import The_Conjuring_2 from './pages/The_Conjuring_2';
import Weapons from './pages/Weapons';
import Home from './pages/Home';
import {Routes as Routes} from 'react-router-dom';
import {Route as Route} from 'react-router-dom';
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
    setMess("Welcome squidward welcome squidward welcome squidward");
    setTF(tfvar=>!tfvar);
    setTFHome(tfvarhome => !tfvarhome);
  }
  const homeClick = () => {
    setTF(tfvar=>!tfvar);
    setTFHome(tfvarhome => !tfvarhome);
  }
  const linksData = [
    { id: 1, text: 'Weapons', to: '/Weapons' },
    { id: 2, text: 'The Conjuring 2', to: '/The_Conjuring_2' },
    { id: 3, text: 'The Conjuring 3', to: '/The_Conjuring_3' },
    { id: 4, text: 'The Conjuring', to: '/The_Conjuring' },
    { id: 5, text: 'The Conjuring 4', to: '/The_Conjuring_4' },
    { id: 6, text: 'The Autopsy of Jane Doe', to: '/The_Autopsy_of_Jane_Doe' },
    { id: 7, text: 'Sinister', to: '/Sinister' },
    ];
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Weapons" element={<Weapons name = {stvar}/>} />
        <Route path="/The_Conjuring_2" element={<The_Conjuring_2 name = {stvar}/>} />
        <Route path="/The_Conjuring_3" element={<The_Conjuring_3 name = {stvar}/>} />
        <Route path="/The_Conjuring" element={<The_Conjuring name = {stvar}/>} />
        <Route path="/The_Conjuring_4" element={<The_Conjuring_4 name = {stvar}/>} />
        <Route path="/The_Autopsy_of_Jane_Doe" element={<The_Autopsy_of_Jane_Doe name = {stvar}/>} />
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