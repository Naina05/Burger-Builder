import React, { Component } from 'react';

import Layout from './components/Layouts/Layouts';
import BurgerBuilder from './containers/Burgerbuilder/Burgerbuilder';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;