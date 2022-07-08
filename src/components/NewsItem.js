import React, { Component } from 'react';

const NewsItem = (props) => {

  let { title, description, imageurl, content, newsUrl, source } = props;
  return <div className="my-3">
    <div className="card" style={{flexDirection:'row', flexWrap:'wrap'}} >
      {/* <span className="badge text-bg-success" styles={{position:"absolute", top: "0", color: "#000"}}>{source}</span> */}
      <div className='col-md-4'>

      <span className="badge rounded-pill text-bg-danger"
        style={{
          background: "red",
          width: "fit-content",
          position: "absolute",
          right: "0"
        }}>
        {source}
      </span>
      <img src={!imageurl ? "./noImageAvailable1.png" : imageurl} className="card-img-top" alt="..." />
          </div>
      <div className="card-body col-md-8">

        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description ? description : content}...</p>
        {/* <p className="card-text">{ content}...</p> */}
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
      </div>
    </div>
  </div>;
}


export default NewsItem;
