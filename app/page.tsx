import { LinkSite } from "@/components/LinkSite";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto lg:py-10 max-lg:p-4">
      <div className="flex flex-col space-y-3.5">
        <LinkSite href="https://rentry.org/Piracy-BG" text="FMHY" />
        <LinkSite
          href="https://rutracker.org/forum/index.php"
          text="RuTracker"
        />
        <LinkSite href="https://fboxz.to/home" text="Movies" />
        <LinkSite href="https://www.braflix.ru/" text="Movies 2" />
        <LinkSite href="https://mangareader.to/home" text="Manga" />
        <LinkSite href="https://asianc.sh/" text="KR-JP" />
        <LinkSite href="https://hianime.to/home" text="Anime" />

        <div>X</div>
        <LinkSite
          href="https://www.91porn.com/view_video.php?viewkey=5b024127dc762223b545&page=1&c=mcztl&viewtype=basic&category=mr"
          text="Smoking Korean"
        />
      </div>
    </main>
  );
}
