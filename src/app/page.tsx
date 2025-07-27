import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Nav from "@/components/landing/nav";
import Testimonials from "@/components/landing/testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 animate-gradient-x">
      <Nav />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 overflow-hidden relative">
          <div className="absolute inset-0 dark:bg-grid-white/[0.05] bg-grid-black/[0.05] -z-10 animate-fade-in" />
          <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10 animate-pulse-slow" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="animate-fade-in-up transition-all duration-700 ease-out">
              <span className="inline-block py-1 px-3 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full mb-4">
                Introducing ChatSync
              </span>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 transition-all duration-500 hover:scale-105">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 dark:from-green-400 dark:to-blue-500">
                  Connect with Anyone, <br />{" "}
                  <span className="inline-block ">Anywhere</span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience real-time messaging with AI integration, group chats,
                and seamless media sharing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/chat">
                  <Button
                    size="lg"
                    className="text-lg px-8 bg-green-400/80 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 border-2"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Floating mockup */}
            <div className="mt-16 relative mx-auto transform w-fit transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative  bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <Image
                  src="/desktop-here.png"
                  alt="ChatSync Interface"
                  width={900}
                  height={700}
                  className=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        {/* <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Trusted by teams at
              </p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {["Microsoft", "Google", "Slack", "Airbnb", "Uber"].map(
                  (company) => (
                    <span
                      key={company}
                      className="text-gray-500 dark:text-gray-400 font-bold text-xl"
                    >
                      {company}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section> */}

        {/* Benefits section */}
        <section className="py-20 bg-white dark:bg-gray-950" id="benefits">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose ChatSync?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Built for teams and individuals who value privacy, speed, and
                seamless communication
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="h-10 w-10 text-green-500" />,
                  title: "Real-time Messaging",
                  description:
                    "Instant message delivery with typing indicators and read receipts",
                },
                {
                  icon: <Shield className="h-10 w-10 text-blue-500" />,
                  title: "End-to-End Encryption",
                  description:
                    "Your conversations are secure and private with advanced encryption",
                },
                {
                  icon: <Zap className="h-10 w-10 text-yellow-500" />,
                  title: "AI Integration",
                  description:
                    "Leverage ChatGPT and DALL-E to enhance your conversations",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500 dark:hover:border-blue-500 group"
                >
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg inline-block mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section id="testimonials">
          <Testimonials />
        </section> */}

        {/* Features Section with auto-rotation */}
        <section id="features">
          <Features />
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600 dark:from-green-600 dark:to-blue-700 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 transform scale-x-[2] group-hover:scale-x-[2.5] transition-transform duration-1000 blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6 transform transition-all duration-500 hover:scale-105">
              Ready to transform your communication?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up">
              Join thousands of users who have already made the switch to
              ChatSync.
            </p>
            <Link href="/sign-up">
              <Button
                size="lg"
                className="text-lg px-8 bg-white text-blue-600 hover:bg-gray-100 transform transition-all duration-500 hover:scale-110 hover:shadow-xl"
              >
                Get Started for Free
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
