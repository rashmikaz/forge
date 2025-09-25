"use client";

import Landing from "./landing/page";
import Intro from "./intro/page";

export default function Home() {
  return (
    <main className="w-full">
      {/* First Section */}
      <section className="h-screen w-full">
        <Landing />
      </section>

      {/* Next Section */}
      <section className="h-screen w-full">
        <Intro />
      </section>
    </main>
  );
}
