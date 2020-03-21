import React, { Component } from 'react'; 
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from ',.pages/AboutPage';
import DonatePage from './pages/donatePage';
import NotFoundPage from './pages/NotfoundPage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <div id="page-body">
                        <Switch>
                            <Route path="/" component={HomePage} exact>
                            <Route path="/about" component={AboutPage} exact></Route>    
                            <Route path="/DonatePage" component={DonatePage} exact></Route>
                            <Route component={NotFoundPage} />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App; 