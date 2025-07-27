import ChatBubble from "./chat-bubble";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useConversationStore } from "@/store/chat-store";
import { useEffect, useRef } from "react";

const MessageContainer = () => {
  const { selectedConversation } = useConversationStore();
  const messages = useQuery(api.messages.getMessages, {
    conversation: selectedConversation!._id,
  });
  const me = useQuery(api.users.getMe);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div
      className="relative flex-1 overflow-auto h-full"
      style={{
        backgroundColor: "#111827",
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.15) 1px, rgba(0, 9, 29, 0.9) 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Messages Content */}
      <div className="relative z-10 p-3">
        <div className="mx-12 flex flex-col gap-3">
          {messages?.map((msg, idx) => (
            <div key={msg._id} ref={lastMessageRef}>
              <ChatBubble
                message={msg}
                me={me}
                previousMessage={idx > 0 ? messages[idx - 1] : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
