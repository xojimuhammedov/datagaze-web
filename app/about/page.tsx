import AboutHero from "@/components/about/AboutHero";
import Environment from "@/components/about/Environment";
import Partnership from "@/components/about/Partnership";
import Technological from "@/components/about/Technological";
import Organization from "@/components/service/Organization";

export default function About() {
  return (
    <main className="w-full">
      <AboutHero />
      <Technological />
      <Partnership />
      <Environment />
      <Organization />
    </main>
  );
}
