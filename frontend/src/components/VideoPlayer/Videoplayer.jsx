import React from 'react'
import video from "../../assets/cryptoVideo.mp4";
import  "./Videoplayer.css";
const Videoplayer = () => {
  return (
    <div><div class="adhd-top-video">
    <div class="adhd-top-video2">
    <video 
  width="500" 
  height="280" 
  autoPlay 
  muted 
  controls={false} 
  src={video}>
</video>

        <iframe  src="" frameborder="0" allowfullscreen></iframe>
   </div>
</div></div>
  )
}

export default Videoplayer