import { VideoPlayerProps } from "@/utils/interface"

const VideoPlayer = ({ videoUrl, thumbnailUrl } : VideoPlayerProps) => {
    return (
        <div className="w-full">
            <video 
                className="w-full h-full rounded-xl"
                src={videoUrl} 
                poster={thumbnailUrl} 
                autoPlay 
                controls
            >     
            </video>
        </div>
    )
}

export default VideoPlayer