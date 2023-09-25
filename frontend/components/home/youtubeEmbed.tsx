import React from 'react';

interface Props {
  ytEmbed: string;
  className: string;
}

const YoutubeEmbed = ({ ytEmbed, className }: Props) => {
  return (
    <div className={className}>
      <iframe
        className="aspect-video"
        height="100%"
        width="100%"
        src={ytEmbed}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
