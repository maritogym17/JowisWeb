import { createFileRoute, Link } from "@tanstack/react-router";
import { MenuQRCode } from "./carta";
import heroBurger from "@/assets/hero-burger.jpg";
import fries from "@/assets/fries.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import nachos from "@/assets/nachos.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const menu = [
  {
    name: "La Jowi's",
    kicker: "Firma de la casa",
    price: "13,50 €",
    desc: "Doble smash de vaca madurada, cheddar fundido, cebolla caramelizada, pepinillo encurtido y nuestra salsa Jowi's — la razón por la que vuelven.",
    img: heroBurger,
  },
  {
    name: "Zeus",
    kicker: "Solo carne, sin excusas",
    price: "14,90 €",
    desc: "180 g de carne premium al punto, un pan brioche tostado en mantequilla y una pizca de sal marina. Puro producto.",
    img: null,
  },
  {
    name: "Jowi's Fries",
    kicker: "Guarnición estrella",
    price: "5,90 €",
    desc: "Patata cortada a mano, doble fritura, escamas de sal Maldon y una nube de queso curado rallado al momento.",
    img: fries,
  },
  {
    name: "Nachos de la casa",
    kicker: "Para compartir",
    price: "8,50 €",
    desc: "Totopos crujientes, cheddar fundido, carne desmenuzada, jalapeño fresco y salsa brava. La entrada que nunca sobra.",
    img: nachos,
  },
  {
    name: "Tarta de queso",
    kicker: "Postre obligatorio",
    price: "5,50 €",
    desc: "Cremosa por dentro, doradita por fuera, con coulis de frutos rojos. La reseña más repetida de la casa.",
    img: cheesecake,
  },
];

