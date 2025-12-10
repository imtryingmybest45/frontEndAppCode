import Oculus from './Oculus';
import Insidious3 from './Insidious3';
import Insidious2 from './Insidious2';
import BringHerBack from './BringHerBack';
import Insidious from './Insidious';
import TheDescent from './TheDescent';
import Sinister from './Sinister';
import TheAutopsyofJaneDoe from './TheAutopsyofJaneDoe';
import TheConjuring4 from './TheConjuring4';
import TheConjuring from './TheConjuring';
import TheConjuring3 from './TheConjuring3';
import TheConjuring2 from './TheConjuring2';
import Weapons from './Weapons';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Home(props){
  let tfVar = props.name;
  let setTFVar = props.age;
  const handleClick = () => {
    setTFVar(false);
  }
  const stvar = "hello";
  const linksData = [
  { id: 1, text: 'Weapons', to: '/Weapons' },
  { id: 2, text: 'The Conjuring 2', to: '/TheConjuring2' },
  { id: 3, text: 'The Conjuring 3', to: '/TheConjuring3' },
  { id: 4, text: 'The Conjuring', to: '/TheConjuring' },
  { id: 5, text: 'The Conjuring 4', to: '/TheConjuring4' },
  { id: 6, text: 'The Autopsy of Jane Doe', to: '/TheAutopsyofJaneDoe' },
  { id: 7, text: 'Sinister', to: '/Sinister' },
  { id: 8, text: 'The Descent', to: '/TheDescent' },
  { id: 9, text: 'Insidious', to: '/Insidious' },
  { id: 10, text: 'Bring Her Back', to: '/BringHerBack' },
  { id: 11, text: 'Insidious 2', to: '/Insidious2' },
  { id: 12, text: 'Insidious 3', to: '/Insidious3' },
  { id: 13, text: 'Oculus', to: '/Oculus' },
  ];
  return (
    <div>
      {tfVar&&<h1>Welcome to my website.</h1>}
      {tfVar&&<p>This is where I review horror movies.</p>}
      {tfVar&&<p>Click on a movie name to see the review.</p>}
      <Routes>
        <Route path="/Weapons" element={<Weapons name = {stvar}/>} />
        <Route path="/TheConjuring2" element={<TheConjuring2 name = {stvar}/>} />
        <Route path="/TheConjuring3" element={<TheConjuring3 name = {stvar}/>} />
        <Route path="/TheConjuring" element={<TheConjuring name = {stvar}/>} />
        <Route path="/TheConjuring4" element={<TheConjuring4 name = {stvar}/>} />
        <Route path="/TheAutopsyofJaneDoe" element={<TheAutopsyofJaneDoe name = {stvar}/>} />
        <Route path="/Sinister" element={<Sinister name = {stvar}/>} />
        <Route path="/TheDescent" element={<TheDescent name = {stvar}/>} />
        <Route path="/Insidious" element={<Insidious name = {stvar}/>} />
        <Route path="/BringHerBack" element={<BringHerBack name = {stvar}/>} />
        <Route path="/Insidious2" element={<Insidious2 name = {stvar}/>} />
        <Route path="/Insidious3" element={<Insidious3 name = {stvar}/>} />
        <Route path="/Oculus" element={<Oculus name = {stvar}/>} />
      </Routes>
      <nav>
        <ul style={{listStyleType: 'none'}}>
              {linksData.map((link) => (
              <li key={link.id}>
                  {tfVar&&<Link to={link.to} onClick = {()=>handleClick()}>{link.text}</Link>}
              </li>
              ))}
        </ul>
      </nav>
    </div>
  );
}

export default Home;