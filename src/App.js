import React from 'react';
import Header from './components/commons/heading/Header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css"
import Home from './components/home/Home'
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';

const App = () => {
  return (
    <div>
     <Router>
     <Header />
     <Switch>
      <Route path = '/' exact component={Home} />
      <Route path = '/about' exact component={About} />
      <Route path = '/courses' exact component={CourseHome} />
      <Route path = '/team' exact component={Team} />
     </Switch>
     </Router>
    </div>
  )
}

export default App;

