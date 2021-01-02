const Story = ({story}) => {
    if (!story) return null;
    return (
        <>
            <li>
                <h4>{story.title}</h4>
            </li>
        </>
    );
};

export default Story;
