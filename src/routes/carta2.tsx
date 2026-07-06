import { createFileRoute, Link } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/carta")({
  component: Carta,
  head: () => ({
    meta: [
      { title: "Carta — Jowi's · Hamburguesería en Murcia" },
      {
        name: "description",
        content:
          "Carta completa de Jowi's: smash burgers, entrantes, especiales sin gluten y veganos, bebidas y combos. Ver precios y fotos.",
      },
      { property: "og:title", content: "Carta — Jowi's" },
      {
        property: "og:description",
        content:
          "Toda la carta de Jowi's con fotos y precios: Zeus, Hermes, Vulcano, Jowi's Fries y mucho más.",
      },
    ],
  }),
});

type Item = {
  name: string;
  price: string;
  desc?: string;
  img: string;
  oldPrice?: string;
  badge?: string;
};
type Section = { title: string; kicker: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Shared By The Gods",
    kicker: "Para compartir",
    items: [
      {
        name: "Elysium Nachos",
        price: "15,00 €",
        desc: "Totopos caseros, guacamole, crema agria, pico de gallo, jalapeños, cheddar y pulled pork.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/406a153b064a9cceb6754a11ea3abcf1ea57d578fddf3f9c1edb89514e481d95?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Jowi's Fries",
        price: "14,50 €",
        desc: "Patatas fritas con queso fundido, pulled pork, bacon bits y salsa jowi's.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/8a794cdb0727a029b777332ce45f98a9edf625e54d335ff6994633586268b5e6?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Inferno Fries",
        price: "12,90 €",
        desc: "Patatas fritas con bacon bits y queso fundido al horno.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/02ce9c6614b9586bdcf2d48414008961b14c7604aa4dbe274393c5c20b3984e2?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Paradise Fries",
        price: "12,50 €",
        desc: "Patatas fritas con cebolla ligeramente caramelizada, cheddar fundido y salsa jowi's.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/25222493b850118cd601fb00c10bfd0c41bf58dbd6422cb262860e78e0192bf0?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Tequeños Aurora (5 uds.)",
        price: "9,00 €",
        desc: "Tequeños de masa de harina de trigo frita rellenos de queso.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/80acc3ee7a8dbde3da6ea69884cccde51845027d94c15caa923cdcfccb2a31de?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Alitas Cerberus (5 uds.)",
        price: "9,00 €",
        desc: "Crujientes alitas de pollo bañadas en salsa barbacoa.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/f79dfccc936122a4aeea5444f399422f8d4c4c3b96c4c53ba5978cc817d36f0c?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
    ],
  },
  {
    title: "Before Heaven",
    kicker: "Croquetas de la casa",
    items: [
      {
        name: "Croqueta Titán (1 ud.)",
        price: "3,90 €",
        desc: "Croqueta de chuletón.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/3c0fef1833988e1b90efc856964aa924f11cd6de3e89bc01d15d14db9e81b8a2?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Croqueta Golden (1 ud.)",
        price: "3,50 €",
        desc: "Croqueta de jamón.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/b8573baecae7aa645fca8cf46168b4f9da8490c168cff05004be8867ae271352?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
    ],
  },
  {
    title: "Smash Burger",
    kicker: "Doble smash, doble carácter",
    items: [
      {
        name: "Vulcano",
        price: "16,90 €",
        desc: "Pan potato, pulled pork, cheddar, gouda y salsa bbq ahumada. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/65128d9d8195c14debc5dd2cbe68154f08df9897c78823f0a467ea86ac9e6ce8?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Zeus",
        price: "15,90 €",
        desc: "Pan brioche, doble smash, doble cheddar, bacon crujiente y salsa jowi's. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/c1bff7367b6497dd74fba262e07c335353aa6cce8374e4e530157c36a8d60560?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
        badge: "Más vendida",
      },
      {
        name: "Hermes",
        price: "15,90 €",
        desc: "Pan brioche, doble smash, cheddar, pepinillos, crispy onion y salsa jowi's. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/877b2eedef72496692513afd3963955a42872d6507fc675afd66f6fb3db33b79?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Hades",
        price: "15,90 €",
        desc: "Pan potato, doble smash, cheddar, mozzarella y salsa secreta de bacon miel con toque picante. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/69760e2735ee900484c8731111a31c22b8663e0d8ef74d9683e4c364b92f6cdd?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Ares",
        price: "15,90 €",
        desc: "Pan brioche, doble smash, cheddar gouda, pico de gallo, jalapeños y mayo de ajo asado. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/d9b6b421de8249c4d19c357797f45c18f118c17775f830376ca058a8db05286c?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Apollo",
        price: "14,90 €",
        desc: "Pan brioche, doble smash con cebolla fina, cheddar y toque de mostaza. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/115ab46358c9477cca2fe25ec84ed0f3ea4b8bcd1b9ca481be193e82dc0258f6?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
    ],
  },
  {
    title: "Las Elegidas",
    kicker: "Chuletón y panes premium",
    items: [
      {
        name: "Olympus",
        price: "19,50 €",
        desc: "Pan Queens high, medallón de rubia gallega madurada, cheddar ahumado, bacon bits y salsa emmy. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/20e31d72ba55d9b73806bafb01e815f102ead474a53cca1d0ed987a6e5e2723c?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Jowi's",
        price: "17,90 €",
        desc: "Pan potato high, medallón de chuletón, mozzarella, mermelada de bacon y mayo trufada. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/global-menu-service/GV_ES/vendor/937602/product/42362777541/4c79d046-db53-4d19-b6bc-eb24d58733fa.jpg?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
        badge: "Firma de la casa",
      },
      {
        name: "Kronos",
        price: "17,90 €",
        desc: "Pan brioche high, medallón de chuletón, gouda, huevo frito y salsa ranch bacon. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/3aa6a1a281992267fee1c7a2f042bf1b3e4db0644ab3a89346c6075f57659bab?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Oblivion",
        price: "17,90 €",
        desc: "Pan brioche high, medallón de chuletón, doble cheddar, cebolla caramelizada y mayo de ajo negro. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/27fa63cfc7aa36618f4214da7040bf1b71e14eedd8ad68c5304cec2aebb2ec25?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
    ],
  },
  {
    title: "Especiales",
    kicker: "Sin gluten y vegana",
    items: [
      {
        name: "Athena (sin gluten)",
        price: "16,00 €",
        desc: "Pan sin gluten, carne de 180 g, cheddar, cebolla caramelizada y mayo de ajo asado. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/1fbf5b8d0f6c88adb2f2f45f21fd4831c8b00e49fd99c60951c61371685e7838?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Gaia (vegana)",
        price: "16,00 €",
        desc: "Pan veggie, burger veggie, lechuga fresca, tomate y queso vegano. Acompañada de patatas fritas.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/4c9814c7d759ac3c98676e3486c9fd05a2a2d3df91804413201938502f59a078?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
    ],
  },
  {
    title: "Bebida",
    kicker: "Refrescos",
    items: [
      {
        name: "Coca-Cola",
        price: "2,50 €",
        desc: "Refresco.",
        img: "https://glovo.dhmedia.io/image/global-menu-service/GV_ES/vendor/937602/product/531623b2-9903-4e46-bfa9-6d4f481357f7.jpg?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Aquarius limón",
        price: "2,60 €",
        desc: "Refresco de limón.",
        img: "https://glovo.dhmedia.io/image/global-menu-service/GV_ES/vendor/937602/product/b2f0e48d-b837-4bb6-8945-a50117238767.jpg?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
      {
        name: "Fuze Tea limón",
        price: "2,60 €",
        desc: "Refresco.",
        img: "https://glovo.dhmedia.io/image/global-menu-service/GV_ES/vendor/937602/product/76d0f8f6-6928-4f8f-a88f-ab9b0a1f5712.jpg?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
    ],
  },
  {
    title: "Combo",
    kicker: "Menú completo",
    items: [
      {
        name: "Combo Zeus",
        price: "15,30 €",
        oldPrice: "18,00 €",
        badge: "-15%",
        desc: "Hamburguesa Zeus clásica, patatas y bebida a elegir entre Fanta y Coca-Cola.",
        img: "https://glovo.dhmedia.io/image/menus-glovo/products/84b9fbdad1cb258dfdfaa8b9c414bdaee7aefcd49802a4d4bc6782cac979a707?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MH19LHsid2VicCI6e319XQ==",
      },
    ],
  },
];

function Carta() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 pt-8 pb-4 md:px-12">
        <Link to="/" className="flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight md:text-3xl">Jowi's</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:inline">
            Est. Murcia
          </span>
        </Link>
        <Link
          to="/"
          className="rounded-sm border border-foreground/80 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
        >
          ← Volver
        </Link>
      </header>

      <div className="mx-auto max-w-[1400px] rule-t rule-b px-6 py-2 md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>La carta · edición completa</span>
          <span>Precios en euros · IVA incluido</span>
          <span>Actualizada esta semana</span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-14 md:px-12 md:pt-24 md:pb-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
          — La carta —
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-[3rem] leading-[0.95] tracking-[-0.03em] md:text-[6rem]">
          Todo lo que
          <br />
          <em className="italic text-ember">cocinamos</em>,
          <br />
          en una página.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75 md:text-xl">
          Smash burgers de doble carne, especiales con chuletón, entrantes para
          compartir y postres caseros. Producto de calidad, sin atajos.
        </p>
      </section>

      {/* Sections */}
      {sections.map((section, sIdx) => (
        <section
          key={section.title}
          className={
            sIdx % 2 === 1
              ? "rule-t bg-secondary/40"
              : "rule-t"
          }
        >
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-24">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
                  Sección {String(sIdx + 1).padStart(2, "0")} · {section.kicker}
                </p>
                <h2 className="mt-3 font-display text-4xl leading-[0.95] md:text-6xl">
                  {section.title}
                </h2>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {section.items.length}{" "}
                {section.items.length === 1 ? "plato" : "platos"}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <article key={item.name} className="group flex flex-col">
                  <div className="relative aspect-square overflow-hidden bg-ink">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {item.badge && (
                      <span className="absolute top-3 left-3 rounded-sm bg-ember px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ember-foreground">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl leading-tight">
                      {item.name}
                    </h3>
                    <div className="text-right whitespace-nowrap">
                      {item.oldPrice && (
                        <span className="mr-2 font-mono text-xs text-muted-foreground line-through">
                          {item.oldPrice}
                        </span>
                      )}
                      <span className="font-display text-xl text-ember">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  {item.desc && (
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                      {item.desc}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="rule-t bg-ink text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
                — Reserva o pide —
              </p>
              <h2 className="mt-4 font-display text-5xl leading-[0.95] text-cream md:text-6xl">
                ¿Con hambre?
              </h2>
              <p className="mt-6 max-w-md text-cream/80">
                Llámanos para reservar mesa o pide a domicilio en Glovo. Cocinamos
                al momento, en el local o para llevar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+34645457943"
                  className="rounded-sm bg-ember px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ember-foreground transition-colors hover:bg-cream hover:text-ink"
                >
                  Llamar · 645 45 79 43
                </a>
                <a
                  href="https://glovoapp.com/es/es/murcia/stores/jowis-murcia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm border border-cream/60 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-cream hover:text-ink"
                >
                  Pedir en Glovo →
                </a>
              </div>
            </div>
            <div className="text-cream/60 md:text-right">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em]">Horario</p>
              <p className="mt-3 font-display text-2xl text-cream">
                Mar – Jue · 20:00 — 23:30
              </p>
              <p className="mt-1 font-display text-2xl text-cream">
                Vie – Sáb · 13:30 — 16:00 y 20:00 — 24:00
              </p>
              <p className="mt-1 font-display text-2xl text-cream">
                Dom · 13:30 — 16:00
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em]">
                Av. Don Juan de Borbón, 41 · Murcia
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="rule-t">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:px-12">
          <span>© 2026 Jowi's · Hamburguesería</span>
          <Link to="/" className="hover:text-foreground">← Inicio</Link>
          <span>Carta actualizada · Glovo</span>
        </div>
      </footer>
    </main>
  );
}

export function MenuQRCode({ compact = false }: { compact?: boolean }) {
  const [url, setUrl] = useState("https://jowis.lovable.app/carta");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}/carta`);
    }
  }, []);

  return (
    <div
      className={
        compact
          ? "flex items-center gap-4"
          : "flex flex-col items-center gap-4 text-center"
      }
    >
      <div className="rounded-sm bg-cream p-3 shadow-sm ring-1 ring-foreground/10">
        <QRCodeSVG
          value={url}
          size={compact ? 88 : 176}
          bgColor="transparent"
          fgColor="#1a1410"
          level="M"
        />
      </div>
      <div className={compact ? "" : "max-w-[220px]"}>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">
          Escanea la carta
        </p>
        <p className="mt-1 font-display text-lg leading-tight">
          Abre la carta completa en tu móvil
        </p>
      </div>
    </div>
  );
}
