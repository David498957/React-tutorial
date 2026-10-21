import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-4 px-6 text-center text-xs text-gray-500">
      <p>&copy; {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
