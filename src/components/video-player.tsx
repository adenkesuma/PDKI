import { VideoPlayerProps } from "@/utils/interface"

const VideoPlayer = ({ video_url, thumbnail_url } : VideoPlayerProps) => {
    return (
        <div className="w-full">
            <video 
                className="w-full h-full rounded-xl"
                src={video_url} 
                poster={thumbnail_url} 
                autoPlay 
                controls
            >     
            </video>
        </div>
    )
}

export default VideoPlayer