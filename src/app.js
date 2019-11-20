import React from 'react';

import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  constructor() {
    super() //calls parent
    //All the things your app cares about. 
    this.state = {
      title: 'My awesome App',
      copyright: 'J. Erlemeier',
    }
  }

  render () {
    return (
      <>
      <Header title={this.state.title} />
      <Footer display={this.state.copyright} />
      </>
    )
  }
}

export default App;