import React from "react";
import queryString from "query-string";
import SearchBar from "./SearchBar";

class Redirect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedArtist:null
        };
    }

    componentDidMount(){
        const accessToken = queryString.parse(this.props.location.hash);
        const expiryTime = new Date().getTime() + accessToken.expires_in*1000;
        localStorage.setItem('params',JSON.stringify(accessToken));
        localStorage.setItem('expiry_time',expiryTime);
        this.props.setAccessToken(accessToken);
    }

    handleSearch = (selectedArtist)=>{
        this.setState({
            // weird fix for returned object
            selectedArtist:JSON.parse(JSON.stringify(selectedArtist))
        });
    };



    render(){
        return (
            <div>
                <h3>Select an artist</h3>
                <SearchBar handleSearch={this.handleSearch} />
                {this.state.selectedArtist?<div>{this.state.selectedArtist.label}</div>:null}
            </div>
        )
    }
}

export default Redirect;