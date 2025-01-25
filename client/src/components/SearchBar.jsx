import { useSearchContext } from "../utils/searchContent.jsx";

function SearchBar() {

    const { setQuery } = useSearchContext();
    
    function handleChange(event) {
        const query = event.target.value;
        // const query = '';
        console.log(query)
        setQuery(query);
    };

    return (
        <>
            <input
                placeholder="Search" 
                type="search"
                onChange={handleChange}
            />
        </>
    )
}   

export default SearchBar;