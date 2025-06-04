import React from 'react'

const VideoSection = () => {
  return (
    <div>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-3xl">
            <source src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2F1f879747f3c14418917a193e0f9b2de8%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&token=1f879747f3c14418917a193e0f9b2de8&alt=media&optimized=true"
             type="video/mp4"
            />
        </video>
    </div>
  )
}

export default VideoSection