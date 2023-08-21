import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-20 bg-sky-blue">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 pl-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-blue">
            Your Pathway to Wellness
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Empowering you to overcome challenges and find clarity in life.
          </p>
          <h2 className="text-3xl font-semibold mb-4 text-blue">
            Why Choose Our Counseling Services?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our experienced counselors are dedicated to helping you navigate
            life's challenges and achieve a sense of balance and well-being.
          </p>
         
          <button className="bg-blue hover:bg-teal-400 text-white font-semibold py-2 px-6 rounded-3xl">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src="/images/banner3.png"
            alt="Counseling Image"
            width={600}
            height={450}
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
