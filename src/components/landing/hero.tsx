import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in-up">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-green-primary to-green-secondary">
                Connect Instantly, Chat Seamlessly
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Experience the next generation of messaging with our modern
                WhatsApp clone. Real-time chat, voice calls, and more.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                className="bg-gradient-to-r from-green-primary to-green-secondary hover:opacity-90 transition-opacity animate-scale-in"
                onClick={() => router.push("/chat")}
              >
                Start Chatting
              </Button>
              <Button
                variant="outline"
                className="hover-scale animate-fade-in"
                onClick={() => router.push("#features")}
              >
                Explore Features
              </Button>
            </div>
          </div>
          <div className="mx-auto flex items-center justify-center relative lg:justify-end animate-bounce-in">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
              <Image
                src="/desktop-hero.png"
                alt="Hero Image"
                fill
                className="object-contain drop-shadow-2xl hover-scale"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-chat rounded-full filter blur-xl opacity-50 animate-pulse-slow" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-chat rounded-full filter blur-xl opacity-50 animate-pulse-slow" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-primary to-green-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
