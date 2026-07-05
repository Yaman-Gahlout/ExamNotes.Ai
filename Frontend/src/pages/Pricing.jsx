import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

import PricingHero from "../components/Pricing/PricingHero";
import CreditInfo from "../components/Pricing/CreditInfo";
import PricingFeatures from "../components/Pricing/PricingFeatures";
import PricingCard from "../components/Pricing/PricingCard";
import FAQ from "../components/Pricing/FAQ";
import { useState } from "react";

export default function Pricing() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const plans = [
    {
      name: "Starter",
      credits: 150,
      price: 99,
      popular: false,
      gradient: "from-purple-600 to-fuchsia-500",
    },
    {
      name: "Pro",
      credits: 350,
      price: 199,
      popular: true,
      gradient: "from-purple-600 via-fuchsia-500 to-cyan-500",
    },
    {
      name: "Ultimate",
      credits: 1000,
      price: 499,
      popular: false,
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <div
      className="
      relative
      min-h-screen
      
      bg-[#020617]
      text-white
      "
    >
      {/* Navbar */}

      <Navbar isUpload={false} />

      {/* Background */}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
          absolute
          -top-20
          -left-20
          h-96
          w-96
          rounded-full
          bg-purple-600/20
          blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-0
          right-0
          h-96
          w-96
          rounded-full
          bg-cyan-500/20
          blur-[150px]
          "
        />
      </div>

      <div
        className="
        mx-auto
        max-w-7xl
        px-5
        py-10
        "
      >
        {/* Hero */}

        <PricingHero />

        {/* Credit Info */}

        <div className="mt-20">
          <CreditInfo />
        </div>

        {/* Pricing Cards */}

        <section className="mt-24" id="pricing-card">
          <div className="text-center">
            <h2
              className="
              text-4xl
              md:text-5xl
              font-black
              "
            >
              Choose Your Plan
            </h2>

            <p
              className="
              mt-4
              text-slate-400
              max-w-2xl
              mx-auto
              "
            >
              Purchase credits and continue generating exam-oriented notes,
              MCQs, revision sheets and interview questions.
            </p>
          </div>

          <div
            className="
            mt-14
            grid
            gap-8
            lg:grid-cols-3
            "
          >
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </section>

        {/* Features */}

        <div className="mt-24">
          <PricingFeatures />
        </div>

        {/* FAQ */}

        <div className="mt-24">
          <FAQ />
        </div>

        {/* CTA */}

        <section
          className="
          mt-24
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          md:p-12
          text-center
          overflow-hidden
          relative
          "
        >
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-purple-600/10
            via-fuchsia-500/10
            to-cyan-500/10
            "
          />

          <div className="relative z-10">
            <h2
              className="
              text-4xl
              md:text-5xl
              font-black
              "
            >
              Ready To Unlock
              <span
                className="
                block
                bg-gradient-to-r
                from-purple-400
                via-fuchsia-400
                to-cyan-400
                bg-clip-text
                text-transparent
                "
              >
                Unlimited Learning?
              </span>
            </h2>

            <p
              className="
              mt-5
              text-slate-400
              max-w-2xl
              mx-auto
              "
            >
              Generate smarter notes, revise faster and score better with
              ExamNotes AI.
            </p>

            <button
              className="
              mt-8
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-cyan-500
              px-8
              py-4
              font-semibold
              shadow-lg
              shadow-purple-500/20
              hover:scale-[1.03]
              transition
              "
              onClick={() => scrollToSection("pricing-card")}
            >
              Buy Credits Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
