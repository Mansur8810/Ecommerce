import {
  Facebook,
  Instagram,
  Linkedin,
  SendHorizontal,
  Twitter,
} from "lucide-react";
import { FooterContent } from "../Constant/Main";

const Footer = () => {
  return (
    <footer className="my-12 bg-black w-full h-auto">
      <div className="flex flex-wrap justify-between px-6 py-10 md:px-12 md:py-20 ">
        <div className="space-y-4 tracking-wider">
          <h1 className="text-white font-bold text-xl">Exclusive</h1>
          <h3 className="text-base font-medium text-white">Subscribe</h3>
          <p className="text-xs text-gray-400 font-poppins">
            Get 10% off your first order
          </p>
          <label className="input input-bordered flex items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full py-2 px-3 rounded-md text-black"
            />
            <button className="bg-white text-black p-2 rounded-md ml-2">
              <SendHorizontal />
            </button>
          </label>
        </div>

        {FooterContent.map((item) => (
          <article
            className="space-y-4 text-white tracking-wider"
            key={item.title}
          >
            <h1 className="font-bold text-xl">{item.title}</h1>
            <h1 className="font-poppins text-sm text-gray-400">
              {item.subtitle}
            </h1>
            <ul className="space-y-3 text-gray-400 text-sm max-w-xs">
              {item.content.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </article>
        ))}

        <div className="flex flex-col gap-4">
          <h1 className="text-white font-bold text-xl">Download App</h1>
          <p className="text-xs text-gray-400 font-poppins">
            Save $3 With App New User Only
          </p>
          <figure className="flex gap-2">
            <img src="/Footer/Qrcode.svg" alt="QR Code" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <img
                src="/Footer/playstore.svg"
                alt="Play Store"
                className="w-20"
              />
              <img
                src="/Footer/appstore.svg"
                alt="App Store"
                className="w-20"
              />
            </div>
          </figure>
          <div className="flex gap-4 text-white">
            <Instagram />
            <Twitter />
            <Facebook />
            <Linkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
