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
  ];
  return (
    <div>
      {tfVar&&<h1>Welcome to my website.</h1>}
      {tfVar&&<p>This is where I review horror movies.</p>}
      {tfVar&&<p>Click on a movie name to see the review.</p>}
      <Routes>
        <Route path="/TheConjuring2" element={<TheConjuring2 name = {stvar}/>} />
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