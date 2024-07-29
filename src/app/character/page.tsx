import CharacterDetails from '@/components/CharacterDetails';
import CharacterLists from '@/components/CharacterLists';
import Header from '@/components/Header';

export default function Character() {
  return (
    <article className="min-h-screen w-full bg-background">
      <Header />
      <CharacterDetails />
      <main className="flex flex-col gap-6">
        <CharacterLists typeOfList={'comics'} />
        <CharacterLists typeOfList={'events'} />
        <CharacterLists typeOfList={'series'} />
      </main>
    </article>
  );
}
