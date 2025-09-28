"use client";

import HomeComponent from "./Home/page"; // rename import
import Intro from "./intro/page";
import InfiniteScroll from "./components/InfiniteScroll";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

export default function MainPage() {
  return (
    <main className="w-full">
      <section className="h-screen w-full">
        <HomeComponent />
      </section>

      <section className="h-screen w-full">
        <Intro />
      </section>

      <InfiniteScroll />
      <Service />
      <Testimonial />
    </main>
  );
}
