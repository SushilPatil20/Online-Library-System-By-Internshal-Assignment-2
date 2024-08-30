import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center py-4 mt-10">
      <p>
        &copy; {new Date().getFullYear()} Sushil Patil. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
