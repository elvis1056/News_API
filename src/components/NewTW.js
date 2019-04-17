import React, { Component } from 'react';
import axios from 'axios';

class NewTW extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount(){
    const country = this.props.country
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=38b02df435d848f29218067b687d44d9`)
    .then((response)=>{
      this.setState({
        articles: response.data.articles
      })
      console.log(country)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render() {
    const articles = this.state.articles
    console.log(articles)
    return (
      <div className="row" style={{margin: 'auto 0', width: '100%'}}>
          {articles.map( (Item, index) => {
            return (
              <div className="card col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index} style={{padding:"0", marginTop: "1rem", width: "18rem"}}>
                <img src={Item.urlToImage} alt="圖片失效" className="card-img-top" style={{height:"24rem", objectFit: "cover"}}/>
                <div className="card-body">
                  <p className="card-text">{Item.title}</p>
                </div>
              </div>
            )
          })}
      </div>
    );
  }
}

export default NewTW;
