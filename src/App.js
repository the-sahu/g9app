

import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import DemateScreen from './screen/DemateScreen';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import PortfolioScreen from './screen/PortfolioScreen';
import ProfileScreen from './screen/ProfileScreen';

const defaultScreens = () => (
  <>
    <Header />
   
    <Route path="/demate"  component={DemateScreen} exact/>
      <Route path="/profile"  component={ProfileScreen} exact/>
      <Route path="/portfolio"  component={PortfolioScreen} exact/>
    <Footer />
  </>
);
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        {/* <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
        <Route
          exact
          path="/passwordreset/:resetToken"
          component={PasswordResetScreen}
        /> */}
        <Route component={defaultScreens} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;




// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Header/>
//       <Route path="/" component={HomeScreen} exact/>
     
//       <Route path="/login"  component={LoginScreen} exact/>
//       <Footer/>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
