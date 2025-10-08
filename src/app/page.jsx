"use client";

import HomeComponent from "./Home/page";
import Intro from "./intro/page";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import ConferenceSection from "./components/ConferenceSection";
import Footer from "./components/Footer";

export default function MainPage() {
  return (
    <main className="w-full">
      <section className="h-screen w-full">
        <HomeComponent />
      </section>

      <section className="h-screen w-full">
        <Intro />
      </section>

      <Service />
      <Testimonial />
      <ConferenceSection />
      <Footer />
    </main>
  );
}
