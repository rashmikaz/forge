import Image from "next/image";

const Scroll = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 relative">
        <Image
          src="/images/mouse.png" // <-- path relative to /public
          alt="mouse"
          width={28} // match w-7
          height={28} // match h-7
        />
      </div>
      <div>
        <p>scroll</p>
      </div>
    </div>
  );
};

export default Scroll;
