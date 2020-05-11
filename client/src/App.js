
import { Route, Link ,BrowserRouter, Switch} from 'react-router-dom';
import FIb from './FIb';
import OtherPage from './OtherPage';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
          <BrowserRouter>
             <>
            <Link to="/">Home</Link>
            <Link to="/otherpage">OtherPage</Link>
            <Switch>
            <Route exact path="/" component={FIb} />
              <Route path="/otherpage" component={OtherPage} />
            </Switch>
             </>
          </BrowserRouter>
    )
  }
}

