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
import { Link } from "@tanstack/react-router";

interface ComponentProps {
  data: any; // It's better to use a more specific type than 'any' if possible.
}

const Price: React.FC<ComponentProps> = ({ data }) => {
  console.log("dari price", data);

  return (
    <section id="paketProduk">
      <div className="bg-[#F9FAFB] mb-8">
        <div className="ml-5 md:mx-0 py-12 md:pt-16 md:pb-20 ">
          <div className="max-w-5xl mx-auto space-y-4">
            <h2 className="text-xl font-extrabold md:text-center text-[#1070C8]">
              Harga Paket
            </h2>
            <p className="text-2xl font-bold md:text-4xl md:mr-4 md:text-center md:pb-8">
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
                {data &&
                  data.map(
                    (
                      item: {
                        [x: string]: any;
                        id: React.Key | null | undefined;
                        display_name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                      },
                      index: any
                    ) => (
                      <SwiperSlide key={item.id}>
                        <div className="border-2 border-slate-100 w-full text-base">
                          <div className="bg-[#007BED]  py-8 px-5 rounded-xl">
                            <h3 className="text-white text-left text-2xl font-bold pb-4 border-b border-[#fff]/20">
                              {item.default_code}
                            </h3>
                            <p className="pt-4 text-left text-[32px] font-bold">
                              {`Rp.${item.list_price}`}{" "}
                              {/* Assuming you have a price field */}
                            </p>
                            <p className="pt-4 text-left text-base  text-white">
                              Belum termasuk PPN 11%
                            </p>
                          </div>
                          <div className="px-5 pb-5  rounded-xl bg-white">
                            <Link to="/order">
                              <Button
                                className="w-full text-lg py-6 mt-3 bg-[#000D26] text-white"
                                variant={"default"}
                              >
                                Langganan Sekarang
                              </Button>
                            </Link>
                            <Button
                              className="w-full text-lg py-6 mt-3 bg-white border text-[#000D26] border-[#000D26] "
                              variant={"default"}
                            >
                              Chat Admin
                            </Button>
                            <div className="mt-6">
                              <h3 className="text-left font-bold text-lg ">
                                FITUR
                              </h3>
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
                    )
                  )}
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
                {data &&
                  data.map(
                    (
                      item: {
                        [x: string]: any;
                        id: React.Key | null | undefined;
                        display_name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                      },
                      index: any
                    ) => (
                      // <SwiperSlide key={item.id}>
                      //   <div className="border-2 border-slate-100 w-full text-base">
                      //     <div className="bg-[#007BED]  py-8 px-5 rounded-xl">
                      //       <h3 className="text-white text-left text-2xl font-bold pb-4 border-b border-[#fff]/20">
                      //         {item.default_code}
                      //       </h3>
                      //       <p className="pt-4 text-left text-[32px] font-bold">
                      //         {`Rp.${item.list_price}`}{" "}
                      //         {/* Assuming you have a price field */}
                      //       </p>
                      //       <p className="pt-4 text-left text-base  text-white">
                      //         Belum termasuk PPN 11%
                      //       </p>
                      //     </div>
                      //     <div className="px-5 pb-5  rounded-xl bg-white">
                      //       <Link to="/order">
                      //         <Button
                      //           className="w-full text-lg py-6 mt-3 bg-[#000D26] text-white"
                      //           variant={"default"}
                      //         >
                      //           Langganan Sekarang
                      //         </Button>
                      //       </Link>
                      //       <Button
                      //         className="w-full text-lg py-6 mt-3 bg-white border text-[#000D26] border-[#000D26] "
                      //         variant={"default"}
                      //       >
                      //         Chat Admin
                      //       </Button>
                      //       <div className="mt-6">
                      //         <h3 className="text-left font-bold text-lg ">
                      //           FITUR
                      //         </h3>
                      //         <ul className="text-left space-y-2">
                      //           <li className="space-x-2 flex">
                      //             <Wifi />
                      //             <span>Internet UNLIMITED</span>
                      //           </li>
                      //           <li className="space-x-2 flex">
                      //             <Smartphone />
                      //             <span> Ideal untuk 10 - 14 Device</span>
                      //           </li>
                      //           <li className="space-x-2 flex">
                      //             <CreditCard />
                      //             <span>Dukungan Prioritas 24/7</span>
                      //           </li>

                      //           <li className="space-x-2 flex">
                      //             <Warehouse />
                      //             <span>Gratis Instalasi</span>
                      //           </li>
                      //         </ul>
                      //       </div>
                      //     </div>
                      //   </div>
                      // </SwiperSlide>
                      <SwiperSlide key={item.id}>
                        <div className="border-2 border-slate-100 w-full">
                          <div className="bg-[#007BED]  py-8 px-5 rounded-xl">
                            <h3 className="text-white text-left text-2xl font-bold pb-4 border-b border-[#fff]/20 ">
                              {item.default_code}
                            </h3>
                            <p className="pt-4 text-left text-[32px] font-bold">
                              {`Rp.${item.list_price}`}{" "}
                              {/* Assuming you have a price field */}
                            </p>
                            <p className="pt-4 text-left text-base  text-white">
                              Belum termasuk PPN 11%
                            </p>
                          </div>
                          <div className="px-3 pb-3 bg-white">
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
                              <h3 className="text-left font-bold text-lg ">
                                FITUR
                              </h3>
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
                    )
                  )}

                {/* <SwiperSlide>
                  <div className="border-2 border-slate-100 w-full">
                    <div className="bg-[#007BED]  py-8 px-5 rounded-xl">
                      <h3 className="text-white text-left text-2xl font-bold pb-4 border-b border-[#fff]/20 ">
                        TurboNet 40Mbps{" "}
                      </h3>
                      <p className="pt-4 text-left text-[32px] font-bold">
                        Rp.345.000
                      </p>
                      <p className="pt-4 text-left text-base  text-white">
                        Belum termasuk PPN 11%
                      </p>
                    </div>
                    <div className="px-3 pb-3 bg-white">
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
                    <div className="bg-[#007BED]  py-8 px-5 rounded-xl">
                      <h3 className="text-white text-left text-2xl font-bold pb-4 border-b border-[#fff]/20 ">
                        TurboNet 40Mbps{" "}
                      </h3>
                      <p className="pt-4 text-left text-[32px] font-bold">
                        Rp.345.000
                      </p>
                      <p className="pt-4 text-left text-base  text-white">
                        Belum termasuk PPN 11%
                      </p>
                    </div>
                    <div className="px-3 pb-3 bg-white">
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
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
