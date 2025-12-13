import Abc from './Abc';
import GraveEncounters from './GraveEncounters';
import BringHerBack from './BringHerBack';
import TalktoMe from './TalktoMe';
import TheConjuring2 from './TheConjuring2';
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
  { id: 1, text: 'The Conjuring 2', to: '/TheConjuring2' },
  { id: 2, text: 'Talk to Me', to: '/TalktoMe' },
  { id: 3, text: 'Bring Her Back', to: '/BringHerBack' },
  { id: 4, text: 'Grave Encounters', to: '/GraveEncounters' },
  { id: 5, text: 'Abc', to: '/Abc' },
  ];
  return (
    <div>
      {tfVar&&<h1>Welcome to my website.</h1>}
      {tfVar&&<p>This is where I review horror movies.</p>}
      {tfVar&&<p>Click on a movie name to see the review.</p>}
      <Routes>
        <Route path="/TheConjuring2" element={<TheConjuring2 name = {stvar}/>} />
        <Route path="/TalktoMe" element={<TalktoMe name = {stvar}/>} />
        <Route path="/BringHerBack" element={<BringHerBack name = {stvar}/>} />
        <Route path="/GraveEncounters" element={<GraveEncounters name = {stvar}/>} />
        <Route path="/Abc" element={<Abc name = {stvar}/>} />
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