import Organization from "@/components/service/Organization";
import ControlledStaff from "@/components/staff/ControlledStaff";
import Staff from "@/components/staff/Staff";

const page = () => {
  return (
    <div>
      <Staff />
      <ControlledStaff />
       <Organization />
    </div>
  );
};

export default page;
