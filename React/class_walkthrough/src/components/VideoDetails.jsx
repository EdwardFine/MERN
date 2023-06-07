import React, { useState } from 'react'

const VideoDetails = (props) => {
    const { title, hashtags } = props;
    const [likes, setLikes] = useState(0);
    const [views, setViews] = useState(props.views)
  return (
    <div>
        <fieldset>
            <legend><h1>Video Details</h1></legend>
            <h2>{title}</h2>
            <h3>Views: {views}</h3>
            <button onClick={() => setViews(views+1)}>Add View</button>
            {hashtags.map((tag, i) => <div key={i}><h4>#{tag}</h4></div>)}
            <button onClick={()=>setLikes(likes + 1)}>Likes: {likes}</button>
        </fieldset>
    </div>
  )
}

export default VideoDetails