import React,{ useState }  from 'react';
import {
    MDBIcon
  } from "mdbreact";

const SearchBar = (props:any) => {

    const {makeSearch} = props;
    const [ keyWord , setKeyWord ] = useState('');

    const search = (e:any) => {
        e.e.preventDefault();
        makeSearch(keyWord);
    }

    return(
        <div className="searchBar m-3">
            <div className="d-flex justify-content-center">
                <div className="w-50">
                    <form className="loginForm w-100" onSubmit={(e:any)=>{search(e)}}>
                        <input
                            type="text"
                            className="w-100 border"
                            onChange={(e)=>{setKeyWord(e.target.value)}}
                        />
                    </form>
                </div>
                <button className="btn-search" onClick={(e:any)=>{search(e)}}>
                    <MDBIcon fab icon="sistrix" />
                </button>
            </div>
        </div>
    )
}

export default SearchBar; 