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
                            {/* <Link to="/order"> */}
                            <Button
                              className="cursor-not-allowed w-full text-lg py-6 mt-3 bg-[#000D26] text-white"
                              variant={"default"}
                            >
                              Berlangganan Sekarang
                            </Button>
                            {/* </Link> */}
                            <a href="https://api.whatsapp.com/send/?phone=628192222222&text=Hai%20Admin%20LDS%2C%0A%0ASaya%20[Nama%20Anda]%20dari%20[Alamat%20Anda].%20Mau%20tanya%2C%20bisa%20gak%20pasang%20internet%20LDS%20di%20sini%3F%20Info%20yang%20saya%20butuh%3A%0A%0A1.%20[Alamat%20Anda]%20masuk%20cakupan%20jaringan%20kalian%20gak%3F%0A2.%20Ada%20paket%20internet%20apa%20aja%20dan%20harganya%20berapa%3F%0A3.%20Biaya%20pasang%20dan%20biaya%20lainnya%20apa%20aja%3F%0A4.%20Butuh%20waktu%20berapa%20lama%20dari%20pendaftaran%20sampai%20aktif%3F%0A5.%20Gimana%20dengan%20dukungan%20teknis%3F%0A%0AMakasih%20ya%2C%20nunggu%20info%20balik.%0A%0ASalam%2C%0A[Nama%20Anda]&type=phone_number&app_absent=0">
                              <Button
                                className="w-full text-lg py-6 mt-3 bg-white border text-[#000D26] border-[#000D26] "
                                variant={"default"}
                              >
                                <WA />
                                <span>Chat Admin</span>
                              </Button>
                            </a>
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
            {/* Mobile */}
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
                              className="cursor-not-allowed w-full text-lg py-6 mt-3 bg-[#000D26] text-white"
                              variant={"default"}
                            >
                              Berlangganan Sekarang
                            </Button>
                            <a href="https://api.whatsapp.com/send/?phone=628192222222&text=Hai%20Admin%20LDS%2C%0A%0ASaya%20[Nama%20Anda]%20dari%20[Alamat%20Anda].%20Mau%20tanya%2C%20bisa%20gak%20pasang%20internet%20LDS%20di%20sini%3F%20Info%20yang%20saya%20butuh%3A%0A%0A1.%20[Alamat%20Anda]%20masuk%20cakupan%20jaringan%20kalian%20gak%3F%0A2.%20Ada%20paket%20internet%20apa%20aja%20dan%20harganya%20berapa%3F%0A3.%20Biaya%20pasang%20dan%20biaya%20lainnya%20apa%20aja%3F%0A4.%20Butuh%20waktu%20berapa%20lama%20dari%20pendaftaran%20sampai%20aktif%3F%0A5.%20Gimana%20dengan%20dukungan%20teknis%3F%0A%0AMakasih%20ya%2C%20nunggu%20info%20balik.%0A%0ASalam%2C%0A[Nama%20Anda]&type=phone_number&app_absent=0">
                              <Button
                                className="w-full text-lg py-6 hover:text-white mt-3 bg-white border text-[#000D26] border-[#000D26] "
                                variant={"default"}
                              >
                                <WA />
                                <span>Chat Admin</span>
                              </Button>
                            </a>
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
          </div>
        </div>
      </div>
    </section>
  );
};

const WA = () => {
  return (
    <div className="pr-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet" // "meet" ensures that the entire viewBox is visible within the SVG area
        viewBox="0 0 256 259" // Define the viewBox (minX minY width height)
        className="w-[27px] h-[27px] " // TailwindCSS classes for responsive width and height
      >
        <path
          d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z"
          fill="#00E676"
        />
        <path
          d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z"
          fill="#FFF"
        />
      </svg>
    </div>
  );
};

export default Price;
