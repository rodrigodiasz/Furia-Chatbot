import { players } from "../constants";

const Line = () => {
  return (
    <section className="w-full py-10 px-4 scroll-mt-24" id="lineup">
      <h2 className="text-black dark:text-white text-2xl font-bold uppercase text-center mb-8 font-mono">
        Line-up
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {players.map((jogador, index) => (
          <div key={index} className="card mt-10 w-72">
            <figure className="pt-4">
              <img
                src={jogador.imagem}
                alt={jogador.nick}
                className="w-50 h-50 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center bg-zinc-200 text-black dark:bg-zinc-900 dark:text-white rounded-b-lg">
              <h2 className="card-title text-lg font-semibold">
                {jogador.nick}
              </h2>
              <p className="text-sm text-gray-400">{jogador.nome}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Line;
