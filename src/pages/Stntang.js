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

function Stntang(props){

    const origMovName = props.origMovName;
    const movName = "Sátántangó";
    const movVal = "Subversive – Not just your ordinary 7½-hour black-and-white meditation on despair. This movie was refreshingly different by breaking expectations and norms throughout. \n\nAt first glance, Sátántangó appears to be a bleak, rain-soaked meditation on rural despair. This is a clever disguise. In reality, it is a slow-burn sci-fi horror comedy about what happens when a post-agricultural commune accidentally reboots a dead man using advanced Hungarian AI technology.\n\nThe plot kicks off when villagers on a collapsing collective farm prepare for a mysterious cash payout—clearly the last remnant of an alien economic system known as Late Communism. Just as everyone is calculating escape vectors, Irimiás returns from the dead, which is the first major sci-fi reveal. He does not arrive in a spaceship, but honestly, that makes it scarier. Any man who can resurrect himself wearing a trench coat and deliver a two-hour monologue clearly has access to forbidden knowledge.\n\nThe horror elements are subtle but relentless: endless rain (possibly acidic), cows that stare too long (definitely observing us), and tracking shots so long they seem to bend spacetime. Several scenes feel less like cinema and more like being trapped in a haunted GIF. Viewers may experience temporal distortion, existential nausea, and the creeping suspicion that the movie is watching you.\n\nComedically, the film shines in its depiction of villagers repeatedly believing Irimiás’s schemes despite overwhelming evidence that he is, at best, a charismatic malware update. Each speech promises salvation, progress, and meaning; each result is identical desolation. It’s basically The Hitchhiker’s Guide to the Galaxy if the joke were “hope” and it took seven and a half hours to land.\n\nThe sci-fi payoff arrives when you realize Irimiás isn’t human at all, but a self-replicating ideology—a rogue AI trained exclusively on speeches, alcohol, and human weakness. He doesn’t steal the villagers’ money; he uploads it into the cloud (a literal one, hovering permanently over Hungary).\n\nBy the end, time has looped, the tango is complete, and nothing has improved—classic cosmic comedy. Five stars for bravery, minus two for emotional damage. Recommended for fans of experimental cinema, existential dread, and anyone who’s ever thought, “What if Blade Runner had more mud and absolutely no robots?”\n\nFull Disclosure: This movie was undoubtedly made by distant Hungarian relatives of mine. Also, I fell asleep about two minutes into the movie so I had to get some help from my buddy Bob for most of the review.";
    const movTier = "S";

    const [varVar, setVarVar] = useState(true);
    let prevPath = props.name;

    const value = '';
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

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
        movieTier: movTier
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
            {varVar && <img src={'error'} alt="This is the movie poster for this movie."/>}
            {varVar && <pre className = "paragraphStylin">{movVal}</pre>}
            {!varVar &&<form onSubmit={handleSubmit}>
                <label className="linkss">
                    Movie Name:
                    <textarea className = "custom-input" type="text" ref={inputRef} name="movieName" value={formData.movieName} onChange={handleChange} placeholder="Input movie name" />
                </label>
                <label className="linkss">
                    Tier:
                    <textarea className = "custom-input" type="text" ref={inputRef3} name="movieTier" value={formData.movieTier} onChange={handleChange} placeholder="Input movie tier" />
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

export default Stntang;