import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home, ChevronRight, ChevronDown, ChevronUp, Store, Tag, Filter, MapPin, Navigation, RefreshCw,
  Package, Layers, BadgeCheck, Star, CircleCheck, ArrowRight, Mail, MessageCircle, ShieldCheck,
} from "lucide-react";
import hero from "@/assets/hero.png.asset.json";
import eymen from "@/assets/eymen.png.asset.json";
import ozay from "@/assets/ozay.png.asset.json";
import board from "@/assets/board.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sıvı Çivi — Balıkesir Bandırma Mağazaları" },
      { name: "description", content: "Balıkesir Bandırma'daki güvenilir mağazalardan sıvı çivi fiyat ve stok bilgisi." },
      { property: "og:title", content: "Sıvı Çivi — Balıkesir Bandırma" },
      { property: "og:description", content: "Balıkesir Bandırma'daki güvenilir mağazalardan sıvı çivi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Select({ label, pin }: { label: string; pin?: boolean }) {
  return (
    <div className="flex min-w-[110px] flex-1 flex-col gap-1 lg:max-w-[150px]">
      <span className="whitespace-nowrap text-[15px] text-foreground">{label}</span>
      <button className="flex h-10 w-full items-center justify-between gap-3 rounded-lg border border-border bg-card px-3 text-sm font-medium shadow-sm">
        <span className="flex items-center gap-2">{pin && <MapPin className="h-4 w-4 text-brand" />}Tümü</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}

function Group({ icon: Icon, title, all, items }: { icon: typeof Tag; title: string; all: string; items: [string, number][] }) {
  return (
    <div className="border-b border-border py-4 first:pt-1 last:border-0">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-lg font-bold"><Icon className="h-6 w-6 text-brand" />{title}</div>
        <ChevronUp className="h-5 w-5" />
      </div>
      <label className="flex items-center gap-3 py-1 font-semibold">
        <span className="flex h-5 w-5 items-center justify-center rounded bg-brand text-primary-foreground"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7"/></svg></span>{all}
      </label>
      {items.map(([n, c]) => (
        <label key={n} className="flex items-center gap-3 py-1 text-foreground/90">
          <span className="h-5 w-5 rounded border border-border bg-card" />{n} ({c})
        </label>
      ))}
    </div>
  );
}

function Actions() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-[1fr_auto_auto] lg:gap-4">
      <button className="flex h-11 items-center justify-center gap-3 rounded-lg bg-brand text-base lg:text-lg font-bold text-primary-foreground shadow-md transition hover:bg-brand-dark">
        <MessageCircle className="h-6 w-6" /> WhatsApp'tan Fiyat & Stok Sor
      </button>
      <button className="flex h-11 lg:w-[276px] items-center justify-center gap-2 rounded-lg border-2 border-border bg-card font-bold shadow-sm hover:bg-muted">
        <Store className="h-5 w-5" /> Mağaza Profilini Gör <ArrowRight className="h-4 w-4" />
      </button>
      <button className="flex h-11 lg:w-[230px] items-center justify-center gap-3 rounded-lg border-2 border-border bg-card text-lg font-bold shadow-sm hover:bg-muted">
        <Mail className="h-6 w-6 text-brand" /> Mesaj Gönder
      </button>
    </div>
  );
}

