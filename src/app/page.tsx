import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Hero com imagem ao lado direito */}
      <section className="bg-[#0b0b0f] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
          {/* Coluna texto (esquerda) */}
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-white shadow-sm backdrop-blur">
                <span className="text-lg font-extrabold tracking-wide sm:text-xl lg:text-2xl">14flix</span>
                <span className="h-1 w-6 rounded-full bg-[var(--color-accent)]"></span>
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">CONTEÚDO DE QUALIDADE,</span>
              <span className="mt-2 inline-block bg-[var(--color-accent)] px-2 py-1 text-white">UM PREÇO QUE CABE</span>
              <span className="mt-2 block">NO SEU BOLSO!</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-zinc-200 sm:text-lg">
              Mais de 2000 canais por um preço que cabe no seu bolso! Com o 14flix, toda a sua diversão está em um só lugar.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#planos"
                className="btn-primary"
              >
                QUERO ASSINAR AGORA!
              </a>
            </div>
          </div>

          {/* Coluna imagem (direita) */}
          <div className="relative h-64 w-full sm:h-80 lg:h-[420px]">
            <Image
              src="/reiflick/baner.png"
              alt="Dispositivos 14flix"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Métricas em faixa (logo abaixo do hero) */}
      <section className="bg-[var(--color-accent)] py-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 text-white sm:grid-cols-3">
          <div className="text-center">
            <p className="text-2xl font-extrabold leading-none">+10000</p>
            <p className="text-xs uppercase tracking-wide text-white/90">Canais</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold leading-none">+40000</p>
            <p className="text-xs uppercase tracking-wide text-white/90">Filmes & Séries</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold leading-none">+7000</p>
            <p className="text-xs uppercase tracking-wide text-white/90">Conteúdos</p>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="mx-auto max-w-6xl px-6 py-16 bg-[#0b0b0f]">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl text-white">
          Escolha seu plano e assine já!
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-center max-w-5xl mx-auto">
          {/* Plano 1 mês */}
          <PlanCard
            title="PLANO 1 MÊS"
            discount="40% DE DESCONTO"
            from="R$ 24,90"
            price="R$ 19,90"
            href="https://pay.cakto.com.br/32p84dy_746167"
          />
          {/* Plano 3 meses */}
          <PlanCard
            title="PLANO 3 MESES"
            discount="40% DE DESCONTO"
            from="R$ 59,70"
            price="R$ 39,90"
            href="https://pay.cakto.com.br/3fdg55r_746093"
          />
          {/* Plano 6 meses */}
          <PlanCard
            title="PLANO 6 MESES"
            discount="40% DE DESCONTO"
            from="R$ 119,40"
            price="R$ 69,90"
            href="https://pay.cakto.com.br/zoqg8wr_746150"
          />
          {/* Plano 1 ano */}
          <PlanCard
            title="PLANO 1 ANO"
            discount="46% DE DESCONTO"
            from="R$ 238,80"
            price="R$ 129,90"
            href="https://pay.cakto.com.br/3civz34_746157"
          />
        </div>
        <p className="mt-6 text-center text-sm text-zinc-300">
          Completo • Sem fidelidade • 3 telas simultâneas • + de 40 mil conteúdos • Canais Adultos (opcional) • SD/HD/FHD/4K • Smart TV, Smartphone, TV Box e PC
        </p>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-[#0b0b0f]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl text-white">
            Confira tudo o que você vai encontrar na plataforma
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="Disponível em Todos os Dispositivos"
              description="Disponível em Smart TVs, celulares, tablets, PCs e TV Box. Instalação fácil e rápida para você curtir filmes, séries e canais ao vivo sem complicação."
              imageSrc="/reiflick/DisponívelemTodososDispositivo.png"
            />
            <Feature
              title="Filmes e Séries imperdíveis"
              description="Acompanhe suas séries favoritas e encontre novas paixões. Temporadas completas e episódios atualizados para maratonar."
              imageSrc="/reiflick/filmes.png"
            />
            <Feature
              title="Esportes ao vivo"
              description="Não perca um só lance! Assista a eventos esportivos ao vivo, incluindo futebol, basquete, e muito mais, diretamente na sua TV."
              imageSrc="/reiflick/esporte.png"
            />
            <Feature
              title="Canais adultos em HD"
              description="Conteúdo exclusivo para adultos com alta qualidade de imagem e variedade. Aproveite a programação completa e segura."
              imageSrc="/reiflick/canaisadultos.png"
            />
            <Feature
              title="Canais infantis"
              description="Diversão garantida para as crianças com canais dedicados, desenhos, filmes e programação educativa para todas as idades."
              imageSrc="/reiflick/canaisinfatis.png"
            />
            <Feature
              title="Os melhores animes"
              description="Para os fãs de anime, uma seleção de títulos populares e novidades. Episódios atualizados e qualidade HD para você maratonar."
              imageSrc="/reiflick/anime.png"
            />
          </div>
          <div className="mt-10 text-center">
            <a href="#planos" className="btn-primary">QUERO ASSINAR AGORA!</a>
          </div>
        </div>
      </section>

      {/* Garantia (faixa vermelha) */}
      <section className="py-16 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-4">
            {/* Imagem 7 dias */}
            <div className="flex items-center justify-start">
              <Image
                src="/reiflick/garantia.webp"
                alt="7 dias de garantia"
                width={120}
                height={120}
                className="h-20 w-auto sm:h-24 lg:h-28"
                priority={false}
              />
            </div>
            {/* Texto + CTA abaixo */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-white">
                Você não corre nenhum risco!
              </h2>
              <p className="mt-4 text-base text-white/90">
                É simples: ou você fica feliz com o conteúdo, ou recebe 100% do seu dinheiro de volta. Dentro de 7 dias, se decidir não continuar, basta nos contatar e faremos o reembolso sem burocracia.
              </p>
              <div className="mt-6">
                <a href="#planos" className="btn-black">QUERO ASSINAR AGORA!</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlanCard({
  title,
  discount,
  from,
  price,
  href,
}: {
  title: string;
  discount: string;
  from: string;
  price: string;
  href: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-xl border-2 border-[var(--color-accent)]/60 bg-[var(--color-card)] shadow-md overflow-hidden w-full max-w-[280px] mx-auto">
      {/* Cabeçalho vermelho */}
      <div className="bg-[var(--color-accent)] px-4 py-3">
        <h3 className="text-sm font-semibold text-white tracking-wide text-center">{title}</h3>
      </div>
      <div className="p-5">
        <ul className="space-y-1 text-sm text-zinc-300">
          <li>Completo</li>
          <li>Sem fidelidade</li>
          <li>Assista em 3 telas simultâneas</li>
          <li>+ de 40 mil conteúdos</li>
          <li>Canais Adultos (opcional)</li>
          <li>Qualidade SD/HD/FHD/4K</li>
          <li>Smart TV, Smartphone, TV Box e PC</li>
        </ul>
        <p className="mt-4 text-xs font-semibold text-emerald-400 text-center">{discount}</p>
        <p className="mt-1 text-xs text-zinc-400 text-center">De {from} por apenas:</p>
        <p className="mt-1 text-3xl font-extrabold text-white text-center">{price}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="m-4 btn-primary"
      >
        QUERO ASSINAR AGORA!
      </a>
    </div>
  );
}

function Feature({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-[var(--color-accent)]/50 bg-[#111114] shadow-sm">
      <div className="relative aspect-[3/4]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="p-6">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{description}</p>
      </div>
    </div>
  );
}
