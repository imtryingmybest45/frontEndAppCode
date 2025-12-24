import BringHerBack from './BringHerBack';
import Annabelle from './Annabelle';
import TheHumanCentipede from './TheHumanCentipede';
import Polaroid from './Polaroid';
import ISawtheTVGlow from './ISawtheTVGlow';
import TheAutopsyofJaneDoe from './TheAutopsyofJaneDoe';
import InsidiousChapter2 from './InsidiousChapter2';
import TheDescent from './TheDescent';
import Insidious from './Insidious';
import TheConjuring2 from './TheConjuring2';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {useMemo} from 'react';
import boo from './boo.png';

function Home(props){

  let tfVar = props.name;
  let setTFVar = props.age;
  let origMovName = props.origMovName;
  let setPrevPath = props.setPrevPath;
  const setLinks = props.linksStuff;

  const handleClick = () => {
    setPrevPath(window.location.pathname);
    setTFVar(false);
  }

  const linksData = useMemo(() => {
    
    const linksDataUnsorted = [
      { id: 1, text: 'The Conjuring 2', to: '/TheConjuring2', name: "The Conjuring 2" },
      { id: 2, text: 'Insidious', to: '/Insidious', name: "Insidious" },
      { id: 3, text: 'The Descent', to: '/TheDescent', name: "The Descent" },
      { id: 5, text: 'Insidious Chapter 2', to: '/InsidiousChapter2', name: "Insidious Chapter 2" },
      { id: 7, text: 'The Autopsy of Jane Doe', to: '/TheAutopsyofJaneDoe', name: "The Autopsy of Jane Doe" },
      { id: 8, text: 'I Saw the TV Glow', to: '/ISawtheTVGlow', name: "I Saw the TV Glow" },
      { id: 9, text: 'Polaroid', to: '/Polaroid', name: "Poloaroid" },
      { id: 10, text: 'The Human Centipede', to: '/TheHumanCentipede', name: "The Human Centipede" },
      { id: 11, text: 'Annabelle', to: '/Annabelle', name: "Annabelle" },
      { id: 12, text: 'Bring Her Back', to: '/BringHerBack', name: "Bring Her Back" },
    ];
  const linksDataSorted = [...linksDataUnsorted].sort((a, b) => {
      return a.name.localeCompare(b.name);
  });
  return linksDataSorted;
  }, []); // <-- Empty array ensures it's created only once
  //const stvar = "hello";

  useEffect(() => {
    setLinks(linksData);
  },[linksData, setLinks]);

  return (
    <div>
      {tfVar&&<h1>Welcome to my website.</h1>}
      {tfVar&&<img src={boo} alt="This is a ghost that says BOO" />}
      {tfVar&&<p>This is where I review horror movies.</p>}
      {tfVar&&<p>Click on a movie name to see the review.</p>}
      <Routes>
        <Route path="/TheConjuring2" element={<TheConjuring2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Insidious" element={<Insidious name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheDescent" element={<TheDescent name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InsidiousChapter2" element={<InsidiousChapter2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheAutopsyofJaneDoe" element={<TheAutopsyofJaneDoe name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ISawtheTVGlow" element={<ISawtheTVGlow name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Polaroid" element={<Polaroid name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheHumanCentipede" element={<TheHumanCentipede name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Annabelle" element={<Annabelle name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/BringHerBack" element={<BringHerBack name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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