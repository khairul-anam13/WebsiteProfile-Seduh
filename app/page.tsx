import Image from "next/image";

const WA_KARANGANYAR = "https://wa.me/62895322654664";
const WA_SRAGEN = "https://wa.me/6289648035333";
const PESAN_ANTAR = "https://linktr.ee/tehtarikseduh.online.food";
const INSTAGRAM = "https://www.instagram.com/tehtarikseduh/";

const menu = [
  {
    kelompok: "Teh tarik",
    isi: [
      ["Teh Tarik Authentic", "teh hitam, susu"],
      ["Teh Tarik Malaka", "teh hitam Aceh"],
      ["Thai Tea Tarik", "teh Thai, susu"],
      ["Matcha Tarik", "teh hijau Thai"],
    ],
  },
  {
    kelompok: "Kopi dan cokelat",
    isi: [
      ["Kopi Sanger", "kopi susu khas Aceh"],
      ["Choco Klasik", "cokelat hitam"],
      ["Choco Hazelnut", "cokelat, hazelnut"],
      ["Matcha Signature", "racikan matcha Seduh"],
    ],
  },
];

const langkah = [
  ["Seduh", "Teh hitam diseduh pekat dengan air mendidih, lalu disaring sampai tidak ada ampas."],
  ["Campur", "Susu masuk selagi teh masih panas, diaduk sampai warnanya rata cokelat susu."],
  ["Tarik", "Teh dituang bolak-balik dari satu wadah ke wadah lain, dari setinggi lengan. Udara ikut masuk, rasanya jadi lebih lembut."],
  ["Sajikan", "Busa tebal berdiri di atas gelas. Paling enak diminum sebelum busanya turun."],
];

// Contoh tulisan, bukan ulasan asli. Ganti dengan ulasan pelanggan sungguhan sebelum situs tayang.
const testimoni = [
  ["Teh Tarik Malaka-nya pekat, manisnya nggak menutup rasa teh. Jam sebelas malam masih bisa mampir.", "Dimas, Tasikmadu"],
  ["Anak saya pilih Choco Klasik, saya Thai Tea Tarik. Dua gelas, kembaliannya masih banyak.", "Bu Ratna, Jaten"],
  ["Dari rumah tinggal jalan kaki ke Jl. Sukowati. Matcha Tarik jadi jatah tiap Jumat sore.", "Nisa, Sragen Kulon"],
];

