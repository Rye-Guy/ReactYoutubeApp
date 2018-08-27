import React from 'react';

const VideoListItem = ({video}) =>{
    console.log(video);
    return (
        <li>
            <div className="list-group-item">
                <div className="video-list media">
                  <div className="media-left">
                      <img className="media-object" src={video.snippet.thumbnails.default.url}></img>
                </div>
                 <div className="media-body">{video.snippet.description}
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
                 </div>
            </div>
        </li>
    );
};

export default VideoListItem;