npm install react-router-dom

Go To App.js
=> import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
=> <Router>
    => <Switch>
        => <Route exact path="/">
        => <Route/>
    => <Switch/>
=> <Router/> 

Go To appropiate component
=> import { Link } from 'react-router-dom';
=> <Link to="/"> <Link/> 

Progress Bar gradient =>
background: linear-gradient(to right, $contrast-color 0%, $contrast-color 25%,$text-color 25%, $text-color 100%);