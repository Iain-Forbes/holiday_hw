// import Story from "./story.js"

const RedditStoryDetails = ({redditStory}) => {
    if (!redditStory) return null;
    const redditStoryList = redditStory.data.children;

    const storyDetails = 
    redditStoryList.map((story) => {
        return( 
            {
                title: story.data.title,

                author: story.data.author_fullname,

                key: story.data.id

            }
        );
    });

    const storyDisplay =
    storyDetails.map((story) => {
        return (
            <li>
            <h3>{story.title}</h3>
            </li>)
        });

        return (
            <>
                <h2>Reddit Story</h2>
                <ol>
                    {storyDisplay}
                </ol>
            </>
        )};
 

    export default RedditStoryDetails
