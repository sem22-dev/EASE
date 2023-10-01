"use client"

import WatchingAsBar from "../livekit/channel/WatchingAsBar";
import StreamPlayer from "../livekit/channel/StreamPlayer";
import Sidebar from "../livekit/channel/Sidebar";

export default function Testing(){
    return(
        <div>
            <WatchingAsBar viewerName="hello" />
            <StreamPlayer  />
            <Sidebar />
        </div>
    )
}