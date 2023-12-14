import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Wifi, Smartphone, CreditCard, Warehouse } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Button } from "../ui/button";

function Price() {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="mx-5 py-8 space-y-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-extrabold md:text-center">Harga Paket</h2>
          <p className="text-2xl font-bold md:text-4xl  md:mr-4 md:text-center md: mb-4">
            Pilih bandwith untuk bisnis dan keluargamu
          </p>
          <div className="hidden md:block">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              grabCursor={true}
              pagination={false}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="border-2 border-slate-100 w-full">
                  <div className="bg-[#007BED]  py-4 px-5 rounded-xl">
                    <h3 className="text-white text-left text-2xl font-bold pb-4 border-b-2">
                      TurboNet 40Mbps{" "}
                    </h3>
                    <p className="pt-4 text-left text-[32px] font-bold">
                      Rp.345.000
                    </p>
                    <p className="pt-4 text-left text-base  text-white">
                      Belum termasuk PPN 11%
                    </p>
                  </div>
                  <div className="px-3 pb-3">
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-[#000D26] text-white"
                      variant={"default"}
                    >
                      Langganan Sekarang
                    </Button>
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-white border text-[#000D26] border-[#000D26] "
                      variant={"default"}
                    >
                      Chat Admin
                    </Button>
                    <div className="mt-6">
                      <h3 className="text-left font-bold text-lg ">FITUR</h3>
                      <ul className="text-left space-y-2">
                        <li className="space-x-2 flex">
                          <Wifi />
                          <span>Internet UNLIMITED</span>
                        </li>
                        <li className="space-x-2 flex">
                          <Smartphone />
                          <span> Ideal untuk 10 - 14 Device</span>
                        </li>
                        <li className="space-x-2 flex">
                          <CreditCard />
                          <span>Dukungan Prioritas 24/7</span>
                        </li>

                        <li className="space-x-2 flex">
                          <Warehouse />
                          <span>Gratis Instalasi</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-slate-100 w-full">
                  <div className="bg-[#007BED]  py-4 px-5 rounded-xl">
                    <h3 className="text-white text-left text-2xl font-bold pb-4 border-b-2">
                      TurboNet 40Mbps{" "}
                    </h3>
                    <p className="pt-4 text-left text-[32px] font-bold">
                      Rp.345.000
                    </p>
                    <p className="pt-4 text-left text-base  text-white">
                      Belum termasuk PPN 11%
                    </p>
                  </div>
                  <div className="px-3 pb-3">
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-[#000D26] text-white"
                      variant={"default"}
                    >
                      Langganan Sekarang
                    </Button>
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-white border text-[#000D26] border-[#000D26] "
                      variant={"default"}
                    >
                      Chat Admin
                    </Button>
                    <div className="mt-6">
                      <h3 className="text-left font-bold text-lg ">FITUR</h3>
                      <ul className="text-left space-y-2">
                        <li className="space-x-2 flex">
                          <Wifi />
                          <span>Internet UNLIMITED</span>
                        </li>
                        <li className="space-x-2 flex">
                          <Smartphone />
                          <span> Ideal untuk 10 - 14 Device</span>
                        </li>
                        <li className="space-x-2 flex">
                          <CreditCard />
                          <span>Dukungan Prioritas 24/7</span>
                        </li>

                        <li className="space-x-2 flex">
                          <Warehouse />
                          <span>Gratis Instalasi</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-slate-100 w-full">
                  <div className="bg-[#007BED]  py-4 px-5 rounded-xl">
                    <h3 className="text-white text-left text-2xl font-bold pb-4 border-b-2">
                      TurboNet 40Mbps{" "}
                    </h3>
                    <p className="pt-4 text-left text-[32px] font-bold">
                      Rp.345.000
                    </p>
                    <p className="pt-4 text-left text-base  text-white">
                      Belum termasuk PPN 11%
                    </p>
                  </div>
                  <div className="px-3 pb-3">
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-[#000D26] text-white"
                      variant={"default"}
                    >
                      Langganan Sekarang
                    </Button>
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-white border text-[#000D26] border-[#000D26] "
                      variant={"default"}
                    >
                      Chat Admin
                    </Button>
                    <div className="mt-6">
                      <h3 className="text-left font-bold text-lg ">FITUR</h3>
                      <ul className="text-left space-y-2">
                        <li className="space-x-2 flex">
                          <Wifi />
                          <span>Internet UNLIMITED</span>
                        </li>
                        <li className="space-x-2 flex">
                          <Smartphone />
                          <span> Ideal untuk 10 - 14 Device</span>
                        </li>
                        <li className="space-x-2 flex">
                          <CreditCard />
                          <span>Dukungan Prioritas 24/7</span>
                        </li>

                        <li className="space-x-2 flex">
                          <Warehouse />
                          <span>Gratis Instalasi</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="md:hidden">
            <Swiper
              slidesPerView={1.125}
              spaceBetween={20}
              grabCursor={true}
              pagination={false}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="border-2 border-slate-100 w-full">
                  <div className="bg-[#007BED]  py-4 px-5 rounded-xl">
                    <h3 className="text-white text-left text-2xl font-bold pb-4 border-b-2">
                      TurboNet 40Mbps{" "}
                    </h3>
                    <p className="pt-4 text-left text-[32px] font-bold">
                      Rp.345.000
                    </p>
                    <p className="pt-4 text-left text-base  text-white">
                      Belum termasuk PPN 11%
                    </p>
                  </div>
                  <div className="px-3 pb-3">
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-[#000D26] text-white"
                      variant={"default"}
                    >
                      Langganan Sekarang
                    </Button>
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-white border text-[#000D26] border-[#000D26] "
                      variant={"default"}
                    >
                      Chat Admin
                    </Button>
                    <div className="mt-6">
                      <h3 className="text-left font-bold text-lg ">FITUR</h3>
                      <ul className="text-left space-y-2">
                        <li className="space-x-2 flex">
                          <Wifi />
                          <span>Internet UNLIMITED</span>
                        </li>
                        <li className="space-x-2 flex">
                          <Smartphone />
                          <span> Ideal untuk 10 - 14 Device</span>
                        </li>
                        <li className="space-x-2 flex">
                          <CreditCard />
                          <span>Dukungan Prioritas 24/7</span>
                        </li>

                        <li className="space-x-2 flex">
                          <Warehouse />
                          <span>Gratis Instalasi</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-slate-100 w-full">
                  <div className="bg-[#007BED]  py-4 px-5 rounded-xl">
                    <h3 className="text-white text-left text-2xl font-bold pb-4 border-b-2">
                      TurboNet 40Mbps{" "}
                    </h3>
                    <p className="pt-4 text-left text-[32px] font-bold">
                      Rp.345.000
                    </p>
                    <p className="pt-4 text-left text-base  text-white">
                      Belum termasuk PPN 11%
                    </p>
                  </div>
                  <div className="px-3 pb-3">
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-[#000D26] text-white"
                      variant={"default"}
                    >
                      Langganan Sekarang
                    </Button>
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-white border text-[#000D26] border-[#000D26] "
                      variant={"default"}
                    >
                      Chat Admin
                    </Button>
                    <div className="mt-6">
                      <h3 className="text-left font-bold text-lg ">FITUR</h3>
                      <ul className="text-left space-y-2">
                        <li className="space-x-2 flex">
                          <Wifi />
                          <span>Internet UNLIMITED</span>
                        </li>
                        <li className="space-x-2 flex">
                          <Smartphone />
                          <span> Ideal untuk 10 - 14 Device</span>
                        </li>
                        <li className="space-x-2 flex">
                          <CreditCard />
                          <span>Dukungan Prioritas 24/7</span>
                        </li>

                        <li className="space-x-2 flex">
                          <Warehouse />
                          <span>Gratis Instalasi</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-slate-100 w-full">
                  <div className="bg-[#007BED]  py-4 px-5 rounded-xl">
                    <h3 className="text-white text-left text-2xl font-bold pb-4 border-b-2">
                      TurboNet 40Mbps{" "}
                    </h3>
                    <p className="pt-4 text-left text-[32px] font-bold">
                      Rp.345.000
                    </p>
                    <p className="pt-4 text-left text-base  text-white">
                      Belum termasuk PPN 11%
                    </p>
                  </div>
                  <div className="px-3 pb-3">
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-[#000D26] text-white"
                      variant={"default"}
                    >
                      Langganan Sekarang
                    </Button>
                    <Button
                      className="w-full text-lg py-6 mt-3 bg-white border text-[#000D26] border-[#000D26] "
                      variant={"default"}
                    >
                      Chat Admin
                    </Button>
                    <div className="mt-6">
                      <h3 className="text-left font-bold text-lg ">FITUR</h3>
                      <ul className="text-left space-y-2">
                        <li className="space-x-2 flex">
                          <Wifi />
                          <span>Internet UNLIMITED</span>
                        </li>
                        <li className="space-x-2 flex">
                          <Smartphone />
                          <span> Ideal untuk 10 - 14 Device</span>
                        </li>
                        <li className="space-x-2 flex">
                          <CreditCard />
                          <span>Dukungan Prioritas 24/7</span>
                        </li>

                        <li className="space-x-2 flex">
                          <Warehouse />
                          <span>Gratis Instalasi</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
