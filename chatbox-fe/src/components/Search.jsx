import axios from "axios";
import React, { Component, useState } from "react";
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";
// import { instanceOf } from "prop-types";
// import { withCookies, Cookies } from "react-cookie";
import "./css/Search.css"
import SearchResult from "./SearchResult";

class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            // user_id: this.props.cookies.get('user_id') || '',
            cookies: props.cookies,
            search_value: '',
            result: [],
        }
        this.searchHandler = this.searchHandler.bind(this)
    }

    componentDidMount(){}

    componentDidUpdate(preprops, prestates){
        if(this.state.search_value !== "" & prestates.search_value !== this.state.search_value){
            axios.get(`http://${process.env.REACT_APP_PUBLIC_URL}/search-friends`,
                    {headers:{Authorization: `Token ${this.state.cookies.token}`}, params:{value: this.state.search_value}})
            .then((res)=>{
                console.log(res.data)
                this.setState({result: res.data})
            }).catch(e=>{
                console.log(e)
            })
        }
    }

    searchHandler(e){
        this.setState({search_value: e.target.value})
    }

    render() { 
        return (
        <div className="search">
            <header>header</header>
            <section className="main-search-section">
                <div className="search-side-bar">
                    Side bar
                </div>
                <div className="main-bar">
                    <div className="search-input">
                        <input type="search" placeholder="Search Friends" name="" onChange={this.searchHandler} value={this.state.search_value} id="search" />
                    </div>
                    <div className="search-result-bar">
                        {this.state.result.map(res=><SearchResult key={res.id} data={res} />)}
                    </div>
                </div>
            </section>
        </div>
        );
    }
}
 
export default Search;


