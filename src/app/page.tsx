import HomePage from "@/app/HomePage/page";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/Partners";
import Line from "./sections/Line";
import History from "./sections/History";
import Ranking from "./sections/Ranking";
import Footer from "./sections/Footer";
export default function App() {
  return (
   <main className="bg-stone-50 dark:bg-[#111]">
   <NavBar/>
   <HomePage/>
   <LogoSection/>
   <History/>
   <Line />
   <Ranking/>
   <Footer/>
   </main>
  );
}
