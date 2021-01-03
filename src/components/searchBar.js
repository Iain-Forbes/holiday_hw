import {useState,} from "react"

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = e => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm) 
    return searchTerm}

    const handleSubmit = e => {
        e.preventDefault()
        console.log(searchTerm)
      };

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search For a Subreddit" value={searchTerm} onChange={handleChange} name="query" />
        </form>
        </>
    )
 };

 export default SearchBar;