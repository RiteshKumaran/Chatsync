"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Real-time Chat",
    description:
      "Experience seamless real-time messaging with instant delivery and read receipts.",
    icon: "💬",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "AI Integration",
    description: "Chat with AI assistants powered by Gemini",
    icon: "🤖",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Group Chats",
    description:
      "Create and manage group conversations with multiple participants.",
    icon: "👥",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Media Sharing",
    description: "Share images, videos, and documents with your contacts.",
    icon: "📸",
    color: "from-green-500 to-emerald-500",
  },
];

const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need for modern communication in one place
          </p>
        </div>

        <div className="relative h-[400px] md:h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <div
                  className={`relative w-48 h-48 rounded-3xl bg-gradient-to-br ${features[currentFeature].color} flex items-center justify-center shadow-xl`}
                >
                  <span className="text-7xl">
                    {features[currentFeature].icon}
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent blur opacity-30 animate-pulse"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 dark:from-green-400 dark:to-blue-500">
                  {features[currentFeature].title}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md">
                  {features[currentFeature].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentFeature(idx)}
                className={`w-12 h-2 rounded-full transition-colors ${
                  idx === currentFeature
                    ? "bg-gradient-to-r from-green-500 to-blue-600"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`View feature ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