function StoreHead({ logo, name, ago, line, rating, profile }: { logo: string; name: string; ago: string; line?: string; rating: boolean; profile?: boolean }) {
  return (
    <div className="flex gap-3 lg:gap-5">
      <div className="flex h-14 w-16 shrink-0 lg:h-[76px] lg:w-[92px] items-center justify-center overflow-hidden rounded-xl bg-card shadow-md">
        <img src={logo} alt={name} className="h-full w-full object-contain" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col items-start justify-between gap-2 lg:flex-row">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-extrabold lg:text-[22px]">{name}<BadgeCheck className="h-6 w-6 fill-brand text-card" /></h3>
            <p className="mt-1 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4" />Bandırma, Balıkesir <span>•</span> {ago}</p>
            {line && <p className="mt-1 flex items-center gap-2 text-sm"><Layers className="h-4 w-4" />{line}</p>}
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:items-start lg:gap-24">
            <div className="flex flex-col items-start gap-3 lg:items-end">
              {rating && <span className="flex items-center gap-1 text-[15px]"><Star className="h-5 w-5 fill-chart-4 text-chart-4" /><b>4,8</b> (126 yorum)</span>}
              {profile && <button className="flex h-10 items-center gap-2 rounded-lg border-2 border-border bg-card px-5 font-bold shadow-sm">Mağaza Profilini Gör <ArrowRight className="h-4 w-4" /></button>}
            </div>
            <span className="flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-lg font-bold text-brand"><CircleCheck className="h-6 w-6" />Stokta var</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const rows = [
  ["Paket 3 adet · 10 cm", "İzocam · İZOCAM TAŞYÜNÜ LEVHA 10CM 50X100 3LU PKT", "1.260 ₺", "4 Paket"],
  ["Paket 4 adet · 8 cm", "İzocam · İZOCAM TAŞYÜNÜ LEVHA 8CM 50X100 4LU PKT", "1.320 ₺", "18 Paket"],
  ["Paket 3 adet · 10 cm", "Knauf · KNAUF TAŞYÜNÜ 10 CM 3 ADET", "1.390 ₺", "25 Paket"],
];

function Index() {
  const [more, setMore] = useState(false);
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="mx-auto max-w-[1460px] px-4 lg:px-10 pb-14 pt-4">
        <nav className="flex flex-wrap items-center gap-2 text-[15px] lg:gap-4">
          <Home className="h-5 w-5" /><ChevronRight className="h-4 w-4" />Ürünler<ChevronRight className="h-4 w-4" />Sıvı Çivi<ChevronRight className="h-4 w-4" />Balıkesir Bandırma
        </nav>

        <section className="mt-3 flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-10">
          <img src={hero.url} alt="Sıvı çivi" className="h-[188px] w-[225px] object-contain" />
          <div className="hidden h-[155px] w-[3px] rounded bg-brand lg:block" />
          <div>
            <h1 className="text-[28px] font-extrabold lg:text-[38px] tracking-tight">Sıvı Çivi — Balıkesir Bandırma</h1>
            <p className="mt-2 text-base leading-relaxed lg:text-xl">Yapı projeleriniz için kaliteli ve dayanıklı sıvı çivi ürünlerini<br className="hidden lg:block" /> Balıkesir Bandırma'daki güvenilir mağazalardan kolayca temin edin.</p>
            <div className="mt-4 flex flex-wrap gap-3 lg:gap-8">
              <span className="flex h-12 items-center gap-3 rounded-xl bg-card px-5 text-lg font-bold shadow-md"><Store className="h-7 w-7 text-brand" />3 mağazada</span>
              <span className="flex h-12 items-center gap-3 rounded-xl bg-card px-6 text-xl font-extrabold shadow-md"><Tag className="h-7 w-7 text-brand" />250 ₺ – 325 ₺</span>
            </div>
          </div>
        </section>

        <section className="mt-6 flex flex-wrap items-end gap-3 rounded-2xl lg:flex-nowrap lg:items-center lg:justify-between lg:gap-3 bg-card px-3 py-3 shadow-md">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft"><Filter className="h-8 w-8 text-brand" /></span>
            <span className="mr-2 text-2xl font-extrabold">Filtrele</span>
          </div>
          <Select label="Marka" /><Select label="Ambalaj" /><Select label="Ölçü (Kalınlık)" /><Select label="Fiyat Aralığı" />
          <Select label="Şehir" pin /><Select label="İlçe" pin />
          <button className="mt-5 flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border-2 border-brand px-4 font-bold"><Navigation className="h-5 w-5 text-brand" />Konumuma Göre Sırala</button>
          <button className="mt-5 flex shrink-0 items-center gap-2 whitespace-nowrap pr-2 font-bold text-brand"><RefreshCw className="h-5 w-5" />Temizle</button>
        </section>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[266px_1fr]">
          <aside className="self-start rounded-2xl bg-card px-4 py-4 shadow-md">
            <Group icon={Tag} title="Marka" all="Tüm Markalar" items={[["İzocam", 2], ["Knauf", 1], ["Paket", 1], ["Diğer", 0]]} />
            <Group icon={Package} title="Ambalaj" all="Tüm Ambalajlar" items={[["Paket 3 adet", 2], ["Paket 4 adet", 1], ["Paket 6 adet", 0]]} />
            <Group icon={Layers} title="Ölçü (Kalınlık)" all="Tüm Ölçüler" items={[["5 cm", 1], ["8 cm", 1], ["10 cm", 2]]} />
          </aside>

          <main className="min-w-0 lg:-mt-6">
            <p className="mb-2 text-right text-[15px]">2 mağaza listeleniyor</p>
            <div className="rounded-2xl bg-card p-4 shadow-md">
              <StoreHead logo={eymen.url} name="Eymen Nalbur" ago="3 ay önce güncellendi" line="Elektrik - Su - Hırdavat - Anahtar Teslim Tadilat" rating profile />
              <div className="mt-2 border-t border-border">
                {rows.map((r, i) => (
                  <div key={i} className="grid grid-cols-[80px_1fr] items-center gap-x-2 gap-y-1 lg:grid-cols-[100px_1fr_270px_auto] lg:gap-0 border-b border-border py-1.5">
                    <img src={board.url} alt="" className="h-11 w-[74px] object-cover" />
                    <div><p className="text-lg font-extrabold">{r[0]}</p><p className="text-sm">{r[1]}</p></div>
                    <div className="col-start-2 lg:col-start-auto"><p className="text-lg font-extrabold">{r[2]}</p><p className="text-sm">KDV dahil</p></div>
                    <span className="col-start-2 flex h-9 w-36 items-center lg:col-start-auto justify-center gap-3 rounded-lg bg-muted font-bold"><Package className="h-5 w-5" />{r[3]}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setMore(!more)} className="mt-3 flex items-center gap-1 font-semibold text-brand">+2 ambalaj seçeneği daha göster <ChevronDown className="h-4 w-4" /></button>
              <Actions />
            </div>

            <div className="mt-6 rounded-2xl bg-card p-4 shadow-md">
              <StoreHead logo={ozay.url} name="Özay Ankastre" ago="4 ay önce güncellendi" line="Mobilya Aksesuarları ve Hırdavat" rating />
              <p className="mt-2 lg:ml-[112px] lg:mt-1 text-sm leading-relaxed">Bandırma ve çevresinde Mobilya Aksesuarları ve Hırdavat alanında 5000'den fazla stoğumuz ile<br className="hidden lg:block" /> toptan ve perakende seçenekleri dahil olmak üzere hizmet vermekteyiz.</p>
              <Actions />
            </div>
          </main>
        </div>
      </div>
      <span className="hidden"><ShieldCheck /></span>
    </div>
  );
}
