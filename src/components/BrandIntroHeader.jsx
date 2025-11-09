import React from "react";
import { InstagramIcon } from "lucide-react";
import logo from "../assets/images/logo.jpeg";
//import { useNavigate } from "react-router-dom";
//import CartIconWithBadge from "./CartIconWithBadge";

const BrandIntroHeader = () => {
//  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-amber-100 via-pink-50 to-rose-100 p-6 md:p-10 shadow-sm">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 max-w-6xl mx-auto">

        
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Srishti by Krishna Logo"
            className="w-44 h-44 md:w-52 md:h-52 rounded-full border-2 border-amber-300 shadow-md object-contain"
          />
        </div>

        
        <div className="flex-1 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl font-bold text-amber-900 mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Srishti by Krishna
          </h1>
          <br/>
          <p className="text-amber-900 text-base md:text-lg leading-relaxed font-medium">
           True to its name, {" "}
            <span className="italic font-semibold">Srishti</span> 🥰 is my world of handmade wonders, born from pure passion and deep love for art and crafts. From tiny keychains to elegant wall hangings, each piece is uniquely crafted with love, care, and a bit of my soul.
            Thank you for visiting and embracing my little world of creations.
           
          </p>
        </div>

       
        <div className="flex justify-center items-center gap-4 mt-2">
        
         {/*  <button
          onClick={() => navigate("/cart")}
          className="relative text-amber-700 hover:text-amber-900 transition-transform transform hover:scale-110 mt-2"
        >
            <CartIconWithBadge size={26}  />
            
          </button>
 */}
         
          <a
            href="https://www.instagram.com/srishti_by_krishna?igsh=eGJyY3NraWE4bXRk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition-transform transform hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramIcon size={26} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroHeader;
