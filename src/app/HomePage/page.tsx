import Chat from "../components/Chat";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-30">
      <div className="w-full max-w-6xl mt-10 sm:mx-10 mx-0 flex justify-center items-center flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </div>
    </main>
  );
}