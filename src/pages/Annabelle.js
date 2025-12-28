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
    const movVal = "Release Date: 2014\n\nRating: 8/10\n\nWhile New Line Cinema's hit franchise is titled \"The Conjuring,\" Annabelle is possibly one of the most famous movies in the series. The creepy doll has been notorious in the Conjuring universe since day one and was previously featured in short teasers at the beginning of the first two Conjuring movies. Given its frequent cameos in the other movies, fans were dying for a movie explaining the mysterious origins of the Annabelle doll. John Leonetti did not disappoint and gave us one of the creepiest movies in the Conjuring franchise, one that I would dare say is a classic nowadays.\n\nThe movie takes place in the 60s and is centered around a newlywed couple, Mia and John. Their lives are very hectic at this time; not only is John finishing up med school and preparing for residency, but Mia has a baby on the way. Regardless of the stress, the couple clearly loves their lives and each other, which is a much-needed glimmer of happiness in an otherwise dark and terrifying story. Mia, in addition to being a seamstress, is an avid doll collector, and she is overjoyed when her husband gifts her a rare, antique doll that she had been looking for for years. As you can probably guess, said doll is the infamous Annabelle doll, complete with her creepy smile and bulging eyes. She places the doll next to other similarly dressed dolls that are presumably part of the same collection, and we immediately notice Annabelle is far larger than the other dolls, sticking out like a sore thumb. From the very beginning, from her massive size and her garish smile, we know that something is different about her, and not in a good way.\n\nThe doll, however, does not pose an immediate threat; it is revealed that there are far more dangerous, very human threats in the family's neighborhood. If you recall, in the 60s, there was a huge rise in Satanic cults with deranged leaders who brainwashed their followers. One such cult, lead by an infamous serial killer, infiltrated the couple's neighbors' house, slaughtering them in their sleep. This was not an indiscriminate killing; it was revealed that one of the cult's followers, Annabelle Higgins, was the estranged daughter of Mia and John's neighbors, and the cult had murdered them in devotion to their leader. Next on their killing spree were Mia and John, who did nothing to deserve it other than being the Higgins' neighbors. Mia is awoken by a commotion downstairs, and she is horrified to see Annabelle standing in her kitchen with a knife. She rushes at Mia, and before Mia can escape, she stabs her in the stomach. Horrified and gravely injured, Mia manages to lock herself in her bedroom until the police arrive. Upon realizing that she is cornered and that there is no other future for her other than life in prison, Annabelle commits suicide in the new baby's nursery before the cops can arrest her. As she lay propped up against the wall bleeding to death, we she she is holding Mia's new doll. The camera zooms in, and a tiny drop of blood drips from Annabelle's neck, slides down her throat, and lands in the doll's eye. The movie implies that this was the point at which the doll became possessed, presumably with the spirit of Annabelle Higgins.\n\nUpon discovering that Annabelle had been holding the doll when she died, Mia demands that the doll be disposed of. Understandably, the whole ordeal rattled her so much that she refused to even continue living in the house. Fortunately for her, John got matched with a hospital relatively close to their location, so they moved to an apartment in a neighboring city, hoping to leave the Higgins incident behind them. Thankfully, Mia's abdominal trauma had no impact on her pregnancy, and she birthed a healthy baby soon after--a little girl, who they decided to name Leah.\n\nUnfortunately, Mia realizes that her troubles are far from over when she begins experiencing supernatural occurrences in their new apartment. Like most supernatural movies, they start out small--a weird nose here, a trinket misplaced there. The activity quickly ramps up, however, one day when Mia and her baby are out for a walk. When returning to her apartment, she has a disturbing vision of her baby's stroller rolling into the street and getting hit by a bus. As she walks up the stairs, she notices a child's drawing on the steps. The drawing is of her and her baby, and initially she is delighted that the neighboring kids seem to have taken a shine to them. Her smile fades, however, as she progresses up the stairs and finds more drawings, one after the other after the other. The drawings depict the horrific vision she had had just a few moments ago: her baby's stroller rolling into the street with a bus getting closer and closer. The final drawing is the most disturbing, showing the stroller getting hit by the bus, the baby's blood splattered all over the pavement. This scene stuck out in my mind for its sheer creativity; I've never seen a scare quite like this. We've seen many scenes with children's toys or music used as props by supernatural entities, but never a sort of stop-motion flip book like this. Despite their simplicity, the drawings send shivers down your spine, as you know at this point that Mia and her baby are being targeted by something otherworldly.\n\nAfter this incident, Mia knows that something is gravely wrong with her place and possibly that doll, which reappeared after being thrown away by John several months prior. A few days later, she is again targeted by the entity while putting some boxes in the apartment complex's basement storage area. This, to me, was the absolute scariest scene of the movie, and one of the most innovative, as well. While locking her items in her storage locker, the overhead lights flip off one after the other. We hear the faint sound of a child's laughter as her baby's stroller slowly rolls into the frame. Terrified, Mia slowly approaches the stroller to see what could be inside. As she looks into the carriage, her arm is immediately grabbed by a black, spindly hand that appears out of nowhere. She screams and yanks her hand back. When she looks at the place where the entity grabbed her arm, she is mortified to see a satanic inscription carved into her flesh. Completely done with this bullshit, she sprints towards the elevator, desperate to get away from whatever the fuck was in that basement. She presses the button to floor 6, and the elevator doors close. Relieved, she looks down to inspect her arm, only for the elevator doors to open at the exact same floor she was before. Completely hysterical at this point, she presses button 6, only for the same thing to happen again. I think you can see where this is going. She does it one more time, then the elevator stops working, and she is trapped in the basement with that thing. This little detail is actually something I missed in my first few watches; I appreciate the incorporation of the devil's number, 666, into this scene--it makes it that much scarier.\n\nRest of review coming soon…";

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