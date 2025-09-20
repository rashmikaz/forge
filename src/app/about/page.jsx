"use client";
// import image1 from "../../../public/images/image-1.jpg";
import image2 from "../../../public/images/image-2.jpeg";
import Image from "next/image";

const about = () => {
  return (
    <div className="pt-25">
      <h1 className="text-7xl pb-11">Hey we're Forge !</h1>
      <div>
        <p className="w-145 text-2xl pb-8 text-[#1E1E1E] leading-relaxed">
          Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem
          ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum dolor sit
          amet, con dhsnqw, adipiscing elit, sed do Lorem ipsum dolor amet,
          conse adipiscing elit, sed do ipsum dolor amet, conse adipiscing elit,
          sed
        </p>
        <p className="w-145 text-2xl pb-8 text-[#1E1E1E] leading-relaxed">
          Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem
          ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum dolor sit
          amet, con dhsnqw adipiscing elit, sed do Lorem ipsum dolor amet, conse
        </p>
        <p className="w-110 text-2xl pb-8 relative left-165 bottom-114 text-[#1E1E1E] leading-relaxed">
          Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem
          ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum dolor sit
          amet, con dhsnqw adipiscing elit, sed do Lorem ipsum dolor amet, conse
          adipiscing elit, sed do ipsum dolor amet, conse adipiscing elit, sed
          do Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do,
          Lorem ipsum dolor, amet, conse adipiscing elit, sed do, Lorem ipsum
        </p>
      </div>

      <div className="relative bottom-100">
        <h1 className="text-7xl pb-11">“GREATEST TEAM EVER”</h1>
        <div>
          {/* <Image
          src={image1}
          alt="image1"
          className="inline-block pr-8 w-145 h-120"
        /> */}
          <Image
            src={image2}
            alt="image2"
            className="inline-block pr-8 w-110 my-6 "
          />
        </div>
      </div>
      <div>
        <p className="w-full text-2xl pb-8 text-[#1E1E1E] leading-relaxed relative bottom-85">
          Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do Lorem
          ipsum dolor amet, conse adipiscing elit, sed do Lorem ipsum dolor sit
          amet, con dhsnqw adipiscing elit, sed do Lorem ipsum dolor amet, conse
          adipiscing elit, sed do ipsum dolor amet, conse adipiscing elit, sed
          do Lorem ipsum dolor sit amet, con dhsnqw adipiscing elit, sed do,
          Lorem ipsum dolor, amet, conse adipiscing elit,
        </p>
      </div>
    </div>
  );
};

export default about;
