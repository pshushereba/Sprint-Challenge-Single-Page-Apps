import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';

import WelcomePage from "./components/WelcomePage.js";
import CharacterList from './components/CharacterList.js';
import LocationsList from './components/LocationsList.js';
import EpisodeList from './components/EpisodeList.js';

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path='/characters' component={CharacterList} />
      <Route exact path='/locations' component={LocationsList} />
      <Route exact path='/episodes' component={EpisodeList}/>
    </main>
  );
}
