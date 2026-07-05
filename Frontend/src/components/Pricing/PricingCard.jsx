import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCoins, FaCheck, FaCrown, FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { base_url } from "../../App";
import { useNavigate } from "react-router-dom";

export default function PricingCard({ plan }) {
  const { name, credits, price, popular, gradient } = plan;
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const data = {
        planId: name,
        amount: price,
        credits,
      };
      const response = await axios.post(base_url + "/payments/order", data, {
        withCredentials: true,
      });

      console.log(response);
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: response.data.order.amount,
        currency: "INR",
        name: "ExamNotes.Ai",
        description: `${name} - ${credits} credits`,
        order_id: response.data.order.id,

        handler: async function (payment) {
          try {
            const result = await axios.post(
              `${base_url}/payments/verify`,
              payment,
              {
                withCredentials: true,
              },
            );

            console.log("payment result : ", result);

            toast.success("Payment Successful");
            navigate("/home");
          } catch (err) {
            toast.error("Payment verification failed");
          }
        },

        modal: {
          ondismiss: function () {
            toast.info("Payment cancelled");
          },
        },

        theme: {
          color: "#10b981",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.log(err.response);
      toast.error("Error while purchasing credits");
    }
  }
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
      relative
      overflow-hidden
      rounded-[36px]
      border
      backdrop-blur-xl
      ${
        popular
          ? "border-purple-500/30 bg-purple-500/5"
          : "border-white/10 bg-white/5"
      }
      `}
    >
      {/* Popular Badge */}

      {popular && (
        <div
          className="
          absolute
          right-5
          top-5
          z-20
          "
        >
          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-cyan-500
            px-4
            py-2
            text-xs
            font-semibold
            "
          >
            <FaCrown />
            Most Popular
          </div>
        </div>
      )}

      {/* Hover Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
        "
      >
        <div
          className="
          absolute
          -top-24
          -left-24
          h-72
          w-72
          rounded-full
          bg-purple-600/20
          blur-[120px]
          "
        />

        <div
          className="
          absolute
          -bottom-24
          -right-24
          h-72
          w-72
          rounded-full
          bg-cyan-500/20
          blur-[120px]
          "
        />
      </div>

      {/* Gradient Border */}

      <div
        className={`
        h-[4px]
        bg-gradient-to-r
        ${gradient}
        `}
      />

      <div className="relative z-10 p-8">
        {/* Icon */}

        <div
          className={`
          h-16
          w-16
          rounded-3xl
          bg-gradient-to-r
          ${gradient}
          flex
          items-center
          justify-center
          shadow-lg
          `}
        >
          <FaCoins size={28} className="text-white" />
        </div>

        {/* Plan */}

        <h3
          className="
          mt-6
          text-3xl
          font-black
          "
        >
          {name}
        </h3>

        <p
          className="
          mt-2
          text-slate-400
          "
        >
          Perfect for exam preparation
        </p>

        {/* Credits */}

        <div className="mt-8">
          <div
            className="
            flex
            items-end
            gap-2
            "
          >
            <h2
              className="
              text-6xl
              font-black
              bg-gradient-to-r
              from-purple-400
              via-fuchsia-400
              to-cyan-400
              bg-clip-text
              text-transparent
              "
            >
              {credits}
            </h2>

            <span
              className="
              mb-2
              text-slate-400
              "
            >
              Credits
            </span>
          </div>

          <div
            className="
            mt-4
            text-4xl
            font-black
            "
          >
            ₹{price}
          </div>
        </div>

        {/* Features */}

        <div
          className="
          mt-8
          space-y-4
          "
        >
          {[
            "Generate AI Notes",
            "Revision Sheets",
            "MCQs & Answers",
            "Interview Questions",
            "Flowcharts & Diagrams",
            "Priority Processing",
          ].map((feature) => (
            <div
              key={feature}
              className="
              flex
              items-center
              gap-3
              "
            >
              <div
                className="
                h-6
                w-6
                rounded-full
                bg-green-500/20
                flex
                items-center
                justify-center
                text-green-400
                "
              >
                <FaCheck size={10} />
              </div>

              <span
                className="
                text-slate-300
                "
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Usage */}

        <div
          className="
          mt-8
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          "
        >
          <p
            className="
            text-sm
            text-slate-400
            "
          >
            Approximate Usage
          </p>

          <h4
            className="
            mt-2
            text-xl
            font-bold
            text-cyan-300
            "
          >
            {Math.floor(credits / 10)} PDF Generations
          </h4>
        </div>

        {/* CTA */}

        <button
          className={`
          mt-8
          w-full
          rounded-2xl
          bg-gradient-to-r
          ${gradient}
          py-4
          font-semibold
          shadow-lg
          transition
          hover:scale-[1.02]
          flex
          items-center
          justify-center
          gap-3
          `}
          onClick={() => {
            handleClick();
          }}
        >
          Purchase Credits
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
}
