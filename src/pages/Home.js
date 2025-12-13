import Insidious from './Insidious';
import TheTakingOfDeborahLogan from './TheTakingOfDeborahLogan';
import GraveEncounters from './GraveEncounters';
import GraveEncounters2 from './GraveEncounters2';
import HumanCentipede from './HumanCentipede';
import Oculus from './Oculus';
import TheDescent from './TheDescent';
import TalkToMe from './TalkToMe';
import TheAutopsyOfJaneDoe from './TheAutopsyOfJaneDoe';
import BringHerBack from './BringHerBack';
import Weapons from './Weapons';
import TheConjuring4 from './TheConjuring4';
import TheConjuring3 from './TheConjuring3';
import TheConjuring2 from './TheConjuring2';
import TheConjuring from './TheConjuring';
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
  { id: 1, text: 'The Conjuring', to: '/TheConjuring' },
  { id: 2, text: 'The Conjuring 2', to: '/TheConjuring2' },
  { id: 3, text: 'The Conjuring 3', to: '/TheConjuring3' },
  { id: 4, text: 'The Conjuring 4', to: '/TheConjuring4' },
  { id: 5, text: 'Weapons', to: '/Weapons' },
  { id: 6, text: 'Bring Her Back', to: '/BringHerBack' },
  { id: 7, text: 'The Autopsy Of Jane Doe', to: '/TheAutopsyOfJaneDoe' },
  { id: 8, text: 'Talk To Me', to: '/TalkToMe' },
  { id: 9, text: 'The Descent', to: '/TheDescent' },
  { id: 10, text: 'Oculus', to: '/Oculus' },
  { id: 11, text: 'Human Centipede', to: '/HumanCentipede' },
  { id: 12, text: 'Grave Encounters 2', to: '/GraveEncounters2' },
  { id: 13, text: 'Grave Encounters', to: '/GraveEncounters' },
  { id: 14, text: 'The Taking of Deborah Logan', to: '/TheTakingOfDeborahLogan' },
  { id: 15, text: 'Insidious', to: '/Insidious' },
  ];
  return (
    <div>
      {tfVar&&<h1>Welcome to my website.</h1>}
      {tfVar&&<p>This is where I review horror movies.</p>}
      {tfVar&&<p>Click on a movie name to see the review.</p>}
      <Routes>
        <Route path="/TheConjuring" element={<TheConjuring name = {stvar}/>} />
        <Route path="/TheConjuring2" element={<TheConjuring2 name = {stvar}/>} />
        <Route path="/TheConjuring3" element={<TheConjuring3 name = {stvar}/>} />
        <Route path="/TheConjuring4" element={<TheConjuring4 name = {stvar}/>} />
        <Route path="/Weapons" element={<Weapons name = {stvar}/>} />
        <Route path="/BringHerBack" element={<BringHerBack name = {stvar}/>} />
        <Route path="/TheAutopsyOfJaneDoe" element={<TheAutopsyOfJaneDoe name = {stvar}/>} />
        <Route path="/TalkToMe" element={<TalkToMe name = {stvar}/>} />
        <Route path="/TheDescent" element={<TheDescent name = {stvar}/>} />
        <Route path="/Oculus" element={<Oculus name = {stvar}/>} />
        <Route path="/HumanCentipede" element={<HumanCentipede name = {stvar}/>} />
        <Route path="/GraveEncounters2" element={<GraveEncounters2 name = {stvar}/>} />
        <Route path="/GraveEncounters" element={<GraveEncounters name = {stvar}/>} />
        <Route path="/TheTakingOfDeborahLogan" element={<TheTakingOfDeborahLogan name = {stvar}/>} />
        <Route path="/Insidious" element={<Insidious name = {stvar}/>} />
      </Routes>
      <nav>
        <ul style={{listStyleType: 'none',  padding: "0", margin: "0"}}>
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