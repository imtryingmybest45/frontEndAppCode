import {useEffect} from 'react';
import {useState,useLayoutEffect,useRef} from 'react';
import axios from 'axios';

function usePersistedState(key, defaultValue) {
  // Initialize state with value from localStorage if available
  const [state, setState] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

function AnnabelleComesHome(props){

    const origMovName = props.origMovName;
    const movName = "Annabelle Comes Home";
    const movVal = "Release Date: 2019\n\nRating: 5/10\n\nWell, ladies and gentleman, while Annabelle Comes Home doesn't have much else to write home about, it at least claims the title of this website's first negative review. It's sad, because the first two Annabelles were engaging and excellently done, and this one just fell flat. I shouldn’t be surprised, though, since there’s really only so far you can stretch the scary doll lore.\n\nTruthfully, the story arc of this movie surprised me; I thought they were going to finally delve into the story of the two nurses, but they instead chose to have Annabelle wreak havoc on the Warrens’ youngest daughter, Judy, and her two hapless baby sitters. I appreciate them not going with the most obvious next direction in the franchise, but that’s where my positive critiques end. The rest of this movie includes the most hackneyed, overdone jump scares with cheap CGI effects. The Annabelle demon looked almost as laughably fake as its computer-generated growl. All of the other “lesser demons” had little to no backstory or connection to the main demon. It felt like the director just added them in to be scary, but they served no other purpose in driving the plot. In my opinion, ghost movies are much more compelling and impactful when the spirits have some type motive to haunt the antagonist, and it felt like these spirits were scaring the girls just because they were there. I would have liked if the other spirits were all different manifestations of the main Annabelle demon, similar to what was done in Annabelle Creation, but it seems like they were just there for no reason and had no relation to the main demon.\n\nI will say that the part at the end where Judy tries to put Annabelle back in the case and the demon's hand pushes it closed from behind is terrifying, but they fucking ruined it when they showed the rest of the demon and had it sucking the soul out of Judy's face. Like, come on, really?\n\nAs usual, the ending is begrudgingly heartwarming, but that doesn't make up for the mediocrity of the rest of the movie.";

    const [varVar, setVarVar] = useState(true);
    let prevPath = props.name;

    const value = '';
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto'; // Reset width to calculate actual content width
            inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
        }
    }, [value]); // Re-run when the value changes

    const [stvar, setMess] = useState('');
    const [formData, setFormData] = usePersistedState("movInfo",{
        movieName: movName,
        movieReview: movVal,
        origMovName: origMovName,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior (page reload)
        if(/^[a-z]/.test(formData.movieName)){
            setMess("First word of movie name must be uppercase.")
        }
        else{
        setMess("Please wait, your review is loading.");
        axios.post('https://helpme-e5h7aua4bpcqchae.canadacentral-01.azurewebsites.net/editEndpoint',formData)
        //axios.post('http://localhost:8080/editEndpoint',formData)
        .then(response => setMess(response.data))
        }
    };

     useEffect(() => {
    const handlePageLoad = (prevPath) => {
        if (prevPath === "/EditPage"){
            setVarVar(false);
        }
        else{
            setVarVar(true);
        }
    };

    handlePageLoad(prevPath);
  },[prevPath]); // The empty dependency array ensures this runs only once

    return(
        <div>
            {varVar && <h1>{movName}</h1>}
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BMjRjYmQ5NTQtYzIyNi00MmNlLTlmNjYtNjQ3NzRlZmY3YjFlXkEyXkFqcGc@._V1_SX300.jpg'} alt="This is the movie poster for this movie."/>}
            {varVar && <pre className = "paragraphStylin">{movVal}</pre>}
            {!varVar &&<form onSubmit={handleSubmit}>
                <label className="linkss">
                    Movie Name:
                    <textarea className = "custom-input" type="text" ref={inputRef} name="movieName" value={formData.movieName} onChange={handleChange} placeholder="Input movie name" />
                </label>
                <label className="linkss2">
                    Movie Review:
                    <textarea className = "customInp" type="text" ref={inputRef2} name="movieReview" value={formData.movieReview} onChange={handleChange} placeholder="Write movie review here"/>
                </label>
                <button type="submit">Submit</button>
                <p>{stvar}</p>
            </form>}
        </div>
    )
}

export default AnnabelleComesHome;