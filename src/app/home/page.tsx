import Header from '@/components/Header';
import SearchCharacter from '@/components/SearchCharacter';
import MarvelCharacters from '@/components/MarvelCharacters';
import FooterPagination from '@/components/FooterPagination';

export default async function Home() {
  return (
    <article className="min-h-screen w-full  bg-background">
      <Header />
      <SearchCharacter />
      <MarvelCharacters />
      <FooterPagination />
    </article>
  );
}
