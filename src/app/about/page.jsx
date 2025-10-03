"use client";
// import image1 from "../../../public/images/image-1.jpg";
import image2 from "../../../public/images/image-2.jpeg";
import Image from "next/image";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const about = () => {
  return (
    <>
      <div className="mx-45 mt-15">
        <h1 className="text-7xl mb-11">Hey we're Forge !</h1>

        <div className="my-18">
          <p className="w-145 text-2xl text-[#1E1E1E] leading-relaxed">
            Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem
            ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum dolor
            sit amet, con dhsnqw, adipiscing elit, sed do Lorem ipsum dolor
            amet, conse adipiscing elit, sed do ipsum dolor amet, conse
            adipiscing elit, sed
          </p>
          <p className="w-145 text-2xl mt-8 text-[#1E1E1E] leading-relaxed">
            Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem
            ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum dolor
            sit amet, con dhsnqw adipiscing elit, sed do Lorem ipsum dolor amet,
            conse
          </p>
          <aside className="absolute left-205 bottom-27">
            <p className="w-110 text-2xl text-[#1E1E1E] leading-relaxed">
              Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do
              Lorem ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum
              dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem ipsum
              dolor amet, conse adipiscing elit, sed do ipsum dolor amet, conse
              adipiscing elit, sed do Lorem ipsum dolor sit amet, con dhsnqw
              adipiscing elit, sed do, Lorem ipsum dolor, amet, conse adipiscing
              elit, sed do, Lorem ipsum
            </p>
          </aside>
        </div>

        <div className="my-12">
          <h1 className="text-7xl pb-11">“GREATEST TEAM EVER”</h1>
          <div>
            <Image
              src={image2}
              alt="image2"
              className="inline-block pr-8 w-110 my-6 "
            />
          </div>
        </div>

        <div className="my-12">
          <p className="w-full text-2xl text-[#1E1E1E] leading-relaxed ">
            Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem
            ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum dolor
            sit amet, con dhsnqw adipiscing elit, sed do Lorem ipsum dolor amet,
            conse adipiscing elit, sed do ipsum dolor amet, conse adipiscing
            elit, sed do Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit,
            sed do, Lorem ipsum dolor, amet, conse adipiscing elit,
          </p>
        </div>

        <div>
          <div className="">
            <h2 className="text-5xl md:text-6xl font-bold w-[105%] relative mb-12 text-left">
              <span className="text-indigo-600 relative z-10 animate-pulse">
                Got Questions?
              </span>
              <span className="block text-gray-800 mt-2">
                We Have Answers..
              </span>

              {/* Decorative underline with animation */}
              <span className="absolute left-0 -bottom-3 w-32 h-1 bg-indigo-500 rounded-full transform origin-left scale-x-0 animate-scaleX"></span>

              {/* Optional subtle background effect */}
              <span className="absolute -top-4 left-0 w-40 h-40 bg-indigo-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></span>
            </h2>
          </div>
          <div className="relative left-70 mb-15">
            <Faq />
          </div>
        </div>

        <div className="my-12">
          <p className="w-full text-2xl text-[#1E1E1E] leading-relaxed ">
            Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem
            ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum dolor
            sit amet, con dhsnqw adipiscing elit, sed do Lorem ipsum dolor amet,
            conse adipiscing elit, sed do ipsum dolor amet, conse adipiscing
            elit, sed do Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit,
            sed do, Lorem ipsum dolor, amet, conse adipiscing elit,
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default about;
