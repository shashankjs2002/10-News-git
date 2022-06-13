import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Link} from "react-router-dom";
import News from './News';


export default class Navbar extends Component {

    
  render() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item"><Link className="nav-link" to="/world">World</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/nation">Nation</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link" to={`/search=${query}`}>Technology</Link></li> */}

                    {/* <Link  ></Link> */}

                    {/* <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-t<oggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link disabled">Disabled</Link>
                    </li> */}
                </ul>
                <form className="d-flex" method='get'>
                    <input className="form-control me-2" name='search' id='query' placeholder="Search" aria-label="Search"/>
                    <input value='Search' className=" btn-outline-dark" onClick={submitfunc}/>
                    {/* <Link className="nav-link" to={`/search=${get}`}><button className="btn btn-outline-dark" type="submit" onClick={this.submitfunc} >Search</button></Link> */}
                </form>
                </div>
            </div>
            </nav>
         
    </div>;
  }
}


// const element = <News query={submitfunc()} key="Technology" max={12} country="in" category="technology" />;
// root.render(element);

export function submitfunc(){
    console.log('hello')
    // console.log(e)
    // console.log((document.querySelector('#query')))
    let get = (document.querySelector('#query')) != null ? document.querySelector('#query').value : ''
    console.log((get))
    // root.render(element);

    // Link(query: get)
    
    
    
    // document.querySelector('#query').value = ""
    // <News key="World" max={12} country="in" category="world"/>
    

    return get;
    
   
}