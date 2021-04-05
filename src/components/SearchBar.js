import React from "react";
class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            accessToken:this.props.accessToken,
            queryString:"",
            selectedString:"",
            searchResult:[]
        };
    }

    handleChange=(event)=>{
        this.setState({
            queryString:event.target.value
        });
    }
    handleSearch = (event)=>{
        event.preventDefault();

        if(this.state.queryString && this.state.queryString.length){
            this.props.handleSearch(this.state.queryString);
        }

    }

    render(){
        return(
            <form onSubmit={this.handleSearch}>
                <input value={this.queryString} onChange={this.handleChange} placeholder="Artist"></input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default SearchBar;