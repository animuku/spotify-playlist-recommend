import React from "react";
import queryString from "query-string";
import SearchBar from "./SearchBar";
import {initiateGetResult} from "../utils/function";

class Redirect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchResult:[]
        };
    }

    componentDidMount(){
        // console.log(this.props);
        const accessToken = queryString.parse(this.props.location.hash);
        const expiryTime = new Date().getTime() + accessToken.expires_in*1000;
        localStorage.setItem('params',JSON.stringify(accessToken));
        localStorage.setItem('expiry_time',expiryTime);
        this.setState({
            accessToken:accessToken
        });
        this.props.setAccessToken(accessToken);
    }

    handleChange=(event)=>{
        this.setState({
            queryString:event.target.value
        });
    }

    handleSearch = async(artist)=>{
        if(artist && artist.length){
            const result = await initiateGetResult(artist);
            this.setState({
                searchResult:result.artists.items
            });
        }
    }


    render(){
        return (
            <div>
                <SearchBar handleSearch={this.handleSearch} />
                <ul>
                    {this.state.searchResult.map((artist)=>(
                        <div id={artist.id}>
                            <li>{artist.name}</li>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Redirect;