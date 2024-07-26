import CharacterDetails from '@/components/CharacterDetails';
import CharacterEvents from '@/components/CharacterEvents';
import Header from '@/components/Header';

export default function Character() {
  return (
    <article className="min-h-screen w-screen bg-background">
      <Header />
      <CharacterDetails />
      <CharacterEvents />
    </article>
  );
}
