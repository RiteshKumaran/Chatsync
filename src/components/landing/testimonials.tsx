import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    content:
      "The best messaging experience I've had. The real-time features and modern interface make communication effortless.",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    content:
      "Incredibly fast and reliable. The video calls are crystal clear and the UI is beautifully designed.",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketer",
    content:
      "Love the modern design and smooth animations. Group chats have never been more organized and fun to use.",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 dark:bg-grid-white/[0.02] bg-grid-black/[0.02] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black/50 bg-white/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
      
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 dark:from-green-400 dark:to-blue-500">
            What Our Users Say
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 mt-4 text-lg">
            Join thousands of satisfied users who love our modern messaging
            platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-green-500 dark:border-blue-500">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-gradient-to-r from-green-500 to-blue-600 w-8 h-8 rounded-full opacity-50 blur-xl" />
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 bg-gradient-to-r from-blue-600 to-green-500 w-12 h-12 rounded-full opacity-50 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
