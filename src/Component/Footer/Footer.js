import React from "react";
import "./Footer.css";

const Footer = () =>{
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 px-6 py-20 font-sans">
         <div>
          <h2 className="text-3xl text-pink-400 font-semibold">CONTACT US</h2>
        </div>
      <div className="max-w-7xl mx-auto space-y-16 contactsection">



        <div className="connectme">
          <div style={{textAlign: "left"}}>
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    style={{    border: "1px solid #ff9ce9"}}
                />
                <button className="px-6 py-2 bg-pink-400 text-#ff9ce9 font-medium" style={{backgroundColor: "#ff9ce9", border:"none"}}>
                    Subscribe Free
                </button>
          </div>


           <div className="connect">
            <div>
                    <p className="text-pink-400 mb-1">Phone</p>
                    <p>+123 - 456 - 7890</p>
            </div>
            <div>
                    <p className="text-pink-400 mb-1">Address</p>
                    <p>123 Anywhere St. Any City, ST 12345</p>
            </div>
            <div>
                    <p className="text-pink-400 mb-1">Email</p>
                    <p>Email@Yourmail.Com</p>
            </div>
            </div>

        </div>


        {/* LINKS GRID */}
        <div className="linksitw">
          <div>
            <p className="text-pink-400 uppercase mb-3">Contact Us</p>
            <ul className="space-y-1">
              <li>Contact us</li>
              <li>Delivery and return</li>
              <li>Terms and conditions</li>
              <li>FAQs</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <p className="text-pink-400 uppercase mb-3">About</p>
            <ul className="space-y-1">
              <li>Our story</li>
              <li>Careers</li>
              <li>Corporate gifts</li>
            </ul>
          </div>
          <div>
            <p className="text-pink-400 uppercase mb-3">Social</p>
            <ul className="space-y-1">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

      </div>
      <div>

        {/* DIVIDER */}
        <div className="border-t border-pink-400 my-8"></div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col sm:flex-row justify-between items-center  text-gray-400"
        style={{ display: "flex",justifyContent: "space-around",marginTop: "54px",color :"white",flexDirection: "row",gap: "7%"}}>
          <p>PRIVACY POLICY</p>
          <p>COPYRIGHT © 2024 COMPANY ALL RIGHTS RESERVED.</p>
          <p>TERMS OF SERVICE</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;