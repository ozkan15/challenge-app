import * as React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { exportedHome } from "./components/Home";
import { exportedMovies } from "./components/Movies";
import { exportedSeries } from "./components/Series";
import { UrlError } from "./components/UrlError";







class App extends React.Component {
  

  public render() {
    



    return (
      <div className="wrapper">
        <Header />
        <main>
          <BrowserRouter >
            <div>
              <Switch>
                <Route path="/" component={exportedHome} exact={true} />
                <Route path="/movies" component={exportedMovies} />
                <Route path="/series" component={exportedSeries} />
                <Route  component={UrlError} />
              </Switch>
            </div>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    );
  }

}
export default App;
