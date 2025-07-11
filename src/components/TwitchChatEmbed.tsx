'use client';

import { useEffect, useState } from 'react';

export default function TwitchChatEmbed() {
  const [chatSrc, setChatSrc] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const parent = window.location.hostname;
      setChatSrc(`https://www.twitch.tv/embed/telemetaverso/chat?parent=${parent}`);
    }
  }, []);

  if (!chatSrc) return null;

  return (
    <iframe
      src={chatSrc}
      className="w-full h-full rounded-lg"
      frameBorder="0"
      scrolling="no"
    />
  );
}
