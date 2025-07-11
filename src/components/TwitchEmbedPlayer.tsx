'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Twitch: any;
  }
}

export default function TwitchEmbedPlayer() {
  const embedRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!embedRef.current || typeof window === 'undefined') return;

    const script = document.createElement('script');
    script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
    script.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!loaded || !window.Twitch || !embedRef.current) return;

    new window.Twitch.Embed(embedRef.current.id, {
      width: '100%',
      height: 480,
      channel: 'telemetaverso',
      layout: 'video',
      autoplay: true,
      parent: [window.location.hostname],
    });
  }, [loaded]);

  return <div id="twitch-embed" ref={embedRef} className="w-full rounded-lg overflow-hidden" />;
}
