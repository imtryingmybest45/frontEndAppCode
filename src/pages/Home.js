import ParanormalActivity from './ParanormalActivity';
import AQuietPlaceDayOne from './AQuietPlaceDayOne';
import TheEmptyMan from './TheEmptyMan';
import TheHauntinginConnecticut from './TheHauntinginConnecticut';
import Immaculate from './Immaculate';
import Underground from './Underground';
import Life from './Life';
import TheStrangers from './TheStrangers';
import InsidiousTheRedDoor from './InsidiousTheRedDoor';
import Apollo18 from './Apollo18';
import LateNightwiththeDevil from './LateNightwiththeDevil';
import X from './X';
import Host from './Host';
import HappyDeathDay from './HappyDeathDay';
import ItChapterTwo from './ItChapterTwo';
import Poltergeist2015 from './Poltergeist2015';
import Nope from './Nope';
import Viral from './Viral';
import EvilDeadRise from './EvilDeadRise';
import Krampus from './Krampus';
import TheBay from './TheBay';
import TheJackintheBox from './TheJackintheBox';
import ScaryStoriestoTellintheDark from './ScaryStoriestoTellintheDark';
import RosemarysBaby from './RosemarysBaby';
import ChildsPlay1988 from './ChildsPlay1988';
import ChildsPlay2019 from './ChildsPlay2019';
import TheBlackPhone from './TheBlackPhone';
import Weapons from './Weapons';
import BringHerBack from './BringHerBack';
import Presence from './Presence';
import TheMenu from './TheMenu';
import Psycho from './Psycho';
import TheTexasChainSawMassacre from './TheTexasChainSawMassacre';
import Identity from './Identity';
import Fridaythe13th from './Fridaythe13th';
import TheWickerMan2006 from './TheWickerMan2006';
import Exhuma from './Exhuma';
import LastShift from './LastShift';
import Pearl from './Pearl';
import GonjiamHauntedAsylum from './GonjiamHauntedAsylum';
import Companion from './Companion';
import Heretic from './Heretic';
import TheSixthSense from './TheSixthSense';
import Smile2 from './Smile2';
import KnockattheCabin from './KnockattheCabin';
import Longlegs from './Longlegs';
import InTheTallGrass from './InTheTallGrass';
import Terrifier from './Terrifier';
import Thesis from './Thesis';
import UnfriendedDarkWeb from './UnfriendedDarkWeb';
import Unsane from './Unsane';
import DragMeToHell from './DragMeToHell';
import Oddity from './Oddity';
import TheFirstOmen from './TheFirstOmen';
import TheOmen from './TheOmen';
import Mama from './Mama';
import Saw from './Saw';
import HellHouseLLC from './HellHouseLLC';
import GoodnightMommy from './GoodnightMommy';
import Tarot from './Tarot';
import AsAboveSoBelow from './AsAboveSoBelow';
import TheVisit from './TheVisit';
import TheBoy from './TheBoy';
import Thanksgiving from './Thanksgiving';
import Caveat from './Caveat';
import Hidden from './Hidden';
import Smile from './Smile';
import TheJackintheBoxAwakening from './TheJackintheBoxAwakening';
import It from './It';
import TheTakingofDeborahLogan from './TheTakingofDeborahLogan';
import LightsOut from './LightsOut';
import Haunt from './Haunt';
import TheVillage from './TheVillage';
import GetOut from './GetOut';
import Old from './Old';
import Within from './Within';
import Scream from './Scream';
import TheThing from './TheThing';
import ANightmareonElmStreet from './ANightmareonElmStreet';
import Martyrs from './Martyrs';
import GraveEncounters from './GraveEncounters';
import AllHallowsEve from './AllHallowsEve';
import TheSubstance from './TheSubstance';
import ThePurge from './ThePurge';
import SawIII from './SawIII';
import SawII from './SawII';
import HellHouseLLCOriginsTheCarmichaelManor from './HellHouseLLCOriginsTheCarmichaelManor';
import WrongTurn from './WrongTurn';
import ACureforWellness from './ACureforWellness';
import Hereditary from './Hereditary';
import Midsommar from './Midsommar';
import InsidiousChapter3 from './InsidiousChapter3';
import Oculus from './Oculus';
import HouseofWax from './HouseofWax';
import Ghostland from './Ghostland';
import Us from './Us';
import Split from './Split';
import TheRingTwo from './TheRingTwo';
import TheConjuring from './TheConjuring';
import Sinister2 from './Sinister2';
import TheRing from './TheRing';
import Coraline from './Coraline';
import TheAutopsyofJaneDoe from './TheAutopsyofJaneDoe';
import Sinister from './Sinister';
import TheRuleofJennyPen from './TheRuleofJennyPen';
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
      { id: 1, text: "The Conjuring 2", to: "/TheConjuring2", name: "The Conjuring 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_SX300.jpg', tier: 'S', longReview: 'Y',},
      { id: 2, text: "Insidious", to: "/Insidious", name: "Insidious", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_SX300.jpg', tier: 'A', longReview: 'Y',},
      { id: 3, text: "The Descent", to: "/TheDescent", name: "The Descent", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1_SX300.jpg', tier: 'A', longReview: 'Y',},
      { id: 5, text: "Insidious: Chapter 2", to: "/InsidiousChapter2", name: "Insidious: Chapter 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTg0OTA5ODIxNF5BMl5BanBnXkFtZTcwNTUzNDg4OQ@@._V1_SX300.jpg', tier: 'A', longReview: 'Y',},
      { id: 6, text: "Terrifier 3", to: "/Terrifier3", name: "Terrifier 3", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNzc2MWUyYzctY2E4Ny00ZTlmLThjNTMtMTViZGI5NjcyN2EzXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'Y',},
      { id: 7, text: "Annabelle", to: "/Annabelle", name: "Annabelle", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjkyMDU5ZWQtZDhkOC00ZWFjLWIyM2MtZWFhMDUzNjdlNzU2XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'Y',},
      { id: 8, text: "Annabelle: Creation", to: "/AnnabelleCreation", name: "Annabelle: Creation", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA1MzIwMjMxNF5BMl5BanBnXkFtZTgwMDQ3NTc2MjI@._V1_SX300.jpg', tier: 'S', longReview: 'Y',},
      { id: 9, text: "Annabelle Comes Home", to: "/AnnabelleComesHome", name: "Annabelle Comes Home", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjRjYmQ5NTQtYzIyNi00MmNlLTlmNjYtNjQ3NzRlZmY3YjFlXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'Y',},
      { id: 10, text: "Good Boy", to: "/GoodBoy", name: "Good Boy", moviePoster: 'https://m.media-amazon.com/images/M/MV5BODJhM2JhYjktN2JlMC00YzVjLWI3NjctMTgzYjhhZDk3ZjU2XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'Y',},
      { id: 11, text: "Black Phone 2", to: "/BlackPhone2", name: "Black Phone 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTVjMzNmZGYtOWU5NS00NDYzLThhZTktZGNlODIwYWVhMDRmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'Y',},
      { id: 13, text: "The Rule of Jenny Pen", to: "/TheRuleofJennyPen", name: "The Rule of Jenny Pen", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTJiMzg2ODgtNDhhMi00YmE3LWI3ZmEtOGUwYjFlOTFjYTZmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 14, text: "Sinister", to: "/Sinister", name: "Sinister", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_SX300.jpg', tier: 'S', longReview: 'N',},
      { id: 15, text: "The Autopsy of Jane Doe", to: "/TheAutopsyofJaneDoe", name: "The Autopsy of Jane Doe", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA2MTEzMzkzM15BMl5BanBnXkFtZTgwMjM2MTM5MDI@._V1_SX300.jpg', tier: 'S', longReview: 'N',},
      { id: 16, text: "Coraline", to: "/Coraline", name: "Coraline", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzQxNjM5NzkxNV5BMl5BanBnXkFtZTcwMzg5NDMwMg@@._V1_SX300.jpg', tier: 'S', longReview: 'N',},
      { id: 17, text: "The Ring", to: "/TheRing", name: "The Ring", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_SX300.jpg', tier: 'S', longReview: 'N',},
      { id: 18, text: "Sinister 2", to: "/Sinister2", name: "Sinister 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjM3MTQ5NjA0OV5BMl5BanBnXkFtZTgwMzg2OTYyNTE@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 19, text: "The Conjuring", to: "/TheConjuring", name: "The Conjuring", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 20, text: "The Ring Two", to: "/TheRingTwo", name: "The Ring Two", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTY2ODc2NTQ2OF5BMl5BanBnXkFtZTYwNzA4OTU3._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 21, text: "Split", to: "/Split", name: "Split", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNTZjNmVjMzAtZjg2Mi00MWNmLTk5NTItOTExZDYwNTE2YmExXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 22, text: "Us", to: "/Us", name: "Us", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzhkMjFkN2YtODU2Ni00YWYwLWExN2MtOWNjZmQxM2U4YTM5XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 23, text: "Ghostland", to: "/Ghostland", name: "Ghostland", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYmQzNzMxYTQtMTllOS00MTRiLWE3NWMtOGZmNDcwYjg1YzE3XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 24, text: "House of Wax", to: "/HouseofWax", name: "House of Wax", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDA4Nzg1NjQ2NV5BMl5BanBnXkFtZTcwMDYwNTgyMQ@@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 25, text: "Oculus", to: "/Oculus", name: "Oculus", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzE1NzM4MjEyNV5BMl5BanBnXkFtZTgwMjYzMjMzMTE@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 26, text: "Insidious: Chapter 3", to: "/InsidiousChapter3", name: "Insidious: Chapter 3", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTUwNDU4NjE1N15BMl5BanBnXkFtZTgwOTc0MzA5NDE@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 27, text: "Midsommar", to: "/Midsommar", name: "Midsommar", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 28, text: "Hereditary", to: "/Hereditary", name: "Hereditary", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 29, text: "A Cure for Wellness", to: "/ACureforWellness", name: "A Cure for Wellness", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTg5Njg1MzIwNl5BMl5BanBnXkFtZTgwNDU1NjczMDI@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 30, text: "Wrong Turn", to: "/WrongTurn", name: "Wrong Turn", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYWM4MzNjMDctMGE2ZC00MTYwLWFhODEtNjU1OWE5ODA3YjhjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 31, text: "Hell House LLC Origins: The Carmichael Manor", to: "/HellHouseLLCOriginsTheCarmichaelManor", name: "Hell House LLC Origins: The Carmichael Manor", moviePoster: 'https://m.media-amazon.com/images/M/MV5BOWNkZmZhYTItMWE3Mi00ODA3LWI3NTItZGM3NDZjMTQ1YjRmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 32, text: "Saw II", to: "/SawII", name: "Saw II", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZGVlNjk3MmItZmUzNy00MzcyLWIzOTktZjllYWU5MDAyMjM1XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 33, text: "Saw III", to: "/SawIII", name: "Saw III", moviePoster: 'https://m.media-amazon.com/images/M/MV5BODQ4YTAwZTItZGFjZi00YjNiLTllYzUtYWY3OWM2OTQzODVkXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 34, text: "The Purge", to: "/ThePurge", name: "The Purge", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTQzNTcwODEyM15BMl5BanBnXkFtZTcwMjM1MDI0OQ@@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 35, text: "The Substance", to: "/TheSubstance", name: "The Substance", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 36, text: "All Hallows' Eve", to: "/AllHallowsEve", name: "All Hallows' Eve", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDc5ZTk4ZjUtNWRkNS00ZDg2LThkY2YtNjIyNGMwZWI4MmRiXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 37, text: "Grave Encounters", to: "/GraveEncounters", name: "Grave Encounters", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjQ0NjQxOTM5N15BMl5BanBnXkFtZTcwNzUwMzMwNg@@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 38, text: "Martyrs", to: "/Martyrs", name: "Martyrs", moviePoster: 'https://m.media-amazon.com/images/M/MV5BN2Q5MWQ0OWYtMTUzMC00ZmU3LWEyNDAtZjg1NjE2ZjVkM2I3XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 39, text: "A Nightmare on Elm Street", to: "/ANightmareonElmStreet", name: "A Nightmare on Elm Street", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNTZmN2VlMWMtMTdlMi00NDBhLWIyODMtODEwMzM0ODMwMWYwXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 40, text: "The Thing", to: "/TheThing", name: "The Thing", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYTA3NDU5MWEtNTk4Yy00ZDNkLThmZTQtMjU3ZGVhYzAyMzU4XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 41, text: "Scream", to: "/Scream", name: "Scream", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 43, text: "Within", to: "/Within", name: "Within", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjUzODY5OWEtYjlhYy00MWMyLTg5MzQtOTQ0ZTViMzlmYTgwXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 44, text: "Old", to: "/Old", name: "Old", moviePoster: 'https://m.media-amazon.com/images/M/MV5BM2JkZjI5MjktNmQwZC00ZmYxLTg0OTYtYmVhNGFkMGZlMGYyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 45, text: "Get Out", to: "/GetOut", name: "Get Out", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 46, text: "The Village", to: "/TheVillage", name: "The Village", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZWI1MjE4YmYtMjJhMS00YmJhLTg1NjMtYjM5ZWE0YjM2MGFiXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 47, text: "Haunt", to: "/Haunt", name: "Haunt", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZDM4ZTIyMTAtNDg3ZS00NDIzLThjZDYtMjRmYjE5OWI3ZTViXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 48, text: "Lights Out", to: "/LightsOut", name: "Lights Out", moviePoster: 'https://m.media-amazon.com/images/M/MV5BOGUyNmQxNjQtNjU1OS00YTExLWFjMGUtNWVhN2Y0MGE2ZmZmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 49, text: "The Taking of Deborah Logan", to: "/TheTakingofDeborahLogan", name: "The Taking of Deborah Logan", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjhhNTM1OGUtYTRkZC00Mzg4LWFiY2ItYTUwMDg3NDIxYjExXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 50, text: "It", to: "/It", name: "It", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 51, text: "The Jack in the Box: Awakening", to: "/TheJackintheBoxAwakening", name: "The Jack in the Box: Awakening", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNWVlYTc0OTYtYzM3MS00ZDMwLWI5NzctZjRjY2JiYTUwY2ZjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 52, text: "Smile", to: "/Smile", name: "Smile", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjFhMzBlNzktMjE2Ni00YTMyLWI2YWUtYmM1N2QxMDQwZmZhXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 53, text: "Hidden", to: "/Hidden", name: "Hidden", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDZkZjE3NGEtZmIzZC00MWUyLWJlN2ItNTc4ODcwMDY2ZmQ1XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 54, text: "Caveat", to: "/Caveat", name: "Caveat", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDRjNzA2YjktNTk1OC00NTM1LTg1ZDgtYjRhM2Y4MGI5ODhkXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 55, text: "Thanksgiving", to: "/Thanksgiving", name: "Thanksgiving", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYzhiZTkyM2UtNjU2MC00MjcxLWJhZGYtODQ0MDViN2UxMzAwXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 56, text: "The Boy", to: "/TheBoy", name: "The Boy", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTc1MjcxNzcwMV5BMl5BanBnXkFtZTgwMTE0NTE2NzE@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 57, text: "The Visit", to: "/TheVisit", name: "The Visit", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTg3OTM2OTc5MV5BMl5BanBnXkFtZTgwMjMxNDM0NTE@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 59, text: "As Above, So Below", to: "/AsAboveSoBelow", name: "As Above, So Below", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTQzNzg0NDI2MF5BMl5BanBnXkFtZTgwMzgxNzY2MTE@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 60, text: "Tarot", to: "/Tarot", name: "Tarot", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjY3NTkxMjQtZWNjNy00NGU2LTlhOTMtMmRhZGEwNzRmMDcyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 61, text: "Goodnight Mommy", to: "/GoodnightMommy", name: "Goodnight Mommy", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNWJkZGM4NDYtNThhYy00N2ZjLWFjMzQtZTYxM2YwNGVlZTZiXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 62, text: "Hell House LLC", to: "/HellHouseLLC", name: "Hell House LLC", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDU2YTZhZTEtNjQ2Mi00ZTlkLWFhNTctNDAyNGNjNTVlYzdkXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 63, text: "Saw", to: "/Saw", name: "Saw", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZTE5MzFlMTktMzBkOC00ZjMxLThmOTAtOGU3ZGEwZGRlNDdjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 64, text: "Mama", to: "/Mama", name: "Mama", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTM5MjIwNDAwMl5BMl5BanBnXkFtZTcwNzQyOTY0OA@@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 65, text: "The Omen", to: "/TheOmen", name: "The Omen", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDhhMTBlODEtMGIxOC00MzVjLTllMzctY2NkMWNmODY3MWZmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 66, text: "The First Omen", to: "/TheFirstOmen", name: "The First Omen", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNWU0ZjM1YjYtMGZkZi00NTBiLTgxMGItMzVhZDgyZTkyY2ZhXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 67, text: "Oddity", to: "/Oddity", name: "Oddity", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMWU5Yjc0N2MtZjhlYS00MTM3LWI5YWUtZDg5MzcxZjEyZWJmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 68, text: "Drag Me To Hell", to: "/DragMeToHell", name: "Drag Me To Hell", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTQwNTMyNjc5Ml5BMl5BanBnXkFtZTcwOTI2MTQ0Mg@@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 69, text: "Unsane", to: "/Unsane", name: "Unsane", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNTYzMDYzMzA1MV5BMl5BanBnXkFtZTgwODUzODg2NDM@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 70, text: "Unfriended: Dark Web", to: "/UnfriendedDarkWeb", name: "Unfriended: Dark Web", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNmYxNGZjY2ItOTg5YS00NzM0LWIxZjktMDFmOWM1MGZhOTNkXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 71, text: "Thesis", to: "/Thesis", name: "Thesis", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNGQwZWU4YTItMjZjYi00ZjNlLWI1ODctMjg2NzBhOGIwODAwXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 72, text: "Terrifier", to: "/Terrifier", name: "Terrifier", moviePoster: 'https://m.media-amazon.com/images/M/MV5BN2M5MzJlYzctNmZhOC00MTFmLWIxZmUtN2I4NzY5MTlmNDdmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 73, text: "In The Tall Grass", to: "/InTheTallGrass", name: "In The Tall Grass", moviePoster: 'https://m.media-amazon.com/images/M/MV5BN2YyZTk3ZjUtMTgxYS00NGVlLThmNDQtMjRjNmMwOTc0MzdhXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 74, text: "Longlegs", to: "/Longlegs", name: "Longlegs", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMmJkNGNiNjgtMzFlYy00ZDI5LWI2YzktZGVjYjI5MjQyMGU3XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 75, text: "Knock at the Cabin", to: "/KnockattheCabin", name: "Knock at the Cabin", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzU1ODIzYjAtNjUzNi00YmNjLWI5ZDAtNDgzOWY3MDU1OThlXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 76, text: "Smile 2", to: "/Smile2", name: "Smile 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYTg5OTMyMGMtYzMwNC00NDMyLWE0OGUtMTQ1ODcwM2FjOTM4XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 77, text: "The Sixth Sense", to: "/TheSixthSense", name: "The Sixth Sense", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZWQ2OTY0M2UtMTQxNC00MmIzLTllNDQtNDQ0MTQyYzI2M2ZiXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 78, text: "Heretic", to: "/Heretic", name: "Heretic", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzFiMWM4YjAtY2Y3Yi00MDIzLTk0N2MtYTAwNGM3ZmMwODhlXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 79, text: "Companion", to: "/Companion", name: "Companion", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYjkyZTA5NzAtYWU3Zi00MWM4LTgxNzAtNDQxY2JmNjMwYjk4XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 80, text: "Gonjiam: Haunted Asylum", to: "/GonjiamHauntedAsylum", name: "Gonjiam: Haunted Asylum", moviePoster: 'https://m.media-amazon.com/images/M/MV5BOWI1Yjk5ZWEtZjcyNS00NmZkLWFkNzUtMDA5YmNhODA1ZDVhXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 81, text: "Pearl", to: "/Pearl", name: "Pearl", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNzk0Y2RlZjItZDUzYi00Y2JhLTk5MzMtNjgzYWFmZmUxN2FmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 82, text: "Last Shift", to: "/LastShift", name: "Last Shift", moviePoster: 'https://m.media-amazon.com/images/M/MV5BN2IyOTc2NWQtNzZhMC00ZGE1LTg1MDAtNGE2NWFmOWRiOTVjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 83, text: "Exhuma", to: "/Exhuma", name: "Exhuma", moviePoster: 'https://m.media-amazon.com/images/M/MV5BOTA1OTY1NTYtNDEzZS00OTgyLWI1NWEtNDI5NjBhOTIwNzIyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 85, text: "The Wicker Man (2006)", to: "/TheWickerMan2006", name: "The Wicker Man (2006)", moviePoster: 'https://m.media-amazon.com/images/M/MV5BOWM1MjYzM2MtY2RmNS00OGUxLTlkNGItZjM3YjdmMTk1YjQ4XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 86, text: "Friday the 13th", to: "/Fridaythe13th", name: "Friday the 13th", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZjEwOTY5MjMtMTkzMi00Zjk1LThkM2QtZGZhMzQ3MzI3NDNhXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 87, text: "Identity", to: "/Identity", name: "Identity", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZTg1YWUyODktMWY5MC00ZjliLTg3YmUtZDliMGZhZDZmMzU5XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 88, text: "The Texas Chain Saw Massacre", to: "/TheTexasChainSawMassacre", name: "The Texas Chain Saw Massacre", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYjE1MGJkMjUtY2VkNi00N2U1LWI2NWEtMDExNGYzYjRkZTM0XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 90, text: "Psycho", to: "/Psycho", name: "Psycho", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 91, text: "The Menu", to: "/TheMenu", name: "The Menu", moviePoster: 'https://m.media-amazon.com/images/M/MV5BN2Q0YWE1MjktODJlMi00NTRiLWI2ZTctZTAxNjkyODVjM2EyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 92, text: "Presence", to: "/Presence", name: "Presence", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZWRmNzM1YjktM2YyMi00M2YwLWE2YjMtNjgwNTQ3MGU3MzczXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 93, text: "Bring Her Back", to: "/BringHerBack", name: "Bring Her Back", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZTlhYTk1ZTEtOWY3NC00NWQ5LTlkOTctNjQ3ZDYyZGE5ZWNlXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 94, text: "Weapons", to: "/Weapons", name: "Weapons", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNTBhNWJjZWItYzY3NS00M2NkLThmOWYtYTlmNzBmN2UxZWFjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 95, text: "The Black Phone", to: "/TheBlackPhone", name: "The Black Phone", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjFhZTcxOTktMzllMS00MzIzLWJhODEtZDU5YTFkNzRjZWQyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 96, text: "Child's Play (2019)", to: "/ChildsPlay2019", name: "Child's Play (2019)", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNzMwZTNkYzktM2EwYS00ZGZlLWJhNmQtZWNhMTBlMDUzOWRkXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 97, text: "Child's Play (1988)", to: "/ChildsPlay1988", name: "Child's Play (1988)", moviePoster: 'https://m.media-amazon.com/images/M/MV5BOTc2M2FjMDMtYzBmNS00ODMxLWJjOTYtZmNkMDYxMTU5ZTBhXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 98, text: "Rosemary's Baby", to: "/RosemarysBaby", name: "Rosemary's Baby", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDlhMDI3OTQtNTBkYy00NWQ5LWJmNWEtZGQwYzZlMTQ4MDI1XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 99, text: "Scary Stories to Tell in the Dark", to: "/ScaryStoriestoTellintheDark", name: "Scary Stories to Tell in the Dark", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMDBiOTEwM2MtNTQ5NC00NGVhLWI1MTgtY2E3YmIzMTdlMjI3XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 100, text: "The Jack in the Box", to: "/TheJackintheBox", name: "The Jack in the Box", moviePoster: 'https://m.media-amazon.com/images/M/MV5BN2Y1YzI2MzMtNmFmMS00YTU4LWFkYTUtNGUzZDU5YTE1NGQxXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 101, text: "The Bay", to: "/TheBay", name: "The Bay", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDEzMWU2YWUtOWVkMy00OTg0LTkyMjctMDA3MDc2NGViYjU5XkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 102, text: "Krampus", to: "/Krampus", name: "Krampus", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjk0MjMzMTI3NV5BMl5BanBnXkFtZTgwODEyODkxNzE@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 103, text: "Evil Dead Rise", to: "/EvilDeadRise", name: "Evil Dead Rise", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjM1ZmViMmYtOGYzZC00YzhmLWE0MTMtMzNjYzcyNjEwYWRkXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 104, text: "Viral", to: "/Viral", name: "Viral", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNTYzNjM4NTAzMV5BMl5BanBnXkFtZTgwMTE5ODIxOTE@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 105, text: "Nope", to: "/Nope", name: "Nope", moviePoster: 'https://m.media-amazon.com/images/M/MV5BODRlNWRhZWUtMzdlZC00ZDIyLWFhZjMtYTcxNjI1ZDIwODhjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 106, text: "Poltergeist (2015)", to: "/Poltergeist2015", name: "Poltergeist (2015)", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjI2NDM1Nzc3Ml5BMl5BanBnXkFtZTgwNjcyOTIxNTE@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 107, text: "It Chapter Two", to: "/ItChapterTwo", name: "It Chapter Two", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYzUxM2VhOGItZTY2My00OTA4LWI4NjUtMDA5YWJjM2M2NDJjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 108, text: "Happy Death Day", to: "/HappyDeathDay", name: "Happy Death Day", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTAxNGQwMjEtNjdjNy00NmQwLTkwYTEtNGIwZWJjZjU5M2FmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 109, text: "Host", to: "/Host", name: "Host", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNzNmNDY4ODUtOTRhMi00MGI5LWI2NTItYzdlMGM2ZDEwOGZiXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 110, text: "X", to: "/X", name: "X", moviePoster: 'https://m.media-amazon.com/images/M/MV5BODUwYTNhMTMtYWQ5Ny00YTdmLWIxOTAtNDczNzVlYzg2NDFkXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 111, text: "Late Night with the Devil", to: "/LateNightwiththeDevil", name: "Late Night with the Devil", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYTRiNWZlNGMtOTUwZi00ZjE4LWE1ZjEtNWE4MGQ2ZGU5NDliXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 112, text: "Apollo 18", to: "/Apollo18", name: "Apollo 18", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTk5MTk3OTk3OV5BMl5BanBnXkFtZTcwMzg4MzgxNg@@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 113, text: "Insidious: The Red Door", to: "/InsidiousTheRedDoor", name: "Insidious: The Red Door", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYWMwMmY2MzUtZDc1Ni00MDlmLThhOWUtYjVlNmQzMGFkMzZmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 114, text: "The Strangers", to: "/TheStrangers", name: "The Strangers", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTkxODAyODMwNV5BMl5BanBnXkFtZTcwNzk5Nzk2MQ@@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 115, text: "Life", to: "/Life", name: "Life", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNWNkYWYzNGUtOWVjNS00MGY0LWIyY2YtODllNGIxOGRlOTgyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 116, text: "Underground", to: "/Underground", name: "Underground", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTM2Njg3MTI4N15BMl5BanBnXkFtZTcwOTA2ODM5Ng@@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 117, text: "Immaculate", to: "/Immaculate", name: "Immaculate", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMWEzYjYyMjQtNTJjYi00ZDQ5LWE4N2MtNWY2ZTgxODNhYWM4XkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 118, text: "The Haunting in Connecticut", to: "/TheHauntinginConnecticut", name: "The Haunting in Connecticut", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZmE4Mjk4YjQtZTYzOS00OWYxLWEwMTItMzJmZThhNjQ1OWNjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 119, text: "The Empty Man", to: "/TheEmptyMan", name: "The Empty Man", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzI3OWYwNTQtOWM1Yi00Zjc1LWJmOGItN2UzMTNmNmJmZjE3XkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 120, text: "A Quiet Place: Day One", to: "/AQuietPlaceDayOne", name: "A Quiet Place: Day One", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMDdjZTljZWMtMDIwNi00MTA5LTkxZmItNmY0NDA3ZDM0N2M2XkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 121, text: "Paranormal Activity", to: "/ParanormalActivity", name: "Paranormal Activity", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjY1NjcxODQ4MV5BMl5BanBnXkFtZTcwMzUxNjM4Mg@@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
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
      {false && <img src={boo} alt="hello"/>}
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
        <Route path="/TheRuleofJennyPen" element={<TheRuleofJennyPen name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Sinister" element={<Sinister name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheAutopsyofJaneDoe" element={<TheAutopsyofJaneDoe name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Coraline" element={<Coraline name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheRing" element={<TheRing name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Sinister2" element={<Sinister2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheConjuring" element={<TheConjuring name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheRingTwo" element={<TheRingTwo name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Split" element={<Split name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Us" element={<Us name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Ghostland" element={<Ghostland name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/HouseofWax" element={<HouseofWax name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Oculus" element={<Oculus name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InsidiousChapter3" element={<InsidiousChapter3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Midsommar" element={<Midsommar name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Hereditary" element={<Hereditary name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ACureforWellness" element={<ACureforWellness name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/WrongTurn" element={<WrongTurn name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/HellHouseLLCOriginsTheCarmichaelManor" element={<HellHouseLLCOriginsTheCarmichaelManor name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/SawII" element={<SawII name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/SawIII" element={<SawIII name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ThePurge" element={<ThePurge name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheSubstance" element={<TheSubstance name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AllHallowsEve" element={<AllHallowsEve name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/GraveEncounters" element={<GraveEncounters name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Martyrs" element={<Martyrs name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ANightmareonElmStreet" element={<ANightmareonElmStreet name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheThing" element={<TheThing name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Scream" element={<Scream name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Within" element={<Within name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Old" element={<Old name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/GetOut" element={<GetOut name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheVillage" element={<TheVillage name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Haunt" element={<Haunt name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/LightsOut" element={<LightsOut name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheTakingofDeborahLogan" element={<TheTakingofDeborahLogan name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/It" element={<It name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheJackintheBoxAwakening" element={<TheJackintheBoxAwakening name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Smile" element={<Smile name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Hidden" element={<Hidden name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Caveat" element={<Caveat name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Thanksgiving" element={<Thanksgiving name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheBoy" element={<TheBoy name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheVisit" element={<TheVisit name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AsAboveSoBelow" element={<AsAboveSoBelow name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Tarot" element={<Tarot name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/GoodnightMommy" element={<GoodnightMommy name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/HellHouseLLC" element={<HellHouseLLC name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Saw" element={<Saw name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Mama" element={<Mama name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheOmen" element={<TheOmen name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheFirstOmen" element={<TheFirstOmen name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Oddity" element={<Oddity name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/DragMeToHell" element={<DragMeToHell name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Unsane" element={<Unsane name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/UnfriendedDarkWeb" element={<UnfriendedDarkWeb name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Thesis" element={<Thesis name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Terrifier" element={<Terrifier name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InTheTallGrass" element={<InTheTallGrass name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Longlegs" element={<Longlegs name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/KnockattheCabin" element={<KnockattheCabin name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Smile2" element={<Smile2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheSixthSense" element={<TheSixthSense name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Heretic" element={<Heretic name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Companion" element={<Companion name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/GonjiamHauntedAsylum" element={<GonjiamHauntedAsylum name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Pearl" element={<Pearl name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/LastShift" element={<LastShift name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Exhuma" element={<Exhuma name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheWickerMan2006" element={<TheWickerMan2006 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Fridaythe13th" element={<Fridaythe13th name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Identity" element={<Identity name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheTexasChainSawMassacre" element={<TheTexasChainSawMassacre name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Psycho" element={<Psycho name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheMenu" element={<TheMenu name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Presence" element={<Presence name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/BringHerBack" element={<BringHerBack name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Weapons" element={<Weapons name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheBlackPhone" element={<TheBlackPhone name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ChildsPlay2019" element={<ChildsPlay2019 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ChildsPlay1988" element={<ChildsPlay1988 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/RosemarysBaby" element={<RosemarysBaby name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ScaryStoriestoTellintheDark" element={<ScaryStoriestoTellintheDark name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheJackintheBox" element={<TheJackintheBox name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheBay" element={<TheBay name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Krampus" element={<Krampus name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/EvilDeadRise" element={<EvilDeadRise name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Viral" element={<Viral name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Nope" element={<Nope name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Poltergeist2015" element={<Poltergeist2015 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ItChapterTwo" element={<ItChapterTwo name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/HappyDeathDay" element={<HappyDeathDay name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Host" element={<Host name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/X" element={<X name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/LateNightwiththeDevil" element={<LateNightwiththeDevil name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Apollo18" element={<Apollo18 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InsidiousTheRedDoor" element={<InsidiousTheRedDoor name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheStrangers" element={<TheStrangers name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Life" element={<Life name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Underground" element={<Underground name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Immaculate" element={<Immaculate name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheHauntinginConnecticut" element={<TheHauntinginConnecticut name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheEmptyMan" element={<TheEmptyMan name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AQuietPlaceDayOne" element={<AQuietPlaceDayOne name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ParanormalActivity" element={<ParanormalActivity name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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