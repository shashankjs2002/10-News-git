import React, { Component } from 'react';

export class NewsItem extends Component {

  render() {
    let {title, description, imageurl, content, newsUrl, source}= this.props;
    return <div className="my-3">
        <div className="card">
        <span className="badge text-bg-success" styles={{position:"absolute", top: "0"}}>{source}</span>
            <img src={!imageurl?"./noImageAvailable1.png":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
            
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description ? description : content}...</p>
                {/* <p className="card-text">{ content}...</p> */}
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
            </div>
        </div>
    </div>;
  }
}

export default NewsItem;
