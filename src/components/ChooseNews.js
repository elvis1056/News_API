import React, { Component } from 'react';
import NewTW from './NewTW';
import NewJP from './NewJP';
import NewHK from './NewHK';

class ChooseNews extends Component {
  render() {
    return (
      <div className="ChooseNews">
        {(this.props.country === "TW") && <NewTW country={this.props.country} />}
        {(this.props.country === "JP") && <NewJP country={this.props.country} />}
        {(this.props.country === "HK") && <NewHK country={this.props.country} />}
      </div>
    );
  }
}

export default ChooseNews;