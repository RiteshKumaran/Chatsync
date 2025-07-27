import { Lock, MessageSquare, Users, Zap } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const ChatPlaceHolder = () => {
  return (
    <div className="w-3/4 bg-white dark:bg-gray-900 flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-center w-full justify-center py-10 gap-6 max-w-2xl">
        <div className="bg-gradient-to-r from-green-500/10 to-blue-600/10 p-4 rounded-full">
          <MessageSquare
            size={48}
            className="text-blue-600 dark:text-blue-400"
          />
        </div>

        <h2 className="text-3xl font-bold mt-2 mb-2 text-gray-900 dark:text-gray-100 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
          Welcome to ChatSync
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
          Start a conversation by selecting a contact from the sidebar
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
          {[
            {
              icon: <MessageSquare className="h-6 w-6 text-green-500" />,
              title: "Chat",
              description: "Send messages to friends and colleagues",
            },
            {
              icon: <Users className="h-6 w-6 text-blue-500" />,
              title: "Groups",
              description: "Create groups for team collaboration",
            },
            {
              icon: <Zap className="h-6 w-6 text-amber-500" />,
              title: "AI Assistant",
              description: "Get help from our AI assistant",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-2">
                {feature.icon}
                <h3 className="font-medium">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" pt-8 border-t border-gray-100 dark:border-gray-800 w-full max-w-2xl text-center">
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center gap-2">
          <Lock size={14} /> Your personal messages are end-to-end encrypted
        </p>
      </div>
    </div>
  );
};
export default ChatPlaceHolder;
