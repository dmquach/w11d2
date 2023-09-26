import React from 'react';
import Navigation from './navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import SensorySurvey from './survey2/SensorySurvey';
import SampleSurvey from './sample-survey/SampleSurvey';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/sample-survey">
          <SampleSurvey />
        </Route>
        <Route path="/survey2">
          <SensorySurvey />
        </Route>
        <Route path="/">
          <h1>Home Page</h1>

        </Route>
      </Switch>

    </>
  );
}

export default App;
