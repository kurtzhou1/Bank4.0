import React,{ useState,useEffect } from 'react';
import SearchBar from "./SearchBar";
import VideoList from './VideoList';
import VideoView from './VideoView';
import youtube from "../apis/youtube";

const APP = () => {

    const [ vedioList,setVedioList ] = useState([]);
    const [ vedioSelect, setVedioSelect ] = useState(); 

    const makeSearch = async(keyWord:string) => {
        const response = await youtube.get("/search", {
            params: {
              q: keyWord,
            },
        });
        setVedioList(response.data.items);
        setVedioSelect(response.data.items[0]);
    }

    useEffect(()=>{
        makeSearch('coffee music');
    },[])

    return(
        <div className="template_Youtube wrapper">
            <SearchBar makeSearch={makeSearch}/>
            <div className="ui grid m-3">
                <div className="ui row">
                    <div className="eleven wide column">
                    <VideoView vedioSelect={vedioSelect}/>
                    </div>
                    <div className="five wide column">
                    <VideoList
                        vedioList={vedioList}
                        setVedioSelect={setVedioSelect}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APP; 