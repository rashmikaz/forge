"use client";

import Image from "next/image";

export default function ConferenceSection() {
  return (
    <section className="bg-[#1a1d23] text-white min-h-screen px-6 py-12 flex flex-col gap-10 pt-25 pl-44 pr-44">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-[#23272f] rounded-2xl overflow-hidden flex">
          <div className="relative w-1/2 h-auto">
            <Image
              src="/robot-globe.jpg"
              alt="Globe with robotic hand"
              width={600}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <p className="uppercase text-xs tracking-widest text-gray-400 mb-2">
              Digital Solutions
            </p>
            <h1 className="text-3xl font-bold mb-4">
              Proudly presents <br />
              Hevit Yat Tec <br />
              Conference 2025
            </h1>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our work style is adaptive. We partner with you to apply the right
              services at the right time in order to support your needs and
              growth. We partner with you to apply the right services at the
              right time in order to support your needs and growth.
            </p>
            <button className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:underline">
              <span>Digital Solutions</span>
              <span>↗</span>
            </button>
          </div>
        </div>

        <div className="bg-[#23272f] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <Image
              src="/future-today.jpg"
              alt="Future Today"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-3">Future Today</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Work style is adaptive. We partner with you to apply the right
              services at the right time in order to support your needs and
              growth. Work style is adaptive. We partner with you to apply the
              right services at the right time in order to support your needs
              and growth.
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:underline mt-4">
            <span>Digital Solutions</span>
            <span>↗</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#23272f] rounded-2xl overflow-hidden">
          <Image
            src="/team.jpg"
            alt="Team working"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-[#23272f] rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Proudly presents Hevit Yat Tec Conference
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our work style is adaptive. We partner with you to apply the right
              services at the right time in order to support your needs and
              growth. Our work style is adaptive. We partner with you to apply
              the right services at the right time in order to support your
              needs and growth.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our work style is adaptive. We partner with you to apply the right
              services at the right time in order to support your needs and
              growth.
            </p>
          </div>
          <div className="flex justify-between items-end">
            <button className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:underline">
              <span>Digital Solutions</span>
              <span>↗</span>
            </button>
            <p className="text-3xl font-bold">FORGE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
