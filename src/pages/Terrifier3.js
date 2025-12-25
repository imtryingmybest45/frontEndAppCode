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

function Terrifier3(props){

    const origMovName = props.origMovName;
    const movName = "Terrifier 3";
    const movVal = "Release Date: 2024\n\nRating: 9/10\n\nALERT, ALERT: IT'S A CHRISTMAS REVIEW SPECIAL, BROUGHT TO YOU COURTESY OF APRIL!\n\nWell, my ghoul and monster-loving friends, it's Christmas again. And as is tradition (a tradition that actually just started last year, since this movie was released in October 2024), last night I watched my favorite Christmas movie: Terrifier 3.\n\nDespite the fact that this film has only been around for a year, I consider it to be a timeless classic. There's nothing better to get you in the Christmas spirit than watching our favorite Santa impersonator, Art the Clown, viciously murder men, women, and children. No creature, big or small, is free from his Christmas cheer (mostly conveyed via chainsaw in this movie). Much like Santa, he sees you when you're sleeping, he knows when you're awake. He knows if you've been bad or good, so be good for goodness' sake. This last line of the song is not as applicable as the prior lines, as Art does not care whether you have been bad or good; he will kill you regardless. Art takes the words of Romans 3:23 to heart: \"For all have sinned and fall short of the glory of God,\" so, in his mind, everyone is equal and deserves to be murdered. To quote Galatians 3:28, \"There is neither Jew nor Greek, neither slave nor free, nor is there male and female, for all shall be murdered by Art the Clown.\" (April Standard Version).\n\nWe see Art implement his philosophy of equality at the beginning of the movie when he dresses as Santa to drop by the house of a sweet, innocent family to spread some Christmas cheer. He first spreads his cheer to little Johny, who he viciously gores to death in his bed with an axe. Next, he spreads his cheer to the man of the house (no idea what his name is; honestly, it doesn't matter because he gets killed in two seconds) by again chopping him up with an axe. At this point, the unsuspecting mother wakes up to see her husband bleeding to death in the bed next to her while Art points and laughs. As many of Art's victims do, she makes a feeble (and,in my opinion, rather pathetic) attempt to escape. Art entertains her fantasies of evading him until he gets bored, then he finally axes her to death. With the entire family murdered, our Jolly Saint Art takes a little break to revel in his work while snacking on some much-deserved milk and cookies. And for good reason--he still has a lot of families to murder tonight, so he needs his energy. During this scene, to really kick off the tone of the movie and put us in the Christmas spirit, the classic Christmas hymn \"O Come, All Ye Faithful\" plays in the background. That's the thing that I love throughout this movie: despite the fact that it was released on Halloween, it's a Christmas movie through and through, and watching it always gets me in the Christmas spirit.\n\nThe joy continues when Art's decapitated body locates his severed head, which was recently birthed in a mental asylum by the now-possessed Victoria Hayes. Upon reattaching his head, he proceeds to viciously murder the asylum staff, then hop on a bus with his trusty sidekick to travel back to his lair. I must note that this scene was a flashback to five years ago right after the Miles County Massacre. After his killing spree, Art and Victoria decide to take a little break and proceed to sit motionless in his lair (which is an abandoned building in god knows where) for five years. Finally, after a long period of dormancy, two unsuspecting construction workers discover Art and Victoria during a routine building inspection. As is custom with anybody that runs into Art the Clown, he immediately kills both of them while Victoria watches. I must note that, while this movie is perfect in every other regard, I must deduct one point for this scene, as it is not very family friendly. While Art the Clown rips the scalp off of the construction worker, Victoria looks upon him in glee while pleasuring herself with a mirror shard. While myself and my friend found this hilarious, this is ultimately a family movie, and I didn't appreciate this scene being included in a family movie because it could corrupt the children watching. I would suggest that, if you're watching this with your children, to fast-forward through this part so as to not put any graphic images in their head.\n\nAnyways, after this brief look at what Art and Victoria have been up to for the last five years, we flash forward to catch up with Sienna, who's been in a mental asylum for the last year or so. Surprisingly, she experienced some mental health issues from almost being murdered and watching her mother die, so she needed a brief grippy sock vacation to get her ship-shape again. Now that she is completely healed from all of her trauma for good and has no mental health issues whatsoever, she's finally released to her uncle and aunt, who bring her back to their place for the holidays. Upon her arrival, Sienna is immediately greeted by her exuberant eleven-year-old cousin, Gabby, who gleefully tackles her in a hug after presumably not seeing her for several years. We then check in on John, who is somehow in college around the age of 14, presumably because he is a boy genius who managed to skip five grades. Seriously, though, this was a major and, in my opinion, unnecessary discontinuity in the Terrifier universe's timeline. Why Damien Leone decided to age John nine years in a span of five years and make him a college student is beyond me, but whatever floats his boat, I guess. I must say that, while it is a glaring discontinuity in the timeline of the series, it is rather funny seeing a clearly 14-year-old John surrounded twenty-something college kids. But I digress. The important thing to gather from this scene that all is well in the Shaw family, and everyone has completely moved on from the massacre, leaving Art and his minions in his past, never to be encountered again /s.";

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
        axios.post('https://tryingthisagain-e6f8d0gqfmgsevft.eastus2-01.azurewebsites.net/editEndpoint',formData)
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
            {varVar && <img src={'https://m.media-amazon.com/images/M/MV5BNzc2MWUyYzctY2E4Ny00ZTlmLThjNTMtMTViZGI5NjcyN2EzXkEyXkFqcGc@._V1_SX300.jpg'} alt="This is the movie poster for this movie."/>}
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

export default Terrifier3;