const reviews = [
  {
    quote:
      "De las mejores hamburguesas que he probado nunca. Se echaba en falta un sitio así por la zona. Pedí la Zeus y solo con el sabor de la carne ya se percibe la calidad.",
    author: "Curro Mármol",
    tag: "Hace un mes",
  },
  {
    quote:
      "Espectacular. Vimos este sitio por Instagram y teníamos que probarlo. Carta variada con platos que llaman mucho la atención, dan ganas de pedirlos todos.",
    author: "Marta MM",
    tag: "Local Guide",
  },
  {
    quote:
      "La comida está muy rica, se nota que los ingredientes son de buena calidad, las camareras son muy agradables. Lo recomiendo un montón.",
    author: "Ana Jiménez",
    tag: "Hace 3 semanas",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/34645457943?text=Hola%2C%20quer%C3%ADa%20reservar%20mesa%20en%20Jowi%27s"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar mesa por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
          <path d="M16.004 0C7.164 0 0 7.163 0 16c0 2.822.741 5.577 2.149 8.008L0 32l8.2-2.15A15.94 15.94 0 0 0 16.004 32C24.838 32 32 24.837 32 16S24.838 0 16.004 0zm0 29.29c-2.58 0-5.106-.694-7.31-2.007l-.523-.31-4.868 1.277 1.3-4.744-.34-.487A13.24 13.24 0 0 1 2.71 16c0-7.334 5.965-13.29 13.294-13.29 7.328 0 13.29 5.956 13.29 13.29 0 7.333-5.962 13.29-13.29 13.29zm7.29-9.953c-.4-.2-2.366-1.167-2.732-1.3-.366-.134-.633-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.466.3-.866.1-.4-.2-1.69-.623-3.22-1.987-1.19-1.06-1.994-2.37-2.227-2.77-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.234.266-.4.4-.667.133-.267.066-.5-.034-.7-.1-.2-.9-2.166-1.233-2.966-.325-.78-.655-.675-.9-.687-.233-.01-.5-.013-.766-.013-.267 0-.7.1-1.067.5-.366.4-1.4 1.367-1.4 3.333s1.434 3.867 1.634 4.133c.2.267 2.82 4.307 6.834 6.04.955.412 1.7.658 2.28.842.958.305 1.83.262 2.52.159.769-.115 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.166-.366-.266-.766-.466z"/>
        </svg>
      </a>

      {/* Masthead */}
      <header className="mx-auto max-w-[1400px] px-6 pt-6 pb-3 md:flex md:items-center md:justify-between md:px-12 md:pt-8 md:pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl tracking-tight md:text-3xl">Jowi's</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:inline">
              Est. Murcia
            </span>
          </div>
          <a
            href="tel:+34645457943"
            aria-label="Llamar a Jowi's"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/80 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
            </svg>
          </a>
        </div>

        <nav className="-mx-6 mt-3 flex gap-6 overflow-x-auto px-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:mx-0 md:mt-0 md:gap-8 md:overflow-visible md:px-0">
          <Link to="/carta" className="shrink-0 hover:text-foreground">Carta completa</Link>
          <a href="#resenas" className="shrink-0 hover:text-foreground">Reseñas</a>
          <a href="#visita" className="shrink-0 hover:text-foreground">Visita</a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://wa.me/34645457943?text=Hola%2C%20quer%C3%ADa%20reservar%20mesa%20en%20Jowi%27s"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-[#25D366] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-foreground"
          >
            Reservar · WhatsApp
          </a>
          <a
            href="tel:+34645457943"
            className="rounded-sm border border-foreground/80 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
          >
            645 45 79 43
          </a>
        </div>
      </header>

      {/* Issue banner */}
      <div className="mx-auto max-w-[1400px] rule-t rule-b px-6 py-2 md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>Vol. I · No. 04 — La edición de la hamburguesa</span>
          <span>Santiago y Zaraíche · Murcia</span>
          <span>Domingo, 5 Julio 2026</span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 pt-10 pb-20 md:px-12 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
              — La portada —
            </p>
            <h1 className="mt-6 font-display text-[3.25rem] leading-[0.95] tracking-[-0.03em] md:text-[6.5rem]">
              Hamburguesas
              <br />
              <em className="italic text-ember">elaboradas</em>
              <br />
              con amor.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
              Un pequeño local en Santiago y Zaraíche donde la carne se
              trata con respeto, el pan se tuesta al momento y las patatas
              se cortan a mano cada mañana. Sin atajos. Sin ruido.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/carta"
                className="rounded-sm bg-foreground px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition-colors hover:bg-ember"
              >
                Ver la carta completa
              </Link>
              <a
                href="https://www.google.com/maps/place/Jowi%E2%80%99s/@38.00364,-1.1286799,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.2em] underline decoration-ember decoration-2 underline-offset-8 hover:text-ember"
              >
                Cómo llegar →
              </a>
            </div>
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 rule-t pt-8">
              <Stat label="Google" value="4,8★" note="58 reseñas" />
              <Stat label="Ticket" value="10-20€" note="por persona" />
              <Stat label="Horario" value="Cerrado" note="Abre mar. 20:00" />
            </div>
          </div>

          <figure className="relative md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-ink">
              <img
                src={heroBurger}
                alt="La Jowi's, la hamburguesa firma de la casa"
                width={1600}
                height={1920}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Fig. 01 — La Jowi's, doble smash · fotografía de la casa
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Editorial pull-quote */}
      <section className="rule-t rule-b bg-secondary/40">
        <div className="mx-auto max-w-[1100px] px-6 py-20 text-center md:px-12 md:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
            La reseña
          </p>
          <blockquote className="mt-8 font-display text-3xl leading-tight md:text-5xl">
            <span className="text-ember">“</span>
            Las hamburguesas súper ricas, bien elaboradas, hechas con amor.
            <span className="text-ember">”</span>
          </blockquote>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            — Cliente verificado · Google Reviews
          </p>
        </div>
      </section>

      {/* Menu / Carta */}
      <section id="carta" className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
              — Sección II —
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">
              La carta,
              <br />
              <em className="italic">breve</em> y honesta.
            </h2>
            <p className="mt-6 max-w-sm text-foreground/70">
              Pocos platos, todos con firma. Cambiamos algún detalle según
              temporada, pero lo esencial permanece.
            </p>
          </div>

          <div className="md:col-span-8">
            <ol className="rule-t">
              {menu.map((item, i) => (
                <li
                  key={item.name}
                  className="rule-b grid grid-cols-12 gap-4 py-8 md:gap-8 md:py-10"
                >
                  <span className="col-span-1 font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-11 md:col-span-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">
                      {item.kicker}
                    </p>
                    <h3 className="mt-2 font-display text-3xl md:text-4xl">
                      {item.name}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/75 md:text-base">
                      {item.desc}
                    </p>
                  </div>
                  <div className="col-span-6 hidden md:col-span-4 md:block">
                    {item.img && (
                      <div className="aspect-[4/3] overflow-hidden bg-ink">
                        <img
                          src={item.img}
                          alt={item.name}
                          width={1200}
                          height={900}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                  <span className="col-span-12 text-right font-display text-2xl md:col-span-1 md:text-3xl">
                    {item.price}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Feature / interior */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <img
              src={interior}
              alt="Interior de Jowi's, iluminación cálida y ambiente artesano"
              width={1600}
              height={1100}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
              — Reportaje —
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-cream md:text-6xl">
              Un rincón pequeño,
              <br />
              <em className="italic">una obsesión</em>
              <br />
              grande.
            </h2>
            <p className="drop-cap mt-8 max-w-md text-base leading-relaxed text-cream/80">
              Nacimos con una idea sencilla: hacer la hamburguesa que nos
              gustaría comer a nosotros. Compramos la carne al carnicero de
              siempre, horneamos el pan cada tarde y tratamos las patatas
              como si fueran el plato principal. Después abrimos las
              puertas, encendemos las lámparas y esperamos.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/20 pt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-cream/60">
              <div>
                <p className="text-cream">Producto</p>
                <p className="mt-1">Km 0</p>
              </div>
              <div>
                <p className="text-cream">Pan</p>
                <p className="mt-1">Brioche del día</p>
              </div>
              <div>
                <p className="text-cream">Servicio</p>
                <p className="mt-1">A la mesa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews column */}
      <section id="resenas" className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
              — Sección III —
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">
              Lo que dicen
              <br />
              <em className="italic">de nosotros</em>.
            </h2>
          </div>
          <div className="text-right">
            <p className="font-display text-6xl leading-none">4,8<span className="text-ember">★</span></p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              58 reseñas · Google
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {reviews.map((r, i) => (
            <article key={r.author} className="rule-t pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">
                Nº 0{i + 1}
              </p>
              <p className="mt-6 font-display text-2xl leading-snug">
                “{r.quote}”
              </p>
              <footer className="mt-8 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-foreground">— {r.author}</span>
                <span>{r.tag}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* QR to full menu */}
      <section className="rule-t">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
                — Suplemento —
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-6xl">
                Escanea y explora
                <br />
                <em className="italic">la carta completa</em>.
              </h2>
              <p className="mt-6 max-w-lg text-foreground/75">
                Apunta con la cámara del móvil al código para abrir la carta
                íntegra: smash burgers, especiales con chuletón, entrantes,
                bebidas y combos, todo con foto y precio.
              </p>
              <div className="mt-8">
                <Link
                  to="/carta"
                  className="rounded-sm border border-foreground px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
                >
                  Abrir carta →
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:col-span-5 md:justify-end">
              <MenuQRCode />
            </div>
          </div>
        </div>
      </section>

      {/* Visit / footer block */}
      <section id="visita" className="rule-t bg-secondary/40">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
                — Contraportada —
              </p>
              <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">
                Te esperamos.
              </h2>
              <p className="mt-6 max-w-sm text-foreground/75">
                Reserva llamando o pásate sin cita. Somos pocas mesas, así
                que llegar temprano ayuda.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/34645457943?text=Hola%2C%20quer%C3%ADa%20reservar%20mesa%20en%20Jowi%27s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm bg-[#25D366] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-foreground"
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="tel:+34645457943"
                  className="rounded-sm bg-ember px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ember-foreground transition-colors hover:bg-foreground"
                >
                  Llamar · 645 45 79 43
                </a>
                <a
                  href="https://www.google.com/maps/place/Jowi%E2%80%99s/@38.00364,-1.1286799,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm border border-foreground px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
                >
                  Cómo llegar
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
              <InfoBlock
                label="Dirección"
                lines={["Av. Don Juan de Borbón, 41", "30007 Santiago y Zaraíche", "Murcia"]}
              />
              <InfoBlock
                label="Horario"
                lines={[
                  "Lun — cerrado",
                  "Mar – Jue · 20:00 — 23:30",
                  "Vie – Sáb · 13:30 — 16:00",
                  "y 20:00 — 24:00",
                  "Dom · 13:30 — 16:00",
                ]}
              />
              <InfoBlock
                label="Precio medio"
                lines={["10 — 20 € por persona", "Efectivo y tarjeta", "Pide en línea"]}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="rule-t">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:px-12">
          <span>© 2026 Jowi's · Hamburguesería</span>
          <span>Hecho con amor en Murcia</span>
          <span>Vol. I · No. 04</span>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl">{value}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {note}
      </p>
    </div>
  );
}

function InfoBlock({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">
        {label}
      </p>
      <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
