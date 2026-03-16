import Hero from "@/app/components/home/Hero";
import SelectedMoments3D from "@/app/components/home/SelectedMoments3D";
import CinematicDivider from "@/app/components/home/CinematicDivider";
import SignatureMoments from "@/app/components/home/SignatureMoments";
import PortfolioCategories from "@/app/components/home/PortfolioCategories";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedMoments3D />
      <CinematicDivider />
      <SignatureMoments />
      <PortfolioCategories />
      <ContactSection />
    </main>
  );
}
