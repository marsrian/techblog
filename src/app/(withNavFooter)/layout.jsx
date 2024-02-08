import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import React from "react";

const WithNavFooterLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-200px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default WithNavFooterLayout;
