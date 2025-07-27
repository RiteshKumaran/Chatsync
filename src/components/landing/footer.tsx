import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">ChatSync</h3>
            <p className="mb-4 max-w-md">
              A modern chat application with AI integration and real-time messaging. Connect with anyone, anywhere.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} ChatSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
