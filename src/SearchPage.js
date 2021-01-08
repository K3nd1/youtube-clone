import React from 'react';
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {

    return(
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj"
            channel="Okendi Gjepali"
            verified
            subs="659K"
            noOfVideos={382}
            description="Learn how to code"
            />
            <hr/>
            <VideoRow
            views="1.4M"
            subs="659K" 
            description="Learn react js for like 10 minutes"
            timestamp="59 seconds ago"
            channel="Okendi Gjepali"
            title="Lets learn React Js together"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
                        <VideoRow
            views="1.4M"
            subs="659K" 
            description="Learn react js for like 10 minutes"
            timestamp="59 seconds ago"
            channel="Okendi Gjepali"
            title="Lets learn React Js together"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
                        <VideoRow
            views="1.4M"
            subs="659K" 
            description="Learn react js for like 10 minutes"
            timestamp="59 seconds ago"
            channel="Okendi Gjepali"
            title="Lets learn React Js together"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
                        <VideoRow
            views="1.4M"
            subs="659K" 
            description="Learn react js for like 10 minutes"
            timestamp="59 seconds ago"
            channel="Okendi Gjepali"
            title="Lets learn React Js together"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
                        <VideoRow
            views="1.4M"
            subs="659K" 
            description="Learn react js for like 10 minutes"
            timestamp="59 seconds ago"
            channel="Okendi Gjepali"
            title="Lets learn React Js together"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
                        <VideoRow
            views="1.4M"
            subs="659K" 
            description="Learn react js for like 10 minutes"
            timestamp="59 seconds ago"
            channel="Okendi Gjepali"
            title="Lets learn React Js together"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
                        <VideoRow
            views="1.4M"
            subs="659K" 
            description="Learn react js for like 10 minutes"
            timestamp="59 seconds ago"
            channel="Okendi Gjepali"
            title="Lets learn React Js together"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
                        <VideoRow
            views="1.4M"
            subs="659K" 
            description="Learn react js for like 10 minutes"
            timestamp="59 seconds ago"
            channel="Okendi Gjepali"
            title="Lets learn React Js together"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
                        <VideoRow
            views="1.4M"
            subs="659K" 
            description="Learn react js for like 10 minutes"
            timestamp="59 seconds ago"
            channel="Okendi Gjepali"
            title="Lets learn React Js together"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />  
        </div>
    )

}


export default SearchPage