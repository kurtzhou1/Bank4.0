import React,{ useState }  from 'react';
import {
    MDBIcon
  } from "mdbreact";

const SearchBar = ({makeSearch}:any) => {

    const [ keyWord , setKeyWord ] = useState('');

    const search = (e:any):void => {
        makeSearch(keyWord);
        e.preventDefault();
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