function Tarikan() {
  return (
    <svg viewBox="0 0 280 1000" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      <defs>
        <pattern id="bintik" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="5" r="1.6" fill="#1d5a45" />
          <circle cx="13" cy="12" r="1.1" fill="#1d5a45" />
          <circle cx="9" cy="16" r="0.7" fill="#2b1709" />
        </pattern>
      </defs>

      {/* Teko tarik, miring 40° */}
      <g transform="translate(95 110) rotate(40)">
        <path d="M-40 -42 C-78 -42 -78 34 -40 34" fill="none" stroke="#2b1709" strokeWidth="9" />
        <rect x="-40" y="-70" width="80" height="140" rx="5" fill="#f4e8d6" stroke="#2b1709" strokeWidth="5" />
        <path d="M-40 -48 H40 M-40 48 H40" stroke="#2b1709" strokeWidth="2.5" opacity=".5" />
      </g>

      {/* Aliran teh */}
      <path className="aliran" d="M167 84 L177 84 C176 400 175 640 175 862 L169 862 C169 640 168 400 167 84 Z" fill="#6e3210" />

      {/* Cangkir blirik */}
      <path className="busa-naik" d="M122 864 C122 832 222 832 222 864 Z" fill="#f4e8d6" stroke="#2b1709" strokeWidth="2" />
      <path d="M226 888 C262 888 262 952 226 952" fill="none" stroke="#1d5a45" strokeWidth="11" />
      <path d="M118 864 H226 L222 978 C222 986 122 986 122 978 Z" fill="#f4e8d6" />
      <path d="M118 864 H226 L222 978 C222 986 122 986 122 978 Z" fill="url(#bintik)" />
      <path d="M118 864 H226 L222 978 C222 986 122 986 122 978 Z" fill="none" stroke="#2b1709" strokeWidth="3" />
      <rect x="114" y="859" width="116" height="9" rx="4.5" fill="#1d5a45" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="lapis-teh relative overflow-hidden">
        <nav className="relative z-10 mx-auto flex max-w-7xl items-baseline justify-between gap-6 px-5 pt-6 md:px-10">
          <a href="#" className="display text-3xl font-black" style={{ fontVariationSettings: '"wdth" 130' }}>
            Seduh
          </a>
          <ul className="hidden gap-7 text-[0.95rem] md:flex">
            <li><a className="underline-offset-4 hover:underline" href="#menu">Menu</a></li>
            <li><a className="underline-offset-4 hover:underline" href="#cara">Cara ditarik</a></li>
            <li><a className="underline-offset-4 hover:underline" href="#lokasi">Lokasi dan jam</a></li>
            <li><a className="underline-offset-4 hover:underline" href="#pesan">Pesan</a></li>
          </ul>
        </nav>

        <div className="pointer-events-none absolute top-20 right-[-4vw] bottom-0 w-[42vw] max-w-[360px] md:right-[4vw] md:w-[24vw]">
          <Tarikan />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pt-24 pb-16 md:px-10 md:pt-40 md:pb-28">
          <h1 className="display font-black">
            <span className="block text-[clamp(3rem,11vw,9rem)]">Teh</span>
            <span className="tarik -ml-[0.04em] block text-[clamp(4rem,18.5vw,17rem)] text-aren">tarik</span>
          </h1>
          <p className="mt-8 max-w-[34ch] text-lg md:mt-10 md:text-xl">
            Teh hitam, susu, dan satu tarikan panjang dari teko ke gelas. Buka sore sampai tengah malam di
            Karanganyar dan Sragen.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href={WA_KARANGANYAR}
              className="bg-blirik px-6 py-3.5 font-display text-lg font-bold text-busa hover:bg-kental"
              style={{ fontVariationSettings: '"wdth" 115' }}
            >
              Pesan lewat WhatsApp
            </a>
            <a href="#menu" className="text-lg underline decoration-2 underline-offset-[6px]">
              Lihat menu
            </a>
          </div>
        </div>
      </section>

      {/* Cerita */}
      <section className="lapis-teh border-t-2 border-kental/15">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-7">
            <h2 className="display text-[clamp(2.4rem,6vw,4.75rem)] font-extrabold" style={{ fontVariationSettings: '"wdth" 75' }}>
              Dari Nusantara diSeduh untuk dunia
            </h2>
            <blockquote className="mt-10 border-l-4 border-aren pl-6 text-2xl leading-snug italic md:text-[1.75rem]">
              Seduh lahir dari keyakinan bahwa rasa Nusantara punya tempat istimewa di hati siapa pun.
            </blockquote>
            <div className="mt-8 max-w-[60ch] space-y-5">
              <p>
                Teh, kopi, dan gula aren bagi Seduh bukan sekadar bahan, tapi warisan. Teh tarik lahir di kedai-kedai
                Semenanjung Malaya, Kopi Sanger dari warung kopi di Aceh. Keduanya ada di menu kami.
              </p>
              <p>
                Kami menjualnya dengan harga Rp6.000 sampai Rp16.000 segelas, supaya bisa diminum tiap hari, bukan
                cuma waktu ada acara.
              </p>
            </div>
          </div>
          <figure className="relative md:col-span-5 md:mt-24">
            <Image
              src="https://images.unsplash.com/photo-1579622306443-7c6a19997a9a?w=1100&q=70&auto=format"
              unoptimized
              alt="Segelas teh susu di ambang jendela berdinding hijau"
              width={1000}
              height={667}
              className="aspect-[4/5] w-full object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </figure>
        </div>
      </section>

      {/* Cara ditarik */}
      <section id="cara" className="lapis-teh">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:grid-cols-12 md:px-10 md:pb-32">
          <figure className="md:col-span-5">
            <Image
              src="https://images.unsplash.com/photo-1740798562283-fdeec90f47f0?w=1100&q=70&auto=format"
              unoptimized
              alt="Penyaji menuang minuman dari teko logam tinggi ke gelas dengan aliran panjang"
              width={1000}
              height={1500}
              className="aspect-[3/4] w-full object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </figure>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="display text-[clamp(2.4rem,6vw,4.75rem)] font-extrabold" style={{ fontVariationSettings: '"wdth" 75' }}>
              Kenapa disebut tarik
            </h2>
            <ol className="mt-10 space-y-9">
              {langkah.map(([judul, isi], i) => (
                <li key={judul} className="grid grid-cols-[3.5rem_1fr] gap-4">
                  <span className="display text-5xl font-black text-aren" style={{ fontVariationSettings: '"wdth" 60' }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="display text-2xl font-bold" style={{ fontVariationSettings: '"wdth" 110' }}>
                      {judul}
                    </h3>
                    <p className="mt-1.5 max-w-[48ch]">{isi}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="lapis-malam">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <h2 className="display text-[clamp(4rem,12vw,9rem)] font-black md:col-span-7" style={{ fontVariationSettings: '"wdth" 140' }}>
              Menu
            </h2>
            <p className="max-w-[40ch] md:col-span-5 md:pb-4">
              Delapan minuman. Harga Rp6.000 sampai Rp16.000; bisa beda sedikit di
              tiap outlet dan aplikasi pesan antar.
            </p>
          </div>

          <div className="papan mt-12 grid gap-12 bg-kental p-6 sm:p-10 md:grid-cols-2 md:gap-16 md:p-14">
            {menu.map((k) => (
              <div key={k.kelompok}>
                <h3 className="display text-3xl font-bold text-teh" style={{ fontVariationSettings: '"wdth" 120' }}>
                  {k.kelompok}
                </h3>
                <ul className="mt-6 space-y-5">
                  {k.isi.map(([nama, bahan]) => (
                    <li key={nama} className="flex flex-wrap items-end gap-x-3">
                      <span className="display text-xl font-semibold md:text-2xl" style={{ fontVariationSettings: '"wdth" 90' }}>
                        {nama}
                      </span>
                      <span className="titik-titik" aria-hidden="true" />
                      <span className="italic opacity-80">{bahan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="lapis-malam">
        <div className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
          <h2 className="display text-[clamp(2.4rem,6vw,4.75rem)] font-extrabold text-teh" style={{ fontVariationSettings: '"wdth" 75' }}>
            Yang bikin mampir lagi
          </h2>
          <ul className="mt-10 max-w-[46ch] space-y-7 border-l-[6px] border-aren pl-6 text-[1.35rem] leading-snug md:ml-[33%] md:text-[1.6rem]">
            <li>Segelas paling murah Rp6.000. Yang paling mahal Rp16.000.</li>
            <li>Outlet Karanganyar buka sampai jam 12 malam, pas untuk yang pulang kerja larut.</li>
            <li>Teh Tarik Malaka pakai teh hitam Aceh. Kopi Sanger dibuat gaya kopi susu Aceh.</li>
            <li>Ada di Karanganyar, Sragen, dan Sukoharjo. Malas keluar, pesan lewat GoFood atau ShopeeFood.</li>
          </ul>
        </div>
      </section>

      {/* Testimoni */}
      <section className="lapis-teh">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <h2 className="display text-[clamp(2.4rem,6vw,4.75rem)] font-extrabold" style={{ fontVariationSettings: '"wdth" 75' }}>
            Kata yang sudah mampir
          </h2>
          <div className="mt-12 grid gap-14 md:grid-cols-3 md:gap-10">
            {testimoni.map(([kutipan, nama], i) => (
              <figure key={nama} className={["max-w-[26ch]", "max-w-[26ch] md:mt-28", "max-w-[26ch] md:mt-56"][i]}>
                <blockquote className="text-[1.6rem] leading-snug italic md:text-[2rem]">“{kutipan}”</blockquote>
                <figcaption className="mt-3 font-display font-semibold text-aren">{nama}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi dan jam */}
      <section id="lokasi" className="lapis-malam">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <h2 className="display text-[clamp(2.4rem,6vw,4.75rem)] font-extrabold text-teh" style={{ fontVariationSettings: '"wdth" 75' }}>
            Buka sore, tutup tengah malam
          </h2>
          <div className="mt-14 grid gap-14 md:grid-cols-12">
            <div className="space-y-12 md:col-span-5">
              <div>
                <h3 className="display text-3xl font-bold">Karanganyar Kota</h3>
                <p className="display mt-2 text-[clamp(3rem,8vw,5.5rem)] font-black text-teh" style={{ fontVariationSettings: '"wdth" 60' }}>
                  15.00–00.00
                </p>
                <p className="mt-2">
                  <a className="underline underline-offset-4" href="https://www.google.com/maps/search/Teh+Tarik+Seduh+Karanganyar+Kota">
                    Buka di Google Maps
                  </a>
                </p>
              </div>
              <div>
                <h3 className="display text-3xl font-bold">Sragen</h3>
                <p className="display mt-2 text-[clamp(3rem,8vw,5.5rem)] font-black text-teh" style={{ fontVariationSettings: '"wdth" 60' }}>
                  15.00–23.00
                </p>
                <p className="mt-2">Jl. Sukowati No. 185, Sragen Kulon, barat Bank Jateng Sragen Kota.</p>
                <p className="mt-2">
                  <a className="underline underline-offset-4" href="https://www.google.com/maps/search/Teh+Tarik+Seduh+Jl.+Sukowati+185+Sragen">
                    Buka di Google Maps
                  </a>
                </p>
              </div>
              <p className="max-w-[40ch] opacity-85">
                Cabang Sukoharjo sudah buka. Alamat dan jamnya diumumkan di Instagram{" "}
                <a className="underline underline-offset-4" href={INSTAGRAM}>@tehtarikseduh</a>.
              </p>
            </div>
            <div className="md:col-span-7">
              <Image
                src="https://images.unsplash.com/photo-1603618309543-d42b7d2a0ba7?w=1300&q=70&auto=format"
                unoptimized
                alt="Dua gelas teh susu dan roti di meja kedai"
                width={1300}
                height={867}
                className="aspect-[4/3] w-full border-[6px] border-teh object-cover"
                sizes="(min-width: 768px) 55vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="pesan" className="lapis-blirik">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <h2 className="display text-[clamp(3.5rem,12vw,9.5rem)] font-black" style={{ fontVariationSettings: '"wdth" 130' }}>
            Pesan dari rumah
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="display text-2xl font-bold">WhatsApp Karanganyar</h3>
              <a className="mt-2 inline-block text-xl underline underline-offset-4" href={WA_KARANGANYAR}>
                0895-3226-54664
              </a>
            </div>
            <div>
              <h3 className="display text-2xl font-bold">WhatsApp Sragen</h3>
              <a className="mt-2 inline-block text-xl underline underline-offset-4" href={WA_SRAGEN}>
                0896-4803-5333
              </a>
            </div>
            <div>
              <h3 className="display text-2xl font-bold">Pesan antar</h3>
              <a className="mt-2 inline-block text-xl underline underline-offset-4" href={PESAN_ANTAR}>
                GoFood dan ShopeeFood
              </a>
            </div>
          </div>
        </div>
        <footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-busa/30 px-5 py-8 text-[0.95rem] md:px-10">
          <span className="display text-2xl font-black" style={{ fontVariationSettings: '"wdth" 130' }}>Seduh</span>
          <a className="underline underline-offset-4" href={INSTAGRAM}>Instagram @tehtarikseduh</a>
        </footer>
      </section>
    </main>
  );
}
