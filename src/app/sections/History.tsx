import React from "react";

const History = () => {
  return (
    <section className="w-full py-10 px-4 container mx-auto mb-20 scroll-mt-24" id="history">
      <div className="flex flex-col md:flex-row justify-center gap-8">
        
        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <img
            src="/furia.png"
            alt="História da FURIA"
            className="w-full h-auto shadow-lg object-cover"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-black dark:text-white space-y-4">
          <h2 className="text-2xl font-bold uppercase text-center md:text-left">
            Quem Somos
          </h2>
          <p className="text-black dark:text-white">
            Somos FURIA. Uma organização de esports que nasceu do desejo de
            representar o Brasil no CS e conquistou muito mais que isso:
            expandimos nossas ligas, disputamos os principais títulos, adotamos
            novos objetivos e ganhamos um propósito maior. Somos muito mais que
            o sucesso competitivo. Somos um movimento sociocultural. Nossa
            história é de pioneirismo, grandes conquistas e tradição. Nosso
            presente é de desejo, garra e estratégia. A pantera estampada no
            peito estampa também nosso futuro de glória. Nossos pilares de
            performance, lifestyle, conteúdo, business, tecnologia e social são
            os principais constituintes do movimento FURIA, que representa uma
            unidade que respeita as individualidades e impacta positivamente os
            contextos em que se insere. Unimos pessoas e alimentamos sonhos
            dentro e fora dos jogos.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default History;
