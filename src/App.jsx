import { motion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaFire } from "react-icons/fa";
import { useState } from "react";
import heroImg from "./assets/hero.jpg";


export default function App() {
  const [bmi, setBmi] = useState(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;
    const h = height / 100;
    const result = (weight / (h * h)).toFixed(1);
    setBmi(result);
  };

  return (
    <div className="font-sans text-white">

      {/* HERO */}
      <section
         className="h-screen bg-cover bg-center relative flex items-center justify-center text-center"
  style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 px-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-4">
            BUILD YOUR DREAM BODY
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-200 max-w-xl mx-auto mb-8"
          >
            Join the ultimate fitness journey with our fully responsive gym website template.
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() =>
                document.getElementById("pricing").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() =>
                window.open("https://gumroad.com/your-product", "_blank")
              }
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Join Now
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-8 bg-black">
        {[FaDumbbell, FaHeartbeat, FaFire].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #facc15" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-zinc-900 p-8 rounded-2xl shadow-lg transition"
          >
            <Icon className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Training</h3>
            <p className="text-gray-400">
              Personalized workout plans and expert guidance.
            </p>
          </motion.div>
        ))}
      </section>

      {/* BMI CALCULATOR */}
      <section className="py-20 px-6 text-center bg-zinc-900">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">BMI Calculator</h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
          <input
            type="number"
            placeholder="Weight (kg)"
            className="px-4 py-2 rounded bg-black border border-gray-700 text-white"
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Height (cm)"
            className="px-4 py-2 rounded bg-black border border-gray-700 text-white"
            onChange={(e) => setHeight(e.target.value)}
          />
          <button
            onClick={calculateBMI}
            className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold"
          >
            Calculate
          </button>
        </div>

        {bmi && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-xl"
          >
            Your BMI: {bmi}
          </motion.p>
        )}
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 grid md:grid-cols-3 gap-8 text-center bg-black">
        {["Basic", "Standard", "Premium"].map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px #facc15" }}
            className="bg-zinc-900 p-8 rounded-2xl border border-gray-800 transition"
          >
            <h3 className="text-2xl font-bold mb-4">{plan}</h3>
            <p className="text-yellow-400 text-3xl mb-6">
              ${i === 0 ? 19 : i === 1 ? 39 : 59}
            </p>
            <button
              onClick={() =>
                window.open("https://gumroad.com/your-product", "_blank")
              }
              className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold"
            >
              Join Now
            </button>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800 bg-black">
        © 2026 PowerFit Gym. All rights reserved.
      </footer>
    </div>
  );
}
