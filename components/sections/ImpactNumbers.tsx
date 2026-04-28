import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";

const ImpactNumbers = () => {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="p-30 flex flex-col items-center text-center gap-6">
          <h1 className="text-5xl sm:text-4xl lg:text-5xl max-w-3xl font-medium leading-tight text-gray-900">
            Our Impact in Numbers
          </h1>

          <p className="text-2xl font-medium  sm:text-lg text-gray-600 max-w-2xl">
            We collaborate with numerous large organizations to help them secure
            their data. Our solutions guarantee reliability and efficiency.
          </p>

          <div className="flex gap-3">
            <Button className="py-5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 cursor-pointer text-base font-normal">
              Get a demo
            </Button>
            <Button
              variant="outline"
              className="py-5 px-4 rounded-2xl text-base font-normal cursor-pointer"
            >
              <span className="text-base">Talk with sales</span>
              <GoArrowUpRight />
            </Button> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
