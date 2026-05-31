import AboutHero from "@/components/about/AboutHero";
import Environment from "@/components/about/Environment";
import Partnership from "@/components/about/Partnership";
import OrbitSection from "@/components/about/OrbitSection";
import Technological from "@/components/about/Technological";
import Organization from "@/components/service/Organization";

export default function About() {
  return (
    <main className="w-full">
      <AboutHero />
      <Technological />
      <OrbitSection />
      <Partnership />
      <Environment />
      <Organization />
    </main>
  );
}
