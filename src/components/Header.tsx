'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../public/logo-neuralmed.svg';

export default function Header() {
  const router = useRouter();

  return (
    <header className="w-full flex items-center justify-between px-9 py-3 text-white border-b border-b-neural-blue">
      <section
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => router.push('/home')}
      >
        <Image src={Logo} alt="Logo da empresa NeuralMed" width={28} height={32} />
        <strong>
          Neural
          <span className="text-neural-blue">Med</span>
        </strong>
      </section>
      <section className="flex gap-2 font-inter">
        <div className="flex flex-col">
          <strong className="text-base font-semibold leading-6">Usuário Teste</strong>
          <span className="text-xs font-normal leading-4 text-muted-foreground">
            Teste de Front-End
          </span>
        </div>
        <div className="w-10 h-10 bg-neural-blue rounded-full flex items-center justify-center">
          <strong>UT</strong>
        </div>
      </section>
    </header>
  );
}
