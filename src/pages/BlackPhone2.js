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

function BlackPhone2(props){

    const origMovName = props.origMovName;
    const movName = "Black Phone 2";
    const movVal = "Release Date: 2025\n\nRating: 6/10\n\nAfter the 2021 debut of the original Black Phone, I had high hopes for this sequel, but it unfortunately fell flat in many important areas.\n\nSince I'm in a good mood this morning, I'll discuss the pros of this movie first. And I obviously have to start with the stunning, incredibly well-executed camera work. Truthfully, I haven't seen such good scene-setting and lighting/ambiance since 2012's Sinister. The film's most notable scenes are actually reminiscent of the eerie found footage segments in Sinister, except this time they occur as Gwen's dream sequences. It contains almost the exact same format as the Sinister found footage: a few minutes of footage of a happy, carefree child, followed immediately by grisly shots of his gruesome murder. It even has a similar subtle yet bone-chilling soundtrack to accompany the footage. Some people have accused the writers of blatantly ripping off Sinister with these scenes, but I disagree. Yes, the format is extremely similar to Sinister, but the context in which they occur is completely different and entirely original. I've never seen a film implement this kind of gritty, almost old-film-like aura to capture a dream sequence, and I think it works surprisingly well. This comes back to something I've discussed several times in past reviews, and I'll say it again: using concepts and tropes from past movies isn't bad as long as they're executed well. I think many people are too quick to write off a movie if they see any concepts or scenes that are commonly employed in previous (especially classic) movies simply because they view it as \"ripping off\" that movie. There are only so many ways you can create a scary scene and atmosphere, so it's unfair to expect every scene of a movie to implement completely original ideas on this front. I think that, as long as a movie employs high-quality special effects and camera work when borrowing concepts from past movies, it can absolutely work, as long as the overall plot of the movie is original. The found footage-esque scenes are highly reminiscent of similar, but they occur in an entirely different context and are brilliantly executed, so it works. Additionally, I absolutely LOVED the choice of setting for this movie. I have a soft spot for snowy mountains, and this movie occurs in COLORADO, which is my absolute favorite place on earth. The film takes place in an old, abandoned youth camp high in the mountains called \"Alpine Camp,\" and it honestly looks like my dream winter wonderland. On top of that, the way they were able to transform this idyllic retreat into a hostile, barren, and dangerous environment during the progression of the movie was truly astounding. I have a lot of respect for production teams that have the ability to create entirely different-looking settings in a single set location, as I can imagine their limited budget and space to work with would really make this difficult. Throughout the movie I felt completely immersed in the environment, almost as if I was right alongside the characters in those blizzard-covered mountains. I appreciate an immersive and encapsulating setting, I must say this movie did that extremely well.\n\nNow, to the major con of this movie: the plot. You never want to hear that the con of a movie is the plot itself (it's almost saying as if the whole movie was a fail), but that's really the only way I can say it. I think the idea of bringing back the Grabber in ghost form to torment Finny and Gwen was really not the best choice. While I appreciate the desire to follow up with Finny and Gwen after the Grabber incident and expand upon their family's backstory, I think the choice to have the ghost of the Grabber call them back to some random camp in the mountains was weird. It seemed like they were desperately trying to incorporate the same villain into the movie, but his connection to the characters was flimsy and a bit confusing.";

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
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BMTVjMzNmZGYtOWU5NS00NDYzLThhZTktZGNlODIwYWVhMDRmXkEyXkFqcGc@._V1_SX300.jpg'} alt="This is the movie poster for this movie."/>}
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

export default BlackPhone2;