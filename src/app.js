import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';

class App extends React.Component {
  constructor() {
    super() //calls parent
    //All the things your app cares about. 
    this.state = {
      title: 'My awesome App',
      copyright: 'J. Erlemeier',
      count:0,
      results: [],
    }
  }

  handleData = (count, results) => {
    this.setState({ count, results });
  }

  render () {
    return (
      <>
      <Header title={this.state.title} />
      <Form handleData={this.handleData} />
      <ul>
      {/* can inject raw JS into this with curlies */}
      {
        this.state.results.map(person => {
          return <li key={person.name}>{person.name}</li>
        })
      }
      </ul>
      <Footer display={this.state.copyright} />
      </>
    )
  }
}

export default App;