import Controlled from "@/components/siem/Controlled";
import Siem from "@/components/siem/Siem";
import Organization from "@/components/service/Organization";

const page = () => {
  return (
    <div>
      <Siem />
      <Controlled />
      <Organization />
    </div>
  );
};

export default page;
