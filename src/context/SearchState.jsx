import { useState } from 'react';
import SearchContext from './SearchContext';

const SearchState = (props) => {
    const [query, setQuery] = useState('')
    
    
    return (
        <SearchContext.Provider value={{setQuery, query}}>
            {props.children}
        </SearchContext.Provider>
    )

}

export default SearchState