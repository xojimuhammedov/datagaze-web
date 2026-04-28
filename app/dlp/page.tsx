import Controlled from "@/components/dlp/Controlled";
import DlpHero from "@/components/dlp/DlpHero";
import IntelligenceDlp from "@/components/dlp/IntelligenceDlp";
import Working from "@/components/dlp/Working";

const page = () => {
  return (
    <div>
      <DlpHero />
      <IntelligenceDlp />
      <Working />
      <Controlled />
    </div>
  );
};

export default page;
