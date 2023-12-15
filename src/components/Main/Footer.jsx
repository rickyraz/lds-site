import Logo from "./logo/logo-wide.png";

function Footer() {
  return (
    <footer className="text-sm py-8 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-5 md:mx-auto space-y-4">
        <img src={Logo} alt="logo" className="max-w-[200px]" />
        <div className="md:w-1/3">
          <p className="font-semibold ">Address :</p>
          <p className="text-xs">
            Jl. Raya Pd. Gede No.48B, RT.3/RW.8, Lubang Buaya, Kec. Cipayung,
            Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13810
          </p>
        </div>
        <ul className="flex">
          <li>X</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
