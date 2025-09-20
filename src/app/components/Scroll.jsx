import Image from "next/image";
import mouse from "../../../public/images/mouse.png";

const Scroll = () => {
  return (
    <>
      <div className="w-7 h-7 relative right-9 top-7">
        <Image src={mouse} alt="mouse" />
      </div>
      <div>
        <p>scroll</p>
      </div>
    </>
  );
};

export default Scroll;
