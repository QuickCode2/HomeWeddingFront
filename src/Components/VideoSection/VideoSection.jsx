import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa"; 
import "../../../Style/VideoSection.css"

const VideoSection = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="video-section">
      <div className="video-wrapper" onClick={togglePlayPause}>
        <video ref={videoRef} autoPlay loop muted={muted}>
            <source
              src="https://res.cloudinary.com/dwhfz2vhx/video/upload/v1781249054/Video_Project_1_2_yoigzs.mp4"
              type="video/mp4"
            />
        </video>

        <div className="volume-btn" onClick={toggleMute}>
          {muted ? (
            <FaVolumeMute />
          ) : (
            <FaVolumeUp />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
