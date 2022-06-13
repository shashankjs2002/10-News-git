import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import Spinner from './Spinner';

import { submitfunc } from './Navbar';

export class News extends Component {

    apiUrl = process.env.REACT_APP_API_URL
    
    
    
    static defaultProps = {
        country: 'in',
        max: 9,
        category: 'breaking-news,',
        query: ''
    }
    static propTypes = {
        country: PropTypes.string,
        max: PropTypes.number,
        category: PropTypes.string,
        query: PropTypes.string
    }
    constructor(){
        super();
        console.log("Hello I am a constructor from news component ");
        this.state ={
            articles: [],
            loading: false,
            page : 1,
            query: submitfunc()
        }


    
    }

    
    
    async componentDidMount(){
        console.log("cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ead7440fb05472c9e3315666906d761&page=1&max=${this.props.max}`;
        let uri = `https://gnews.io/api/v4/top-headlines?token=3fb55ca4ddae296e27f04ae96268e2c7&page=1&topic=${this.props.category}&max=${this.props.max}&lang=hi&country=${this.props.country}`;
        console.log(typeof(submitfunc())) 
        let url = (this.state.query !== "") ? `https://gnews.io/api/v4/search?q=${this.state.query}&token=3fb55ca4ddae296e27f04ae96268e2c7`: uri

        if(url != url){
            url = `https://gnews.io/api/v4/search?q=${this.props.query}&token=3fb55ca4ddae296e27f04ae96268e2c7`
        }

        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json(); 
        console.log(parsedData);
        this.setState({articles: parsedData.articles,
             totalArticles :parsedData.totalArticles,
            loading:false});

        // let myCategory = this.props.category ;
        // myCategory = myCategory[0].toUpperCase() +myCategory.substring(1)
           
        
    }


    
    
    handlePrevClick = async () =>{
        console.log("Previous");
        
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ead7440fb05472c9e3315666906d761&page=${this.state.page - 1}&max=${this.props.max}`;
        let url = `https://gnews.io/api/v4/top-headlines?token=3fb55ca4ddae296e27f04ae96268e2c7&page=${this.state.page - 1}&country=${this.props.country}&topic=${this.props.category}&max=${this.props.max}`;

        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json(); 
        console.log(parsedData);
        
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
        
    }
    
    handleNextClick = async () =>{
        console.log("Next");
            if(!(this.state.page+1>Math.ceil(this.state.totalArticles/15))){

            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ead7440fb05472c9e3315666906d761&page=${this.state.page + 1}&max=${this.props.max}`;
            let url = `https://gnews.io/api/v4/top-headlines?token=3fb55ca4ddae296e27f04ae96268e2c7&ppage=${this.state.page - 1}&country=${this.props.country}&topic=${this.props.category}&max=${this.props.max}`;

            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json(); 
            console.log(parsedData);
            
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    
  render() {

    return <div className="container my-3">
            
            <h1 className="text-center my-3">NewsApp- Top {this.props.category} Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
                  
                {!this.state.loading && this.state.articles.map((element)=>{

                    return <div className="col-md-4" key={element.url} >
                        {/* <NewsItem title={element.title} description ={element.description} content ={element.content} imageurl ={element.urlToImage} newsUrl={element.url}/>  */}
                        <NewsItem title={element.title} source={element.source.name} description ={element.description} content ={element.content} imageurl ={element.image} newsUrl={element.url}/> 
                    </div>
                })}

            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.max)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

            </div>
        </div>;
  }
}

export default News;
