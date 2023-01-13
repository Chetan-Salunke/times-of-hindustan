import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ed544fae4bcb40d4b12e0c1877d61765&page=1&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({ articles: parseddata.articles })
    }

    handleprevclick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ed544fae4bcb40d4b12e0c1877d61765&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({
            page: this.state.page - 1,
            articles: parseddata.articles
        })
    }

    handlenextclick = async () => {

        console.log("chetan salunke clicked")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ed544fae4bcb40d4b12e0c1877d61765&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({
            page: this.state.page + 1,
            articles: parseddata.articles
        })
    }


    render() {
        return (

            <div className="container my-3">
                <h2 className='text-center'>Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {

                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-secondary" onClick={this.handleprevclick}>&larr; Previous</button>
                    <button type="button" class="btn btn-secondary" onClick={this.handlenextclick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
