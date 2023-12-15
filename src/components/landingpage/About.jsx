import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import {
  FreeMode,
  Autoplay,
  Pagination,
  Navigation,
  A11y,
  Scrollbar,
  EffectCreative,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./styles.css";
function About() {
  return (
    <div className="max-w-5xl mx-5 md:mx-auto py-12">
      <div className="md:flex">
        <div className="md:w-1/2  md:mr-8">
          <Swiper
            rewind={true}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-full aspect-square md:aspect-video bg-slate-300">
                gambar 1{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full aspect-square md:aspect-video bg-slate-300">
                {" "}
                gambar 2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full aspect-square md:aspect-video bg-slate-300">
                {" "}
                gambar 3{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full aspect-square md:aspect-video bg-slate-300">
                {" "}
                gambar 4
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="md:w-1/2 text-left md:mt-0 mt-10">
          <h2 className="text-xl font-extrabold  text-[#1070C8]">
            Tentang Kami
          </h2>
          <p className="text-2xl font-bold md:text-4xl md:mr-4 md:pb-2">
            Selamat Datang di LDS
          </p>
          <p className="text-slate-500">
            penyedia internet andalan Anda. Sejak 2005, kami berkomitmen untuk
            memberikan koneksi internet berkualitas tinggi yang cepat, handal,
            dan terjangkau. Misi kami adalah menjadikan internet yang cepat
            sebagai hak dasar bagi semua orang, dengan visi menjadi penyedia
            terkemuka dalam kecepatan, keandalan, dan pelayanan pelanggan.{" "}
            <br />
            <br />
            Kami tumbuh bersama komunitas kami, dengan nilai inti kami:
            Kualitas, Keandalan, dan Layanan Pelanggan Prima. Bersama tim
            profesional kami, kami selalu siap memberikan yang terbaik untuk
            Anda, dan kami peduli dengan komunitas dan lingkungan tempat kami
            beroperasi. Terima kasih telah memilih SpeedNet Connect. Kami adalah
            solusi internet Anda.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
