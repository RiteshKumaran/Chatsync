"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";

const Nav = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 dark:from-green-400 dark:to-blue-500"
            >
              ChatSync
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitch />
            {isSignedIn ? (
              <>
                <Link href="/chat">
                  <Button
                    variant="outline"
                    className="border-gray-300 dark:border-gray-700"
                  >
                    Open Chat
                  </Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <Link href="/chat">
                <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 dark:from-green-600 dark:to-blue-700">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
