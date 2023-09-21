import React from 'react';

interface Props {
  embedId: string;
  className: string;
}

const YoutubeEmbed = ({ embedId, className }: Props) => {
  return (
    <div className={className}>
      <iframe
        className="aspect-video"
        height="100%"
        width="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
