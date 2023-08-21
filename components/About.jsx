import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full">
     
      <div class="text-center mx-auto max-w-[980px] mb-4 mt-10">
          <h2 class="font-bold text-3xl sm:text-3xl md:text-3xl mb-4 text-center text-blue">
          Our Therapeutic Approach
          </h2>
          <p class="text-base">
              At AssistivTeQ, we're dedicated to revolutionizing access to
              counseling and support. Our approach fosters positive change and
              emotional well-being. With a skilled team and client-centric
              focus, we offer a safe, inclusive space for personal growth and
              healing.
          </p>
        </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <Image
            src="/images/14.jpg"
            alt="counseling image"
            width={550}
            height={450}
            className="max-w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2 p-7">
          
          <div className="text-justify">
            <p>
              <strong>Client-Centric Care: </strong>We believe in your unique
              story. Our therapists listen actively and work collaboratively to
              understand your needs and goals. Your journey is our priority.
            </p>
            <p>
              <strong>Evidence-Based Practices: </strong>
              Our therapists stay informed about the latest research to provide
              you with proven, effective interventions. We're dedicated to
              helping you make informed decisions for meaningful progress.
            </p>
            <p>
              <strong>Holistic Well-Being: </strong>
              We see the bigger picture. Our approach considers not only your
              emotional needs but also your physical, social, and spiritual
              dimensions.
            </p>
            <p>
              <strong>Inclusive Atmosphere: </strong>
              Our therapists are trained in cultural competence, ensuring a
              welcoming space where all backgrounds and experiences are
              respected and valued.
            </p>
            <p>
              <strong>Empowerment for Growth: </strong>
              Through self-discovery and skill-building, we'll empower you to
              overcome challenges and thrive.
            </p>
            <p className="pt-2">
              In general, our therapeutic approach isn't just a methodology—it's
              a reflection of our passion for making a difference in people's
              lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
