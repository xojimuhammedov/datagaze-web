import Hero from "@/components/sections/Hero";
import SecuritySolutions from "@/components/sections/SecuritySolutions";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import Ecosystem from "@/components/sections/Ecosystem";
import ExpertInsights from "@/components/sections/ExpertInsights";
import ImpactNumbers from "@/components/sections/ImpactNumbers";
import { SecureSensitive } from "@/components/sections/SecureSensitive";
import Organization from "@/components/service/Organization";
import Organizations from "@/components/sections/Organizations";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <TrustedCompanies />
      <SecuritySolutions />
      <Ecosystem />
      <ImpactNumbers />
      <SecureSensitive />
      <Organization />
      <Organizations />
      <ExpertInsights />
    </main>
  );
}
