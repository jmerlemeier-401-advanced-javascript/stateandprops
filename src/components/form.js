import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('request started');
    let data = await superagent.get('https://swapi.co/api/people/?format=json');
    // console.log(data);
    let count = data.body.count;
    let results = data.body.results;

    this.props.handleData(count, results);

  }
  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <button>Click for people data...</button>
    </form>
    )
  }
}

export default Form;