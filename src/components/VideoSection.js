import React from 'react';
import './VideoSection.css'
function VideoSection() {
  return (
    <div class="video-section">
      <iframe 
        width="550px"
        height="450px"
        border-radius="15px"
        src="https://www.youtube.com/embed/V22nnVXI6jI" 
        title="YouTube video" 
        frameBorder="0" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoSection;