import React from "react";
import { Search } from "lucide-react";

function CoverageArea() {
  return (
    <section id="areaLayanan">
      <div className="mx-5 md:hidden mt-8">
        <div className="flex items-center space-x-5 border-2  rounded-sm">
          {/* Search Button */}
          <div className="p-3 bg-[#3393EB] rounded-sm">
            <Search className=" stroke-white" />
          </div>
          {/* Search Button */}
          <p className="text-sm">Cari daerahmu disini</p>
        </div>
      </div>
      <div className="mt-4 mx-5 md:mt-12 max-w-5xl md:mx-auto md:py-12  md:flex">
        <div className="md:w-1/2 space-y-4 md:space-y-8 ">
          <h2 className="text-2xl font-bold md:text-4xl  md:mr-4">
            Nikmati #Internet Unlimited Tanpa Hambatan{" "}
          </h2>
          <p className="md:text-lg">
            Kami hadir memberikan layanan terbaik untuk kamu
          </p>
          <div className="grid grid-cols-3 md:mr-8">
            <div>
              <h3 className="font-semibold text-[32px] text-[#0274DD]">100%</h3>
              <p className="font-medium">Fiber Optic</p>
            </div>
            <div>
              <h3 className="font-semibold text-[32px] text-[#0274DD]">
                1 : 1
              </h3>
              <p className="font-medium">Simetris Download : Upload</p>
            </div>
            <div>
              <h3 className="font-semibold text-[32px] text-[#0274DD]">100%</h3>
              <p className="font-medium">Internet UNLIMITED</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-5 border-2  rounded-sm md:mr-8">
            {/* Search Button */}
            <div className="p-3 bg-[#3393EB] rounded-sm">
              <Search className=" stroke-white" />
            </div>
            {/* Search Button */}
            <p className="text-sm">Cari daerahmu disini</p>
          </div>
        </div>
        <div className="w-full min-h-[300px] md:w-1/2 bg-slate-300 mt-8 md:mt-0">
          animasi map
        </div>
      </div>
    </section>
  );
}

export default CoverageArea;
