"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What does Forge do?",
    answer:
      "Forge is a software company that builds cutting-edge digital solutions, focusing on UI/UX, scalable applications, and modern web platforms to help businesses grow. digital solutions, focusing on UI/UX, scalable applications, and modern web platforms to help businesses",
  },
  {
    question: "How does Forge use AI?",
    answer:
      "Forge leverages AI for real-time sentiment detection, smart automation, and data-driven insights. Our AI-driven solutions help optimize  digital solutions, focusing on UI/UX, scalable applications, and modern web platforms to help businesses workflows and enhance customer experiences.",
  },
  {
    question: "Can Forge integrate with other tools and platforms?",
    answer:
      "Yes, Forge ensures seamless integration with CRMs, ERPs, cloud services, and third-party APIs to fit smoothly into your existing workflow.",
  },
  {
    question: "Is the platform customizable?",
    answer:
      "Absolutely! Forge designs and develops fully customizable solutions  digital solutions, focusing on UI/UX, scalable applications, and modern web platforms to help businesses tailored to your business needs.",
  },
  {
    question: "Is there customer support available?",
    answer:
      "Yes, Forge provides dedicated technical support and ongoing assistance for all clients.",
  },
  {
    question: "How can I get started with Forge?",
    answer:
      "You can get started by reaching out to Forge through our website to schedule a consultation or request a demo.",
  },
];
export default function Faq() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-[41%] mx-auto mt-10 space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className="border rounded-md p-4 cursor-pointer transition-all duration-300 ease-in-out  shadow-sm"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-lg">{faq.question}</h3>
            <span className="text-xl">{hovered === i ? "−" : "+"}</span>
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              hovered === i ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
