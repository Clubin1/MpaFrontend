import { Switch, Route } from 'react-router-dom';

// Components
import Navigation from './Components/UI/Navigation.js'
import Footer from './Components/UI/Footer.js'

// Pages 
import Home from './Components/Pages/Home.js';
import About from './Components/Pages/About.js';
import Professionals from './Components/Pages/Professionals.js';
import Search from './Components/Pages/Search.js'
import Apply from './Components/Pages/Apply';
import Contact from './Components/Pages/Contact.js';
import Faq from './Components/Pages/Faq.js';
import Resources from './Components/Pages/Resources';
import Payment from './Components/Pages/Payment'
import NotFound from './Components/Pages/NotFound'
const App = () => {
  return (
    <div className="App">
      <Navigation />
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/membership" component={Professionals} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/application" component={Apply} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/faq" component={Faq}/>
          <Route exact path="/resources" component={Resources}/>
          <Route exact path="/payment" component={Payment}/>
          <Route component={NotFound} />
        </Switch>  
      <Footer />
    </div>
  );
}

export default App;
