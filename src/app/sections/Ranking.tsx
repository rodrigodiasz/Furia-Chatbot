"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// ⚡️ Array de imagens do carrossel
const images = [
  "/pictures/furia-podio-1.jpg",
  "/pictures/furia-podio-2.png",
  "/pictures/furia-podio-3.jpg",
  "/pictures/furia-podio-4.jpeg",
  "/pictures/furia-podio-5.png",
];

// 🎯 Dados dos rankings e conquistas
const data = {
  2024: {
    hltv: "Top 15 Mundial",
    majors: [
      "Legends – Perfect World Shanghai Major 2024",
      "Legends – Copenhagen Major 2024",
    ],
    podios: ["🥉 3-4th – IEM Rio 2024"],
  },
  2023: {
    hltv: "Top 10 Mundial",
    majors: ["Legends – BLAST.tv Paris Major 2023"],
    podios: [],
  },
  2022: {
    hltv: "Top 8 Mundial",
    majors: [
      "🥉 3-4th – IEM Rio Major 2022",
      "1/4 final – PGL Major Antwerp 2022",
    ],
    podios: [
      "🥉 3-4th – IEM Rio Major 2022",
      "🥉 3-4th – IEM Dallas 2022",
      "🥉 3-4th – ESL Pro League Season 15",
    ],
  },
  2021: {
    hltv: "Top 10 Mundial",
    majors: ["1/4 final – PGL Major Stockholm 2021"],
    podios: [],
  },
  2020: {
    hltv: "Top 3 Mundial",
    majors: ["Sem Majors presenciais (COVID-19)"],
    podios: [
      "🥇 1st – ESL Pro League Season 12 North America",
      "🥇 1st – DreamHack Masters Spring North America",
      "🥈 2nd – IEM New York 2020 North America",
      "🥉 3-4th – cs_summit 6 North America",
    ],
  },
  2019: {
    hltv: "Top 20 Mundial",
    majors: [
      "Challengers – StarLadder Major 2019",
      "Challengers – IEM Katowice 2019",
    ],
    podios: ["🥉 3-4th – DreamHack Masters Dallas 2019"],
  },
};

const Ranking = () => {
  const [anoSelecionado, setAnoSelecionado] = useState<keyof typeof data>(2024);

  const anos = Object.keys(data)
    .map(Number)
    .sort((a, b) => b - a) as Array<keyof typeof data>;

  return (
    <section
      id="ranking"
      className="w-full py-10 px-4 scroll-mt-24 mb-20 mt-20 text-black dark:text-white"
    >
      <h2 className="text-2xl font-bold uppercase text-center mb-6">
        Ranking & Conquistas
      </h2>

      {/* Filtro de anos */}
      <div className="join flex flex-wrap justify-center mb-8">
        {anos.map((ano) => (
          <button
            key={ano}
            onClick={() => setAnoSelecionado(ano)}
            className={`join-item btn transition-all duration-300 ease-in-out rounded-lg transform hover:scale-105 ${
              anoSelecionado === ano
                ? "btn-active bg-red-600 border-red-600 text-white hover:bg-red-700"
                : "bg-black dark:bg-zinc-50 hover:bg-opacity-80 text-white dark:text-zinc-900"
            }`}
          >
            {ano}
          </button>
        ))}
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        {/* Parte do Ranking e Conquistas */}
        <div>
          <div className="text-center mb-6 text-md border-2 text-black dark:text-white rounded-lg p-2 border-zinc-300 dark:border-zinc-700 shadow-md">
            📊 Ranking HLTV ({anoSelecionado}):{" "}
            <span className="text-black dark:text-white font-semibold">
              {data[anoSelecionado].hltv}
            </span>
          </div>

          {/* 🏆 Conquistas em Majors */}
          <div className="card card-border bg-base-100 w-full rounded-lg border-2 shadow-md border-zinc-300 dark:border-zinc-700  mb-6">
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-4">
                🏆 Conquistas em Majors
              </h3>
              {data[anoSelecionado].majors.length > 0 ? (
                <ul className="space-y-2">
                  {data[anoSelecionado].majors.map((item, idx) => (
                    <li key={idx} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm text-center">
                  Nenhuma conquista registrada em majors.
                </p>
              )}
            </div>
          </div>

          {/* 🥇 Pódios em Competições */}
          <div className="card card-border bg-base-100 border-2 border-zinc-300 shadow-md dark:border-zinc-700 w-full rounded-lg">
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-4">
                🥇 Pódios em Competições
              </h3>
              {data[anoSelecionado].podios.length > 0 ? (
                <ul className="space-y-2">
                  {data[anoSelecionado].podios.map((item, idx) => (
                    <li key={idx} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm text-center">
                  Nenhum pódio registrado neste ano.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Parte do Carrossel livre (sem Card) */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`FURIA Campeonato ${index + 1}`}
                  className="w-full h-[340px] object-cover shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
