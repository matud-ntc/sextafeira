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



<div className="flex flex-col lg:flex-row gap-4">
  {/* Video */}
  <div className="w-full lg:flex-1">
    <div className="h-[220px] xs:h-[280px] sm:h-[350px] md:h-[400px] lg:h-[600px]">
      <TwitchEmbedPlayer />
    </div>
  </div>
  {/* Chat */}
  <div className="w-full lg:w-[350px]">
    <div className="h-[320px] xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
      <TwitchChatEmbed />
    </div>
  </div>
</div>


        {/* TikTok */}


        {/* Playlists */}
                <PlaylistsSection playlists={playlists} />

      </div>
    </main>
  );
}
