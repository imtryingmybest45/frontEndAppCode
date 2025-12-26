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

function Annabelle(props){

    const origMovName = props.origMovName;
    const movName = "Annabelle";
    const movVal = "Release Date: 2014\n\nRating: 8/10\n\nWhile New Line Cinema's hit franchise is titled \"The Conjuring,\" Annabelle is possibly one of the most famous movies in the series. The creepy doll has been notorious in the Conjuring universe since day one and was previously featured in short teasers at the beginning of the first two Conjuring movies. Given its frequent cameos in the other movies, fans were dying for a movie explaining the mysterious origins of the Annabelle doll. John Leonetti did not disappoint and gave us one of the creepiest movies in the Conjuring franchise, one that I would dare say is a classic nowadays.\n\nThe movie takes place in the 60s and is centered around a newlywed couple, Mia and John. Their lives are very hectic at this time; not only is John finishing up med school and preparing for residency, but Mia has a baby on the way. Regardless of the stress, the couple clearly loves their lives and each other, which is a much-needed glimmer of happiness in an otherwise dark and terrifying story. Mia, in addition to being a seamstress, is an avid doll collector, and she is overjoyed when her husband gifts her a rare, antique doll that she had been looking for for years. As you can probably guess, said doll is the infamous Annabelle doll, complete with her creepy smile and bulging eyes. She places the doll next to other similarly dressed dolls that are presumably part of the same collection, and we immediately notice Annabelle is far larger than the other dolls, sticking out like a sore thumb. From the very beginning, from her massive size and her garish smile, we know that something is different about her, and not in a good way.\n\nThe doll, however, does not pose an immediate threat; it is revealed that there are far more dangerous, very human threats in the family's neighborhood. If you recall, in the 60s, there was a huge rise in Satanic cults with deranged leaders who brainwashed their followers. One such cult, lead by an infamous serial killer, infiltrated the couple's neighbors' house, slaughtering them in their sleep. This was not an indiscriminate killing; it was revealed that one of the cult's followers, Annabelle Higgins, was the estranged daughter of Mia and John's neighbors, and the cult had murdered them in devotion to their leader. Next on their killing spree were Mia and John, who did nothing to deserve it other than being the Higgins' neighbors. Mia is awoken by a commotion downstairs, and she is horrified to see Annabelle standing in her kitchen with a knife. She rushes at Mia, and before Mia can escape, she stabs her in the stomach. Horrified and gravely injured, Mia manages to lock herself in her bedroom until the police arrive. Upon realizing that she is cornered and that there is no other future for her other than life in prison, Annabelle commits suicide in the new baby's nursery before the cops can arrest her. As she lay propped up against the wall bleeding to death, we she she is holding Mia's new doll. The camera zooms in, and a tiny drop of blood drips from Annabelle's neck, slides down her throat, and lands in the doll's eye. The movie implies that this was the point at which the doll became possessed, presumably with the spirit of Annabelle Higgins.";

    const [varVar, setVarVar] = useState(true);
    let prevPath = props.name;

    const value = '';
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const specialCharsRegex = /[^a-zA-Z0-9\s]/;

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
        if (specialCharsRegex.test(formData.movieName)){
            setMess("Movie name cannot contain non-alphanumeric characters.")
        }
        else if(/^[a-z]/.test(formData.movieName)){
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
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BNjkyMDU5ZWQtZDhkOC00ZWFjLWIyM2MtZWFhMDUzNjdlNzU2XkEyXkFqcGc@._V1_SX300.jpg'} alt="This is the movie poster for this movie."/>}
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

export default Annabelle;