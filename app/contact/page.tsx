import ContactHero from "@/components/contact/ContactHero";
import Map from "@/components/contact/Map";
import Organization from "@/components/service/Organization";

export default function Contact() {
  return (
    <main className="w-full">
      <ContactHero />
      <Map />
      <Organization />
    </main>
  );
}
