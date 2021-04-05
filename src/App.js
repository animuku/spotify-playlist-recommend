import './App.css';
import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Redirect from "./components/Redirect";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      accessToken:"",
      expiryTime: '0'
    };
  }


  setAccessToken = (accessToken)=>{
    this.setState({
      accessToken:accessToken
    });
  }
  
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path = "/redirect/" render={(props)=><Redirect{...props} setAccessToken={this.setAccessToken}/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
