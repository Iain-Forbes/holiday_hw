import {useState, useEffect} from "react"
import RedditStoryDetails from "../components/RedditStoryDetails"

const RedditStoryContainer = () => {

const [redditStory, setRedditStory] = useState (null);

const getRedditStory = () => {
    console.log('Getting reddit feed.');

    fetch(`https://www.reddit.com/r/pcmasterrace.json`).then((res) => {
    return res.json()
    }).then((data) => {
        
        setRedditStory(data);
    }) 
}
    useEffect(() =>{
        getRedditStory();
    }, [])

    return (
        <>
        <h1>Reddit Feed</h1>
        <RedditStoryDetails redditStory={redditStory} />
        </>
    )

}

export default
RedditStoryContainer;