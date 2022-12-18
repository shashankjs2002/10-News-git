import React, { Component, useContext, useEffect, useState } from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import SearchContext from '../context/SearchContext';


const Navbar = () => {
    const context = useContext(SearchContext)
    const {query,setQuery} = context

    const [search, setSearch] = useState({search: ""})
    const navigate = useNavigate(null)
    const location = useLocation(null)
    let path = location.pathname
    useEffect(() => {
    //   console.log(path)
    }, [location])
    
   

    const submitQuery = (e) => {
        e.preventDefault();
        // console.log(search)
        setQuery(search.search)
        // context.router.push()
        navigate(`/10-News/search/${search.search}`)
        setSearch({search: ""})
        
    }

    const onchange = (e) => {
        setSearch({...search, [e.target.name]: e.target.value})
    } 


    return( <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/10-News">10-News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-link">
                    <Link className={`nav-link ${(path==='/') ? 'active': ''}`} to="/">Home</Link>
                    </li>
                    <li className={`nav-link ${(path==='/10-News/world') ? 'active': ''}`}><Link className="nav-link" to="/10-News/world">World</Link></li>
                    <li className={`nav-link ${(path==='/10-News/nation') ? 'active': ''}`}><Link className="nav-link" to="/10-News/nation">Nation</Link></li>
                    <li className={`nav-link ${(path==='/10-News/business') ? 'active': ''}`}><Link className="nav-link" to="/10-News/business">Business</Link></li>
                    <li className={`nav-link ${(path==='/10-News/entertainment') ? 'active': ''}`}><Link className="nav-link" to="/10-News/entertainment">Entertainment</Link></li>
                    <li className={`nav-link ${(path==='/10-News/health') ? 'active': ''}`}><Link className="nav-link" to="/10-News/health">Health</Link></li>
                    <li className={`nav-link ${(path==='/10-News/science') ? 'active': ''}`}><Link className="nav-link" to="/10-News/science">Science</Link></li>
                    <li className={`nav-link ${(path==='/10-News/sports') ? 'active': ''}`}><Link className="nav-link" to="/10-News/sports">Sports</Link></li>
                    <li className={`nav-link ${(path==='/10-News/technology') ? 'active': ''}`}><Link className="nav-link" to="/10-News/technology">Technology</Link></li>
                    
                    {/* {(query!==null) ? :} */}
                    {/* <li className="nav-item"><Link className="nav-link" to={`/search=${query}`}>Technology</Link></li> */}

                </ul>
                <form className="d-flex" >
                    <input className="form-control me-2" type='search' name='search' id='search' placeholder="Search" aria-label="Search" onChange={onchange} value={search.search}/>
                    {/* <btn value='Search' className=" btn-outline-dark"/> */}
                    <button className="btn btn-outline-dark" type="submit" onClick={submitQuery}> 
                    {/* <Link to={`/search/${query}`}>
                       
                    </Link> */}
                    Search
                    </button>
                </form>
                </div>
            </div>
            </nav>
         
    </div>
    )

}

export default Navbar
