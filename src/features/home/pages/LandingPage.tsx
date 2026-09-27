import { LandingFooter } from "@/features/home/components/LandingFooter";
import { LandingHero } from "@/features/home/components/LandingHero";
import { LandingNav } from "@/features/home/components/LandingNav";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="landing-page">
      <LandingNav />
      <LandingHero />
      <section className="landing-public-invite" aria-labelledby="landing-public-title">
        <div>
          <span className="landing-public-kicker">UM OLHAR PARA FORA DO SEU ESPAÇO</span>
          <h2 id="landing-public-title">Ideias também ficam melhores quando circulam.</h2>
          <p>Conheça tarefas compartilhadas publicamente pela comunidade.</p>
        </div>
        <Link className="landing-public-link" href="/public">
          Explorar tarefas públicas
          <i className="bi bi-arrow-up-right" aria-hidden="true" />
        </Link>
      </section>
      <LandingFooter />
    </main>
  );
}