'use client';

import { YoutubePlayerProps } from "@/types/types";
import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = (props: YoutubePlayerProps) => {
  const {
    videoId,
    id,
    className = "",
    iframeClassName,
    style,
    title,
    opts,
    onReady,
    onPlay,
    onPause,
    onEnd,
    onError,
    onStateChange,
    onPlaybackRateChange,
    onPlaybackQualityChange,
  } = props;

  return (
    
      <YouTube
        videoId={videoId}
        id={id}
        className={`${className}`}
        iframeClassName={iframeClassName}
        style={style}
        title={title}
        opts={opts}
        onReady={onReady}
        onPlay={onPlay}
        onPause={onPause}
        onEnd={onEnd}
        onError={onError}
        onStateChange={onStateChange}
        onPlaybackRateChange={onPlaybackRateChange}
        onPlaybackQualityChange={onPlaybackQualityChange}
      />
    
  );
};

export default YoutubePlayer;
