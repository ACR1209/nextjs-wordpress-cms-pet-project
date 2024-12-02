import React from "react";

function Footer() {
  return (
    <footer className="border-t py-5 flex items-center justify-center text-sm">
      <div>
        <p>&copy; {new Date().getFullYear()} AACR. All rights reserved.</p>
        <nav></nav>
      </div>
    </footer>
  );
}

export default Footer;
