import Ghostland from './Ghostland';
import MonstersUniversity from './MonstersUniversity';
import GraveEncounters2 from './GraveEncounters2';
import TheConjuringLastRites from './TheConjuringLastRites';
import TheRuleofJennyPen from './TheRuleofJennyPen';
import TheJackintheBox from './TheJackintheBox';
import IntheTallGrass from './IntheTallGrass';
import SawIV from './SawIV';
import TheSubstance from './TheSubstance';
import Nope from './Nope';
import Scream from './Scream';
import Presence from './Presence';
import TheRingTwo from './TheRingTwo';
import Terrifier2 from './Terrifier2';
import Terrifier from './Terrifier';
import TalktoMe from './TalktoMe';
import Sinister2 from './Sinister2';
import BringHerBack from './BringHerBack';
import Hereditary from './Hereditary';
import SawIII from './SawIII';
import SawII from './SawII';
import Saw from './Saw';
import Midsommar from './Midsommar';
import ACureforWellness from './ACureforWellness';
import Oculus from './Oculus';
import Us from './Us';
import Split from './Split';
import TheConjuring from './TheConjuring';
import TheRing from './TheRing';
import Coraline from './Coraline';
import Sinister from './Sinister';
import TheAutopsyofJaneDoe from './TheAutopsyofJaneDoe';
import TheHumanCentipedeFirstSequence from './TheHumanCentipedeFirstSequence';
import TheNun from './TheNun';
import TheExorcismofGod from './TheExorcismofGod';
import BlackPhone2 from './BlackPhone2';
import GoodBoy from './GoodBoy';
import AnnabelleComesHome from './AnnabelleComesHome';
import AnnabelleCreation from './AnnabelleCreation';
import Annabelle from './Annabelle';
import Terrifier3 from './Terrifier3';
import InsidiousChapter2 from './InsidiousChapter2';
import TheDescent from './TheDescent';
import Insidious from './Insidious';
import TheConjuring2 from './TheConjuring2';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {useMemo} from 'react';
import boolizardprev12 from './boolizardprev12.png';

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
      { id: 1, text: "The Conjuring 2", to: "/TheConjuring2", name: "The Conjuring 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_SX300.jpg', tier: 'S'},
      { id: 2, text: "Insidious", to: "/Insidious", name: "Insidious", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_SX300.jpg', tier: 'A'},
      { id: 3, text: "The Descent", to: "/TheDescent", name: "The Descent", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1_SX300.jpg', tier: 'A'},
      { id: 5, text: "Insidious Chapter 2", to: "/InsidiousChapter2", name: "Insidious Chapter 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTg0OTA5ODIxNF5BMl5BanBnXkFtZTcwNTUzNDg4OQ@@._V1_SX300.jpg', tier: 'A'},
      { id: 6, text: "Terrifier 3", to: "/Terrifier3", name: "Terrifier 3", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNzc2MWUyYzctY2E4Ny00ZTlmLThjNTMtMTViZGI5NjcyN2EzXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 7, text: "Annabelle", to: "/Annabelle", name: "Annabelle", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjkyMDU5ZWQtZDhkOC00ZWFjLWIyM2MtZWFhMDUzNjdlNzU2XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 8, text: "Annabelle: Creation", to: "/AnnabelleCreation", name: "Annabelle: Creation", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA1MzIwMjMxNF5BMl5BanBnXkFtZTgwMDQ3NTc2MjI@._V1_SX300.jpg', tier: 'S'},
      { id: 9, text: "Annabelle Comes Home", to: "/AnnabelleComesHome", name: "Annabelle Comes Home", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjRjYmQ5NTQtYzIyNi00MmNlLTlmNjYtNjQ3NzRlZmY3YjFlXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C'},
      { id: 10, text: "Good Boy", to: "/GoodBoy", name: "Good Boy", moviePoster: 'https://m.media-amazon.com/images/M/MV5BODJhM2JhYjktN2JlMC00YzVjLWI3NjctMTgzYjhhZDk3ZjU2XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B'},
      { id: 11, text: "Black Phone 2", to: "/BlackPhone2", name: "Black Phone 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTVjMzNmZGYtOWU5NS00NDYzLThhZTktZGNlODIwYWVhMDRmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B'},
      { id: 12, text: "The Exorcism of God", to: "/TheExorcismofGod", name: "The Exorcism of God", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYjJmNGMwMWYtZDEwNC00N2IyLTg5MDAtZGQ0MTFmNDJjNzk2XkEyXkFqcGc@._V1_SX300.jpg', tier: 'F'},
      { id: 13, text: "The Nun", to: "/TheNun", name: "The Nun", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_SX300.jpg', tier: 'D'},
      { id: 14, text: "The Human Centipede (First Sequence)", to: "/TheHumanCentipedeFirstSequence", name: "The Human Centipede (First Sequence)", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTY4Nzk3NzYxOF5BMl5BanBnXkFtZTcwODQwNjQzMw@@._V1_SX300.jpg', tier: 'NO'},
      { id: 15, text: "The Autopsy of Jane Doe", to: "/TheAutopsyofJaneDoe", name: "The Autopsy of Jane Doe", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA2MTEzMzkzM15BMl5BanBnXkFtZTgwMjM2MTM5MDI@._V1_SX300.jpg', tier: 'S'},
      { id: 16, text: "Sinister", to: "/Sinister", name: "Sinister", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_SX300.jpg', tier: 'S'},
      { id: 17, text: "Coraline", to: "/Coraline", name: "Coraline", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzQxNjM5NzkxNV5BMl5BanBnXkFtZTcwMzg5NDMwMg@@._V1_SX300.jpg', tier: 'S'},
      { id: 18, text: "The Ring", to: "/TheRing", name: "The Ring", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_SX300.jpg', tier: 'S'},
      { id: 19, text: "The Conjuring", to: "/TheConjuring", name: "The Conjuring", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg', tier: 'A'},
      { id: 20, text: "Split", to: "/Split", name: "Split", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNTZjNmVjMzAtZjg2Mi00MWNmLTk5NTItOTExZDYwNTE2YmExXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 21, text: "Us", to: "/Us", name: "Us", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzhkMjFkN2YtODU2Ni00YWYwLWExN2MtOWNjZmQxM2U4YTM5XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 22, text: "Oculus", to: "/Oculus", name: "Oculus", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzE1NzM4MjEyNV5BMl5BanBnXkFtZTgwMjYzMjMzMTE@._V1_SX300.jpg', tier: 'A'},
      { id: 23, text: "A Cure for Wellness", to: "/ACureforWellness", name: "A Cure for Wellness", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTg5Njg1MzIwNl5BMl5BanBnXkFtZTgwNDU1NjczMDI@._V1_SX300.jpg', tier: 'A'},
      { id: 24, text: "Midsommar", to: "/Midsommar", name: "Midsommar", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_SX300.jpg', tier: 'A'},
      { id: 25, text: "Saw", to: "/Saw", name: "Saw", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZTE5MzFlMTktMzBkOC00ZjMxLThmOTAtOGU3ZGEwZGRlNDdjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B'},
      { id: 26, text: "Saw II", to: "/SawII", name: "Saw II", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZGVlNjk3MmItZmUzNy00MzcyLWIzOTktZjllYWU5MDAyMjM1XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 27, text: "Saw III", to: "/SawIII", name: "Saw III", moviePoster: 'https://m.media-amazon.com/images/M/MV5BODQ4YTAwZTItZGFjZi00YjNiLTllYzUtYWY3OWM2OTQzODVkXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 28, text: "Hereditary", to: "/Hereditary", name: "Hereditary", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 29, text: "Bring Her Back", to: "/BringHerBack", name: "Bring Her Back", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZTlhYTk1ZTEtOWY3NC00NWQ5LTlkOTctNjQ3ZDYyZGE5ZWNlXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B'},
      { id: 30, text: "Sinister 2", to: "/Sinister2", name: "Sinister 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjM3MTQ5NjA0OV5BMl5BanBnXkFtZTgwMzg2OTYyNTE@._V1_SX300.jpg', tier: 'A'},
      { id: 31, text: "Talk to Me", to: "/TalktoMe", name: "Talk to Me", moviePoster: 'https://m.media-amazon.com/images/M/MV5BY2I2NzJmY2YtYTM3Ni00ZGJhLThkZTItODFhMzhlZjZkMDQ5XkEyXkFqcGc@._V1_SX300.jpg', tier: 'C'},
      { id: 32, text: "Terrifier", to: "/Terrifier", name: "Terrifier", moviePoster: 'https://m.media-amazon.com/images/M/MV5BN2M5MzJlYzctNmZhOC00MTFmLWIxZmUtN2I4NzY5MTlmNDdmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 34, text: "Terrifier 2", to: "/Terrifier2", name: "Terrifier 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYTUyZWM1MDgtMGZiZi00OWZlLTgwNzItZGU3NTkwN2I4OWNiXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 35, text: "The Ring Two", to: "/TheRingTwo", name: "The Ring Two", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTY2ODc2NTQ2OF5BMl5BanBnXkFtZTYwNzA4OTU3._V1_SX300.jpg', tier: 'A'},
      { id: 36, text: "Presence", to: "/Presence", name: "Presence", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZWRmNzM1YjktM2YyMi00M2YwLWE2YjMtNjgwNTQ3MGU3MzczXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B'},
      { id: 37, text: "Scream", to: "/Scream", name: "Scream", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg', tier: 'A'},
      { id: 38, text: "Nope", to: "/Nope", name: "Nope", moviePoster: 'https://m.media-amazon.com/images/M/MV5BODRlNWRhZWUtMzdlZC00ZDIyLWFhZjMtYTcxNjI1ZDIwODhjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C'},
      { id: 39, text: "The Substance", to: "/TheSubstance", name: "The Substance", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
      { id: 41, text: "Saw IV", to: "/SawIV", name: "Saw IV", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjc0NjUyNzg3MF5BMl5BanBnXkFtZTYwODMxOTM3._V1_SX300.jpg', tier: 'C'},
      { id: 42, text: "In the Tall Grass", to: "/IntheTallGrass", name: "In the Tall Grass", moviePoster: 'https://m.media-amazon.com/images/M/MV5BN2YyZTk3ZjUtMTgxYS00NGVlLThmNDQtMjRjNmMwOTc0MzdhXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C'},
      { id: 43, text: "The Jack in the Box", to: "/TheJackintheBox", name: "The Jack in the Box", moviePoster: 'https://m.media-amazon.com/images/M/MV5BN2Y1YzI2MzMtNmFmMS00YTU4LWFkYTUtNGUzZDU5YTE1NGQxXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C'},
      { id: 44, text: "The Rule of Jenny Pen", to: "/TheRuleofJennyPen", name: "The Rule of Jenny Pen", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTJiMzg2ODgtNDhhMi00YmE3LWI3ZmEtOGUwYjFlOTFjYTZmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C'},
      { id: 45, text: "The Conjuring: Last Rites", to: "/TheConjuringLastRites", name: "The Conjuring: Last Rites", moviePoster: 'https://m.media-amazon.com/images/M/MV5BM2VmMzRkYzgtMzg2ZC00OTFkLTkwMTYtNTMxNjM2YzI1MjgyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C'},
      { id: 46, text: "Grave Encounters 2", to: "/GraveEncounters2", name: "Grave Encounters 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTM2NTIzMDQ0NV5BMl5BanBnXkFtZTcwOTQ3NTM0OA@@._V1_SX300.jpg', tier: 'S'},
      { id: 48, text: "Monsters University", to: "/MonstersUniversity", name: "Monsters University", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTUyODgwMDU3M15BMl5BanBnXkFtZTcwOTM4MjcxOQ@@._V1_SX300.jpg', tier: 'A'},
      { id: 49, text: "Ghostland", to: "/Ghostland", name: "Ghostland", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYmQzNzMxYTQtMTllOS00MTRiLWE3NWMtOGZmNDcwYjg1YzE3XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A'},
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
      {tfVar&&<img src={boolizardprev12} alt="This is a lizard that says BOO" />}
      {tfVar&&<p>This is where I review horror movies.</p>}
      {tfVar&&<p>Click on a movie name to see the review.</p>}
      <Routes>
        <Route path="/TheConjuring2" element={<TheConjuring2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Insidious" element={<Insidious name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheDescent" element={<TheDescent name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InsidiousChapter2" element={<InsidiousChapter2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Terrifier3" element={<Terrifier3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Annabelle" element={<Annabelle name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AnnabelleCreation" element={<AnnabelleCreation name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AnnabelleComesHome" element={<AnnabelleComesHome name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/GoodBoy" element={<GoodBoy name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/BlackPhone2" element={<BlackPhone2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheExorcismofGod" element={<TheExorcismofGod name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheNun" element={<TheNun name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheHumanCentipedeFirstSequence" element={<TheHumanCentipedeFirstSequence name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheAutopsyofJaneDoe" element={<TheAutopsyofJaneDoe name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Sinister" element={<Sinister name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Coraline" element={<Coraline name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheRing" element={<TheRing name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheConjuring" element={<TheConjuring name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Split" element={<Split name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Us" element={<Us name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Oculus" element={<Oculus name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ACureforWellness" element={<ACureforWellness name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Midsommar" element={<Midsommar name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Saw" element={<Saw name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/SawII" element={<SawII name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/SawIII" element={<SawIII name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Hereditary" element={<Hereditary name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/BringHerBack" element={<BringHerBack name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Sinister2" element={<Sinister2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TalktoMe" element={<TalktoMe name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Terrifier" element={<Terrifier name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Terrifier2" element={<Terrifier2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheRingTwo" element={<TheRingTwo name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Presence" element={<Presence name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Scream" element={<Scream name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Nope" element={<Nope name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheSubstance" element={<TheSubstance name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/SawIV" element={<SawIV name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/IntheTallGrass" element={<IntheTallGrass name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheJackintheBox" element={<TheJackintheBox name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheRuleofJennyPen" element={<TheRuleofJennyPen name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheConjuringLastRites" element={<TheConjuringLastRites name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/GraveEncounters2" element={<GraveEncounters2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/MonstersUniversity" element={<MonstersUniversity name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Ghostland" element={<Ghostland name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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