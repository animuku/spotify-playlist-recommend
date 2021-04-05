import React from "react";
import logo from "./Spotify-Logo.svg";

class Home extends React.Component{
    handleLogin = () => {
        const {
            REACT_APP_CLIENT_ID,
            REACT_APP_AUTHORIZE_URL,
            REACT_APP_REDIRECT_URL
        } = process.env;
        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    render(){
        return (
        <div className="App">
            <img  src={logo} className="App-logo" alt="logo" />
            <div>
            <input placeholder="Artist" value={this.artist}/>
            <button type="submit" variant="info" onClick={this.handleLogin}>Fetch</button>
            </div>
        </div>
        )
    }
}

export default Home;