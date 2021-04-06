import React from "react";
import AsyncSelect from "react-select/async";
import {initiateGetResult} from "../utils/function";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.setState({
            selectedArtist:""
        });
    }


    handleChange=(value)=>{
        this.setState({
            selectedArtist:value
        },()=>this.props.handleSearch(this.state.selectedArtist))
    };

    loadOptions =async(inputValue)=>{
        const result = await initiateGetResult(inputValue);
        let arr = [];
        result.artists.items.map((artist)=>(
            arr.push({
                "label":artist.name,
                "value":artist.id
            })
        ));
        return arr;
    };


    render(){
        return(
            <form onSubmit={this.handleSearch}>
                <AsyncSelect cacheOptions defaultOptions loadOptions={this.loadOptions} onChange={this.handleChange}/>
            </form>
        )
    }
}

export default SearchBar;