import Saw from './Saw';
import HellHouseLLC from './HellHouseLLC';
import GoodnightMommy from './GoodnightMommy';
import Tarot from './Tarot';
import AsAboveSoBelow from './AsAboveSoBelow';
import ChildsPlay2019 from './ChildsPlay2019';
import TheVisit from './TheVisit';
import TheBoy from './TheBoy';
import Thanksgiving from './Thanksgiving';
import Caveat from './Caveat';
import Hidden from './Hidden';
import TheJackintheBoxAwakening from './TheJackintheBoxAwakening';
import It from './It';
import TheTakingofDeborahLogan from './TheTakingofDeborahLogan';
import LightsOut from './LightsOut';
import Haunt from './Haunt';
import TheVillage from './TheVillage';
import ChildsPlay from './ChildsPlay';
import GetOut from './GetOut';
import Old from './Old';
import Within from './Within';
import Scream from './Scream';
import Martyrs from './Martyrs';
import AllHallowsEve from './AllHallowsEve';
import ThePurge from './ThePurge';
import SawIII from './SawIII';
import SawII from './SawII';
import HellHouseLLCOriginsTheCarmichaelManor from './HellHouseLLCOriginsTheCarmichaelManor';
import WrongTurn2021 from './WrongTurn2021';
import Hereditary from './Hereditary';
import Midsommar from './Midsommar';
import InsidiousChapter3 from './InsidiousChapter3';
import HouseofWax from './HouseofWax';
import Ghostland from './Ghostland';
import Us from './Us';
import Split from './Split';
import TheRingTwo from './TheRingTwo';
import Sinister2 from './Sinister2';
import TheRing from './TheRing';
import Coraline from './Coraline';
import TheAutopsyofJaneDoe from './TheAutopsyofJaneDoe';
import Oculus from './Oculus';
import Sinister from './Sinister';
import Heretic from './Heretic';
import GraveEncounters from './GraveEncounters';
import TheThing from './TheThing';
import TheConjuring from './TheConjuring';
import Smile from './Smile';
import Fridaythe13th from './Fridaythe13th';
import TheBay from './TheBay';
import Terrifier from './Terrifier';
import ACureforWellness from './ACureforWellness';
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
      { id: 14, text: "A Cure for Wellness", to: "/ACureforWellness", name: "A Cure for Wellness", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTg5Njg1MzIwNl5BMl5BanBnXkFtZTgwNDU1NjczMDI@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 15, text: "Terrifier", to: "/Terrifier", name: "Terrifier", moviePoster: 'https://m.media-amazon.com/images/M/MV5BN2M5MzJlYzctNmZhOC00MTFmLWIxZmUtN2I4NzY5MTlmNDdmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 16, text: "The Bay", to: "/TheBay", name: "The Bay", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDEzMWU2YWUtOWVkMy00OTg0LTkyMjctMDA3MDc2NGViYjU5XkEyXkFqcGc@._V1_SX300.jpg', tier: 'C', longReview: 'N',},
      { id: 17, text: "Friday the 13th", to: "/Fridaythe13th", name: "Friday the 13th", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZjEwOTY5MjMtMTkzMi00Zjk1LThkM2QtZGZhMzQ3MzI3NDNhXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 18, text: "Smile", to: "/Smile", name: "Smile", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjFhMzBlNzktMjE2Ni00YTMyLWI2YWUtYmM1N2QxMDQwZmZhXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 19, text: "The Conjuring", to: "/TheConjuring", name: "The Conjuring", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 21, text: "The Thing", to: "/TheThing", name: "The Thing", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYTA3NDU5MWEtNTk4Yy00ZDNkLThmZTQtMjU3ZGVhYzAyMzU4XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 22, text: "Grave Encounters", to: "/GraveEncounters", name: "Grave Encounters", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjQ0NjQxOTM5N15BMl5BanBnXkFtZTcwNzUwMzMwNg@@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 24, text: "Heretic", to: "/Heretic", name: "Heretic", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzFiMWM4YjAtY2Y3Yi00MDIzLTk0N2MtYTAwNGM3ZmMwODhlXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 25, text: "Sinister", to: "/Sinister", name: "Sinister", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_SX300.jpg', tier: 'NO', longReview: 'N',},
      { id: 26, text: "Oculus", to: "/Oculus", name: "Oculus", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzE1NzM4MjEyNV5BMl5BanBnXkFtZTgwMjYzMjMzMTE@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 27, text: "The Autopsy of Jane Doe", to: "/TheAutopsyofJaneDoe", name: "The Autopsy of Jane Doe", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA2MTEzMzkzM15BMl5BanBnXkFtZTgwMjM2MTM5MDI@._V1_SX300.jpg', tier: 'S', longReview: 'N',},
      { id: 28, text: "Coraline", to: "/Coraline", name: "Coraline", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzQxNjM5NzkxNV5BMl5BanBnXkFtZTcwMzg5NDMwMg@@._V1_SX300.jpg', tier: 'S', longReview: 'N',},
      { id: 29, text: "The Ring", to: "/TheRing", name: "The Ring", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_SX300.jpg', tier: 'S', longReview: 'N',},
      { id: 30, text: "Sinister 2", to: "/Sinister2", name: "Sinister 2", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjM3MTQ5NjA0OV5BMl5BanBnXkFtZTgwMzg2OTYyNTE@._V1_SX300.jpg', tier: 'S', longReview: 'N',},
      { id: 31, text: "The Ring Two", to: "/TheRingTwo", name: "The Ring Two", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTY2ODc2NTQ2OF5BMl5BanBnXkFtZTYwNzA4OTU3._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 32, text: "Split", to: "/Split", name: "Split", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNTZjNmVjMzAtZjg2Mi00MWNmLTk5NTItOTExZDYwNTE2YmExXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 33, text: "Us", to: "/Us", name: "Us", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzhkMjFkN2YtODU2Ni00YWYwLWExN2MtOWNjZmQxM2U4YTM5XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 34, text: "Ghostland", to: "/Ghostland", name: "Ghostland", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYmQzNzMxYTQtMTllOS00MTRiLWE3NWMtOGZmNDcwYjg1YzE3XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 35, text: "House of Wax", to: "/HouseofWax", name: "House of Wax", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDA4Nzg1NjQ2NV5BMl5BanBnXkFtZTcwMDYwNTgyMQ@@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 37, text: "Insidious: Chapter 3", to: "/InsidiousChapter3", name: "Insidious: Chapter 3", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTUwNDU4NjE1N15BMl5BanBnXkFtZTgwOTc0MzA5NDE@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 38, text: "Midsommar", to: "/Midsommar", name: "Midsommar", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 39, text: "Hereditary", to: "/Hereditary", name: "Hereditary", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 41, text: "Wrong Turn (2021)", to: "/WrongTurn2021", name: "Wrong Turn (2021)", moviePoster: boo, tier: 'A', longReview: 'N',},
      { id: 42, text: "Hell House LLC Origins: The Carmichael Manor", to: "/HellHouseLLCOriginsTheCarmichaelManor", name: "Hell House LLC Origins: The Carmichael Manor", moviePoster: 'https://m.media-amazon.com/images/M/MV5BOWNkZmZhYTItMWE3Mi00ODA3LWI3NTItZGM3NDZjMTQ1YjRmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 43, text: "Saw II", to: "/SawII", name: "Saw II", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZGVlNjk3MmItZmUzNy00MzcyLWIzOTktZjllYWU5MDAyMjM1XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 44, text: "Saw III", to: "/SawIII", name: "Saw III", moviePoster: 'https://m.media-amazon.com/images/M/MV5BODQ4YTAwZTItZGFjZi00YjNiLTllYzUtYWY3OWM2OTQzODVkXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 45, text: "The Purge", to: "/ThePurge", name: "The Purge", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTQzNTcwODEyM15BMl5BanBnXkFtZTcwMjM1MDI0OQ@@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 46, text: "All Hallows' Eve", to: "/AllHallowsEve", name: "All Hallows' Eve", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDc5ZTk4ZjUtNWRkNS00ZDg2LThkY2YtNjIyNGMwZWI4MmRiXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 47, text: "Martyrs", to: "/Martyrs", name: "Martyrs", moviePoster: 'https://m.media-amazon.com/images/M/MV5BN2Q5MWQ0OWYtMTUzMC00ZmU3LWEyNDAtZjg1NjE2ZjVkM2I3XkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 49, text: "Scream", to: "/Scream", name: "Scream", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 50, text: "Within", to: "/Within", name: "Within", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjUzODY5OWEtYjlhYy00MWMyLTg5MzQtOTQ0ZTViMzlmYTgwXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 51, text: "Old", to: "/Old", name: "Old", moviePoster: 'https://m.media-amazon.com/images/M/MV5BM2JkZjI5MjktNmQwZC00ZmYxLTg0OTYtYmVhNGFkMGZlMGYyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 52, text: "Get Out", to: "/GetOut", name: "Get Out", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 53, text: "Child's Play", to: "/ChildsPlay", name: "Child's Play", moviePoster: boo, tier: 'A', longReview: 'N',},
      { id: 54, text: "The Village", to: "/TheVillage", name: "The Village", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZWI1MjE4YmYtMjJhMS00YmJhLTg1NjMtYjM5ZWE0YjM2MGFiXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 55, text: "Haunt", to: "/Haunt", name: "Haunt", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZDM4ZTIyMTAtNDg3ZS00NDIzLThjZDYtMjRmYjE5OWI3ZTViXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 56, text: "Lights Out", to: "/LightsOut", name: "Lights Out", moviePoster: 'https://m.media-amazon.com/images/M/MV5BOGUyNmQxNjQtNjU1OS00YTExLWFjMGUtNWVhN2Y0MGE2ZmZmXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 57, text: "The Taking of Deborah Logan", to: "/TheTakingofDeborahLogan", name: "The Taking of Deborah Logan", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjhhNTM1OGUtYTRkZC00Mzg4LWFiY2ItYTUwMDg3NDIxYjExXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 58, text: "It", to: "/It", name: "It", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 59, text: "The Jack in the Box: Awakening", to: "/TheJackintheBoxAwakening", name: "The Jack in the Box: Awakening", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNWVlYTc0OTYtYzM3MS00ZDMwLWI5NzctZjRjY2JiYTUwY2ZjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 60, text: "Hidden", to: "/Hidden", name: "Hidden", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDZkZjE3NGEtZmIzZC00MWUyLWJlN2ItNTc4ODcwMDY2ZmQ1XkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 61, text: "Caveat", to: "/Caveat", name: "Caveat", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDRjNzA2YjktNTk1OC00NTM1LTg1ZDgtYjRhM2Y4MGI5ODhkXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 62, text: "Thanksgiving", to: "/Thanksgiving", name: "Thanksgiving", moviePoster: 'https://m.media-amazon.com/images/M/MV5BYzhiZTkyM2UtNjU2MC00MjcxLWJhZGYtODQ0MDViN2UxMzAwXkEyXkFqcGc@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 63, text: "The Boy", to: "/TheBoy", name: "The Boy", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTc1MjcxNzcwMV5BMl5BanBnXkFtZTgwMTE0NTE2NzE@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 64, text: "The Visit", to: "/TheVisit", name: "The Visit", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTg3OTM2OTc5MV5BMl5BanBnXkFtZTgwMjMxNDM0NTE@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 65, text: "Child’s Play (2019)", to: "/ChildsPlay2019", name: "Child’s Play (2019)", moviePoster: boo, tier: 'B', longReview: 'N',},
      { id: 66, text: "As Above, So Below", to: "/AsAboveSoBelow", name: "As Above, So Below", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMTQzNzg0NDI2MF5BMl5BanBnXkFtZTgwMzgxNzY2MTE@._V1_SX300.jpg', tier: 'A', longReview: 'N',},
      { id: 67, text: "Tarot", to: "/Tarot", name: "Tarot", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNjY3NTkxMjQtZWNjNy00NGU2LTlhOTMtMmRhZGEwNzRmMDcyXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 68, text: "Goodnight Mommy", to: "/GoodnightMommy", name: "Goodnight Mommy", moviePoster: 'https://m.media-amazon.com/images/M/MV5BMjAyMDU2NjU4OF5BMl5BanBnXkFtZTgwNDg5ODc0NjE@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 69, text: "Hell House LLC", to: "/HellHouseLLC", name: "Hell House LLC", moviePoster: 'https://m.media-amazon.com/images/M/MV5BNDU2YTZhZTEtNjQ2Mi00ZTlkLWFhNTctNDAyNGNjNTVlYzdkXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
      { id: 70, text: "Saw", to: "/Saw", name: "Saw", moviePoster: 'https://m.media-amazon.com/images/M/MV5BZTE5MzFlMTktMzBkOC00ZjMxLThmOTAtOGU3ZGEwZGRlNDdjXkEyXkFqcGc@._V1_SX300.jpg', tier: 'B', longReview: 'N',},
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
        <Route path="/ACureforWellness" element={<ACureforWellness name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Terrifier" element={<Terrifier name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheBay" element={<TheBay name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Fridaythe13th" element={<Fridaythe13th name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Smile" element={<Smile name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheConjuring" element={<TheConjuring name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheThing" element={<TheThing name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/GraveEncounters" element={<GraveEncounters name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Heretic" element={<Heretic name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Sinister" element={<Sinister name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Oculus" element={<Oculus name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheAutopsyofJaneDoe" element={<TheAutopsyofJaneDoe name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Coraline" element={<Coraline name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheRing" element={<TheRing name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Sinister2" element={<Sinister2 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheRingTwo" element={<TheRingTwo name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Split" element={<Split name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Us" element={<Us name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Ghostland" element={<Ghostland name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/HouseofWax" element={<HouseofWax name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Oculus" element={<Oculus name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/InsidiousChapter3" element={<InsidiousChapter3 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Midsommar" element={<Midsommar name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Hereditary" element={<Hereditary name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/WrongTurn2021" element={<WrongTurn2021 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/HellHouseLLCOriginsTheCarmichaelManor" element={<HellHouseLLCOriginsTheCarmichaelManor name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/SawII" element={<SawII name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/SawIII" element={<SawIII name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ThePurge" element={<ThePurge name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AllHallowsEve" element={<AllHallowsEve name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Martyrs" element={<Martyrs name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Scream" element={<Scream name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Within" element={<Within name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Old" element={<Old name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/GetOut" element={<GetOut name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ChildsPlay" element={<ChildsPlay name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheVillage" element={<TheVillage name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Haunt" element={<Haunt name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/LightsOut" element={<LightsOut name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheTakingofDeborahLogan" element={<TheTakingofDeborahLogan name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/It" element={<It name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheJackintheBoxAwakening" element={<TheJackintheBoxAwakening name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Hidden" element={<Hidden name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Caveat" element={<Caveat name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Thanksgiving" element={<Thanksgiving name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheBoy" element={<TheBoy name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/TheVisit" element={<TheVisit name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/ChildsPlay2019" element={<ChildsPlay2019 name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/AsAboveSoBelow" element={<AsAboveSoBelow name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Tarot" element={<Tarot name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/GoodnightMommy" element={<GoodnightMommy name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/HellHouseLLC" element={<HellHouseLLC name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
        <Route path="/Saw" element={<Saw name = {props.prevPath} age={props.setPrevPath} reinit={props.reinit} origMovName={origMovName}/>} />
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