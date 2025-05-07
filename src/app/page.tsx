"use client";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen pt-16">
      <Navbar />

      <HomePage />
      <Footer />
    </div>
  );
}
