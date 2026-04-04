"use client";
import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import Image from "next/image";
import PrimaryBtn from "../shared/PrimaryBtn";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be prorated and applied to your next billing cycle.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Once cancelled, you will continue to have access to your account until the end of your current billing period.",
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add custom information such as your company name, VAT number, or specific billing addresses to your invoices from the billing dashboard.",
  },
  {
    id: 5,
    question: "How does billing work?",
    answer:
      "We bill automatically on a monthly or annual basis, depending on your selected plan. You can manage your payment methods and view billing history in your account.",
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer:
      "You can change your account email address from your profile settings. We will send a verification link to your new email to confirm the change.",
  },
];
export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className="w-full mt-[180px] px-4 sm:px-6 lg:px-8">
      <div className="cs-container mb-5 rounded-2xl bg-[#F9FAFB] pt-[75px] px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-[#101828] mb-5">
            Frequently asked <span className="text-[#ED3C6A]">questions</span>
          </h2>
          <p className="text-black text-xl font-normal max-w-2xl mx-auto">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* Accordion */}
        <div className="pb-16 max-w-3xl mx-auto">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-gray-200/60 last:border-0 py-5"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-lg font-bold text-black pr-6">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#ED3C6A]">
                    {isOpen ? (
                      <MinusCircle className="w-6 h-6 stroke-[1.5]" />
                    ) : (
                      <PlusCircle className="w-6 h-6 stroke-[1.5]" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[16px] text-[#606060] pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Bottom CTA */}
      <div className="p-8 text-center flex flex-col items-center cs-container mb-[77px] rounded-2xl bg-[#F9FAFB] py-[32px] px-4 mx-auto">
        <Image
          width={120}
          height={80}
          src="/AvatarGroup.png"
          alt="Team member"
        />

        <h3 className="text-xl font-bold text-black mb-2 mt-8">
          Still have Questions?
        </h3>
        <p className="text-lg text-[#9C9C9C] font-normal mb-8">
          Can&apos;t find the answer you&apos;re looking for? Please chat to our
          friendly team.
        </p>

        <PrimaryBtn text="Get in touch" />
      </div>
    </section>
  );
}
