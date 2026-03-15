import Hero from "@/app/components/home/Hero";
import SelectedMoments3D from "@/app/components/home/SelectedMoments3D";
import CinematicDivider from "@/app/components/home/CinematicDivider";
import SignatureMoments from "@/app/components/home/SignatureMoments";
import PortfolioCategories from "./components/home/PortfolioCategories";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedMoments3D />
      <CinematicDivider />
      {/* < SignatureMoments/> */}
            < PortfolioCategories/>

    </main>
  );
}