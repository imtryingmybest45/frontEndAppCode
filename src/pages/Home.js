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
  ];
  return (
    <div>
      {tfVar&&<h1>Welcome to my website.</h1>}
      {tfVar&&<p>This is where I review horror movies.</p>}
      {tfVar&&<p>Click on a movie name to see the review.</p>}
      <Routes>
        <Route path="/TheConjuring" element={<TheConjuring name = {stvar}/>} />
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