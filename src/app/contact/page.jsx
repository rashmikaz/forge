import Button from "../components/Button";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const page = () => {
  return (
    <div className="pt-25 pl-44 pr-44 ">
      <h1 className="w-160 text-7xl ">Lorem ipsum dolor consectetur </h1>
      <p className="w-130 text-2xl pb-8 text-[#1E1E1E] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div className="max-w-2xl mx-auto py-10 relative right-55 bottom-0">
        <div className="border-b border-gray-300 py-8">
          <div className="flex items-start gap-4">
            <span className="text-sm text-gray-500">01</span>
            <div>
              <h3 className="text-lg  text-black">
                Lorem ipsum dolor sit amet ?
              </h3>
              <p className="text-sm text-gray-500">max de</p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 py-8">
          <div className="flex items-start gap-4">
            <span className="text-sm text-gray-500">02</span>
            <div>
              <h3 className="text-lg  text-black">
                Lorem ipsum dolor sit amet ?
              </h3>
              <p className="text-sm text-gray-500">max de</p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 py-8">
          <div className="flex items-start gap-4">
            <span className="text-sm text-gray-500">03</span>
            <div>
              <h3 className="text-lg  text-black">
                Lorem ipsum dolor sit amet ?
              </h3>
              <p className="text-sm text-gray-500">max de</p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 py-8">
          <div className="flex items-start gap-4">
            <span className="text-sm text-gray-500">04</span>
            <div>
              <h3 className="text-lg  text-black">
                Lorem ipsum dolor sit amet ?
              </h3>
              <p className="text-sm text-gray-500">max de</p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 py-8">
          <div className="flex items-start gap-4">
            <span className="text-sm text-gray-500">05</span>
            <div>
              <h3 className="text-lg  text-black">
                Lorem ipsum dolor sit amet ?
              </h3>
              <p className="text-sm text-gray-500">max de</p>
            </div>
          </div>
        </div>
      </div>

      <aside className="w-52 absolute left-250 bottom-0">
        <div className="pb-8">
          <h3 className="text-lg text-gray-500">CONTACT DETAILS</h3>
          <h3 className="text-lg text-black-500">forge@gmail.com</h3>
          <h3 className="text-lg text-black-500">+94 90 56412789</h3>
        </div>

        <div className="pb-8">
          <h3 className="text-lg text-gray-500">BUSINESS DETAILS</h3>
          <h3 className="text-lg text-black-500">
            No 112 galle road, western province, colombo
          </h3>
        </div>

        <div className="pb-8"></div>

        <h3 className="text-lg text-gray-500 mt-2">SOCIAL MEDIA</h3>

        <div className="flex gap-7 mb-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF
              size={40}
              className="hover:text-blue-600 transition-colors duration-300"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              size={40}
              className="hover:text-blue-400 transition-colors duration-300"
            />
          </a>
        </div>

        <div className="flex gap-7 mt-7">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={40}
              className="hover:text-pink-500 transition-colors duration-300"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              size={40}
              className="hover:text-blue-700 transition-colors duration-300"
            />
          </a>
        </div>
      </aside>

      <div className="my-10 relative bottom-10 left-10">
        <Button />
      </div>
    </div>
  );
};

export default page;
