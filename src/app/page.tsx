import { prisma } from '@/lib/prisma';
import PlaylistsSection from '@/components/PlaylistsSection';
import TwitchEmbedPlayer from '@/components/TwitchEmbedPlayer';
import TwitchChatEmbed from '@/components/TwitchChatEmbed';
export default async function HomePage() {
  const playlists = await prisma.playlist.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="min-h-screen px-6 py-12 flex flex-col items-center">
      <div className="w-full max-w-6xl xl:max-w-[1200px] space-y-10 z-10">
        {/* Reproductor + chat */}



<div className="flex flex-col lg:flex-row gap-4 h-[600px]">
  <div className="flex-1">
    <TwitchEmbedPlayer />
  </div>
  <div className="w-full lg:w-[350px] h-full">
    <TwitchChatEmbed />
  </div>
</div>


        {/* TikTok */}


        {/* Playlists */}
                <PlaylistsSection playlists={playlists} />

      </div>
    </main>
  );
}
